// pages/makerspaces/makerspaces.js

import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    dateArrival: new Date().toLocaleDateString('zh-CN'),
    dateDeparture: new Date().toLocaleDateString('zh-CN'),
    makerspaceIndex: 0,
    sc: '11',
    mk: [
      {
        iconPath: "/images/icons/map-flag.png",
        id: 0,
        latitude: 30.61890,
        longitude: 104.07139,
        width: 40,
        height: 40,
        callout: { content: "XMaker\n Chengdu, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 1,
        latitude: 30.69809,
        longitude: 104.03139,
        width: 40,
        height: 40,
        callout: { content: " SWJTU\n Chengdu, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 2,
        latitude: 30.62161,
        longitude: 104.07797,
        width: 40,
        height: 40,
        callout: { content: "STEM Edu \n Chendgu, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 3,
        latitude: 31.19613,
        longitude: 121.39124,
        width: 40,
        height: 40,
        callout: { content: " KC Robot\n Shanghai, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 4,
        latitude: 31.30510,
        longitude: 121.52642,
        width: 40,
        height: 40,
        callout: { content: " MOOCXING\n Shanghai, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 5,
        latitude: 31.19220,
        longitude: 121.44872,
        width: 40,
        height: 40,
        callout: { content: " Join-in Youth\n Shanghai, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 6,
        latitude: 31.19220,
        longitude: 121.44872,
        width: 40,
        height: 40,
        callout: { content: " Join-in Youth\n Shanghai, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 7,
        latitude: 31.18852,
        longitude: 121.49965,
        width: 40,
        height: 40,
        callout: { content: " GAIA\n Shanghai, China", fontSize: 15, color: "#000000", padding: 5 }
      },
      {
        iconPath: "/images/icons/map-flag.png",
        id: 8,
        latitude: 22.54613,
        longitude: 113.99932,
        width: 40,
        height: 40,
        callout: { content: " ChaiHuo\n Shenzhen, China", fontSize: 15, color: "#000000", padding: 5 }
      },
    ]
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

    wx.getLocation({
      type: 'GCJ-02',
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        page.setData({ latitude, longitude, speed, accuracy })
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
    let makerspace_id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/one_space/one_space?id=${makerspace_id}`,
    })
  }
})