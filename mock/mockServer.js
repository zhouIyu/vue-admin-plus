const path = require('path');
const chalk = require('chalk');
const Mock = require('mockjs');
const chokidar = require('chokidar');
const bodyParser = require('body-parser');
const getJsonFiles = require('./utils/getJsonFiles');
const mockDir = path.join(process.cwd(), 'mock');
const baseURL = 'http://localhost:8888';

const responseFake = (url, type, respond) => {
    return {
        url: new RegExp(`${baseURL}${url}`),
        type: type || 'get',
        response (req, res) {
            res.status(200);
            if (JSON.stringify(req.body) !== '{}') {
                console.log(chalk.green(`> 请求地址：${req.path}`));
                console.log(chalk.green(`> 请求参数：${JSON.stringify(req.body)}\n`));
            } else {
                console.log(chalk.green(`> 请求地址：${req.path}\n`));
            }
            res.json(
                Mock.mock(respond instanceof Function ? respond(req, res) : respond)
            );
        }
    };
};

const loadFiles = () => {
    const files = getJsonFiles('mock/controller');
    return files.map(item => {
        const obj = require(item);
        return [...obj];
    });
};

const registerRoutes = (app) => {
    let mockLastIndex;
    const mocks = loadFiles();
    const mocksForServer = mocks.map(route => {
        const { url, type, response } = route;
        return responseFake(url, type, response);
    });
    for (const mock of mocksForServer) {
        app[mock.type](mock.url, mock.response);
        mockLastIndex = app._router.stack.length;
    }
    const mockRoutesLength = Object.keys(mocksForServer).length;
    return {
        mockRoutesLength: mockRoutesLength,
        mockStartIndex: mockLastIndex - mockRoutesLength
    };
};

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(
        bodyParser.urlencoded({
            extended: true
        })
    );

    const mockRoutes = registerRoutes(app);
    let mockRoutesLength = mockRoutes.mockRoutesLength;
    let mockStartIndex = mockRoutes.mockStartIndex;
    chokidar
        .watch(mockDir, {
            ignored: /mock-server/,
            ignoreInitial: true
        })
        .on('all', (event) => {
            if (event === 'change' || event === 'add') {
                try {
                    app._router.stack.splice(mockStartIndex, mockRoutesLength);

                    Object.keys(require.cache).forEach((item) => {
                        if (item.includes(mockDir)) {
                            delete require.cache[require.resolve(item)];
                        }
                    });
                    const mockRoutes = registerRoutes(app);
                    mockRoutesLength = mockRoutes.mockRoutesLength;
                    mockStartIndex = mockRoutes.mockStartIndex;
                } catch (error) {
                    console.log(chalk.red(error));
                }
            }
        });
};
