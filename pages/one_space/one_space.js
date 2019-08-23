// pages/onespace/onespace.js
const app = getApp();
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
    let page = this
    let makerspace_id = options.id
    // console.log(options.id)
    const space_array = app.globalData.makerspaces
    let onespace = space_array.filter(space => {
      // console.log(space.id)
      // console.log(space.id == makerspace_id)
      // makerspace_id is string while space.id is integer
      return space.id == makerspace_id;
    })[0]
    let latitude = onespace.latitude
    let longitude = onespace.longtitude
    let content = onespace.name

    // console.log(onespace)
    page.setData({
      id: makerspace_id,
      makerspace: onespace,
      mk: [
        {
          iconPath: "/images/icons/map-flag.png",
          id: 0,
          latitude: latitude,
          longitude: longitude,
          width: 40,
          height: 40,
          callout: { content: content, fontSize: 15, color: "#000000", padding: 5 }
        }
      ]
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
  goToBooking: function () {
    wx.reLaunch({
      url: '/pages/bookings/bookings'
    })
  }
})