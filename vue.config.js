module.exports = {
    chainWebpack: config => {
        config.module
            .rule("images")
            .use("@brigad/ideal-image-loader")
            .loader("@brigad/ideal-image-loader")
            .options({
                name: 'img/[name].[hash:8].[ext]'
            })
            .end();
    }
};
