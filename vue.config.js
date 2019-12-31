module.exports = {
    chainWebpack: config => {
        const images = config.module
            .rule("images");

        images.uses.clear();

        images
            .use("@brigad/ideal-image-loader")
            .loader("@brigad/ideal-image-loader")
            .options({
                name: 'img/[name].[hash:8].[ext]'
            })
            .end();
    }
};
