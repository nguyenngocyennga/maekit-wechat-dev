onLoad: function (options) {
  let that = this
  wx.authorize({
    scope: 'scope.userLocation',
    success(res) {
      console.log(res)
      wx.chooseLocation({
        success: function (res) {
          console.log(res)
        }
      })
    },
    fail(err) {
      console.log(err)
    }
  })
}