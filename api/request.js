export default ((url, method = 'GET', data = {}) => {
  return new Promise((resolve, reject) => {
    // url.request请求
    uni.request({
      url: process.env.NODE_ENV === 'development' ? 'http://zjws-uat.568yun.com.cn/' + url : 'http://zjws-uat.568yun.com.cn/' + url, //小程序

      method,
      data,
      success: (res) => {
        // console.log(res)
        resolve(res.data.data)
      },
      fail: (erro) => {
        reject(erro)
      }
    })

  })
})