// pages/scan/scan.js
import apiClient from "../../utils/apiClient.js"

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
    const page = this
    const equipments = getApp().globalData.equipments

    wx.scanCode({
      onlyFromCamera: true,
      success(res) {

        equipments.scan = res.result
        console.log(equipments)
        console.log(equipments.scan)

        page.setData({
          qrResult: equipments.scan
        })

        wx.reLaunch({
          url: `/pages/one_equip/one_equip?query=${qrResult}`,
        })
      },
      fail(err) {
        console.log(err)
      }
    })

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

  }
})