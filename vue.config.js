const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{//代理服务器，解决跨越问题
    proxy:{
      '/api':{
        target:'https://c.m.163.com/ug/api/',
        ws:true,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
})
