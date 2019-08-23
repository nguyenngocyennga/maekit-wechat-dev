//index.js
//获取应用实例
import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({
  data: {
    bookings: false
  },

  onLoad: function () {
    
  },

  fetchBookings: function (options) {
    console.log("bookings fetch called")
    apiClient.getBookings(options)
  },

  onReady: function() {
    const page = this
    const options = {
      success: function (res) {
        console.log(res)
        const bookings = res.data.bookings
        console.log("BOOKING", bookings)
        if (bookings.length > 0) {
          page.setData({
            bookings
          })
        }
        
      },

      fail: function (err) {
        console.log(err)
      }
    }
    
    setTimeout(function () { page.fetchBookings(options) }, 2000);
  },

  

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  goToProjects: function (e) {
    let category = e.currentTarget.dataset.category
    wx.reLaunch({
      url: `/pages/projects/projects?query=${category}`,
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
  