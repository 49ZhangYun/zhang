//配置vue项目--重启项目生效
module.exports = {
    publicPath: "./",
    devServer: {
        host: "localhost",
        port: "9527",
        open: true,
        proxy: {
            "/api": {
                target: "https://demo.dscmall.cn/api",
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
}