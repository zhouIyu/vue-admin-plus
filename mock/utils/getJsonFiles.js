const fs = require('fs');
const { join } = require('path');

function getJsonFiles (jsonPath) {
    const jsonFiles = [];

    function findJsonFile (path) {
        const files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            const fPath = join(path, item);
            const stat = fs.statSync(fPath);
            if (stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            if (stat.isFile() === true) {
                jsonFiles.push(fPath);
            }
        });
    }

    findJsonFile(jsonPath);
    return jsonFiles.map(item => item.replace(/mock/, '.'));
}

module.exports = getJsonFiles;
