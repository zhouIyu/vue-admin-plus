module.exports = {
    lintOnSave: true,
    devServer: {
        port: 8188,
        open: true,
        hot: true,
        overlay: {
            warnings: true,
            errors: true
        }
    }
};
