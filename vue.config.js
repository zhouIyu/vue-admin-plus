const mockServer = () => {
    if (process.env.NODE_ENV === 'development') {
        return require('./mock/mockServer.js');
    } else {
        return '';
    }
};
module.exports = {
    lintOnSave: true,
    devServer: {
        port: 8188,
        open: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        },
        after: mockServer()
    }
};
