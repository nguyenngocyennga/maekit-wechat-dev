// pages/bookings/bookings.js
import apiClient from "../../utils/apiClient.js"
const app = getApp()

Page({

  /**
   * Page initial data
   */
  data: {
    // lt: "30.65984",
    // lg: "104.10194", //"makerspace.longitude",// wait to database
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
  onLoad: function (options) {
    let page = this;
    let project_id = options.id;

    const project_array = app.globalData.projects
    let oneproject = project_array.filter(project => {
      return project.id == project_id;
    })[0]

    page.setData({
      project: oneproject
    })

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

    const spaceOptions = {
      success: function (res) {
        console.log(res)
        const makerspaces_array = res.data.makerspaces
        let makerspaces = []
        makerspaces_array.forEach (function(e) {
          let makerspace_name = e.name
          let makerspace_location = e.location
          let makerspace = `${makerspace_name} @ ${makerspace_location}`
          makerspaces.push(makerspace)
        })
        
        page.setData({
          makerspaces,
          makerspaces_array 
        })
      },

      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getMakerspaces(spaceOptions)
  },

  bindMakerspaceChange: function (e) {
    console.log('picker makerspace', e.detail.value);

    this.setData({
      makerspaceIndex: e.detail.value
    })
  },

  bindDateArrivalChange: function (e) {
    const page = this
    this.setData({
      dateArrival: e.detail.value
    }, () => {
      page.calculateDateDifference()
    })
  },

  bindDateDepartureChange: function (e) {
    const page = this
    this.setData({
      dateDeparture: e.detail.value
    }, () => {
      page.calculateDateDifference()
    })
  },

  goToIndex: function () {
    wx.reLaunch({
      url: '/pages/index/index',
    })
  },

  goToConfirm: function (e) {
    const page = this
    console.log(page.data)
    const project_id = page.data.project.id
    const makerspaceIndex = page.data.makerspaceIndex
    const makerspace_id = page.data.makerspaces_array[makerspaceIndex].id
    console.log("GD", app.globalData)
    const user_id = app.globalData.user
    const name = page.data.contactName
    const email = page.data.email
    const phone_number = page.data.phoneNumber
    const number_students = page.data.numberStudents
    const about_kids = page.data.aboutKids
    const other_message = page.data.otherMessage
    const from_date = page.data.dateArrival
    const to_date = page.data.dateDeparture
    const newBooking = {
      project_id,
      makerspace_id,
      user_id,
      name,
      email,
      phone_number,
      number_students,
      about_kids,
      other_message,
      from_date,
      to_date
    }

    wx.request({
      url: `https://makit.wogengapp.cn/api/v1/bookings/`,
      // url: `http://localhost:3000/api/v1/bookings/`,
      method: 'post',
      data: newBooking,
      success(res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/confirm_message/confirm_message',
        })
      }
    })
  },

  handleChange: function (e) {
    const key = e.currentTarget.dataset.name
    const value = e.detail.value
    const page = this
    const oldData = page.data
    oldData[key] = value
    page.setData({
      ...oldData
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