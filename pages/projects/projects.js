// pages/projects/projects.js
import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (urlOptions) {
    const { query } = urlOptions
    const page = this
    const options = {
      query,
      success: function (res) {
        console.log(res)
        const projects = res.data.projects
        app.globalData.projects = projects
        page.setData({
          projects
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getProjects(options)
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
  viewEachCategory: function (e) {
    let category = e.currentTarget.dataset.category
    wx.reLaunch({
      url: `/pages/projects/projects?query=${category}`,
    })
  },
  viewAllProjects: function () {
    wx.reLaunch({
      url: '/pages/projects/projects',
    })
  },
  handleClick: function (e) {
    let project_id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/one_project/one_project?id=${project_id}`,
    })
  }
})