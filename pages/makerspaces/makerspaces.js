// pages/makerspaces/makerspaces.js

import apiClient from "../../utils/apiClient.js"
const app=getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function () {
    const page = this
    const options = {
      success: function (res) {
        const makerspaces = res.data.makerspaces;
        app.globalData.makerspaces = makerspaces
        page.setData({
          makerspaces
        })
      },

      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getMakerspaces(options)
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
  },
  handleClick: function (e) {
    // console.log(e)
    let makerspace_id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/makerspace_one/makerspace_one?id=${makerspace_id}`,
    })
  }
})