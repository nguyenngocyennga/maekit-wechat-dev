//app.js
App({
  onLaunch: function () {
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.login({
      success: res => {
        const baseUrl = 'http://localhost:3000/api/v1/'
        // const baseUrl = "https://makit.wogengapp.cn/api/v1/"
        console.log('beginning login')
        wx.request({
          url: baseUrl + 'login/',
          method: 'post',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log("app.js LINEEEEE 19", res)
            this.globalData.user = res.data.userId
            console.log("app.js > app.globalData.user (User in DB):", this.globalData.user)
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})