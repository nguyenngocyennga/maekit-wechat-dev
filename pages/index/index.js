//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },

  onLoad: function () {

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToProjects: function() {
    wx.navigateTo({
      url: '/pages/projects/projects',
    })
  },
  goToEquipments: function() {
    wx.navigateTo({
      url: '/pages/equipments/equipments',
    })
  },
  goToFind: function() {
    wx.navigateTo({
      url: '/pages/makerspaces/makerspaces',
    })
  },
  goToHome: function() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})
