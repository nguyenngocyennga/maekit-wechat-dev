//index.js
//获取应用实例
import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({
  data: {
    imgUrls: ['https://avos-cloud-dycrb1wrauoc.s3.amazonaws.com/94230d1687cf1d580095/LED%20Ring%20-%20Rev%204.png',
      'https://avos-cloud-dycrb1wrauoc.s3.amazonaws.com/ff3518aa76030a750804/Wired%20up%20Stationery%20-%20Rev%201.jpg', 'https://avos-cloud-dycrb1wrauoc.s3.amazonaws.com/4b5556795d8c3215f15e/Sew%20LED%20Torch%20Rev%202.png'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  // changeIndicatorDots: function (e) {
  //   this.setData({
  //     indicatorDots: !this.data.indicatorDots
  //   })
  // },
  // changeAutoplay: function (e) {
  //   this.setData({
  //     autoplay: !this.data.autoplay
  //   })
  // },
  // intervalChange: function (e) {
  //   this.setData({
  //     interval: e.detail.value
  //   })
  // },
  // durationChange: function (e) {
  //   this.setData({
  //     duration: e.detail.value
  //   })
  // },


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

        app.globalData.bookings = bookings
        console.log("BOOKING", bookings)
        page.setData({
          bookings
        })
      },

      fail: function (err) {
        console.log(err)
      }
    }
    
    setTimeout(function () { page.fetchBookings(options) }, 1500);
  },

  

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
  