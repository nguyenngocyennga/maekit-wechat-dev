// pages/project_details/project_details.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToIngredient: function () {
    wx.reLaunch({
      url: '/pages/project_ingredients/project_ingredients',
    })
  },
  goToProjects: function () {
    wx.reLaunch({
      url: '/pages/projects/projects',
    })
  },
  goToEquipments: function () {
    wx.reLaunch({
      url: '/pages/equipments/equipments',
    })
  },
  goToFind: function () {
    wx.reLaunch({
      url: '/pages/makerspaces/makerspaces',
    })
  },
  goToHome: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  }
})