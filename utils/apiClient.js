// const baseUrl = "https://makit.wogengapp.cn/api/v1/"
const baseUrl = "http://localhost:3000/api/v1/"

// MAKERSPACES

const getMakerspaces = (options) => {
  const { success, fail } = options
  return wx.request({
    url: baseUrl + "makerspaces",
    method: "get",
    success,
    fail
  })
}

const getMakerspace = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `makerspaces/${id}`,
    method: "get",
    success,
    fail
  })
}

// PROJECTS 

const getProjects = (options) => {
  const { query } = options
  let url = ""

  if(query) {
    url = baseUrl + `projects?query=${query}`
  } else {
    url = baseUrl + "projects"
  }
  const { success, fail } = options
  return wx.request({
    url,
    method: "get",
    success,
    fail
  })
}

const getProject = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `projects/${id}`,
    method: "get",
    success,
    fail
  })
}

// PROJECT STEPS

const getProjectSteps = (options) => {
  const { storyId, success, fail } = options
  return wx.resquest({
    url: baseUrl + `projects/${storyId}/project_steps`,
    method: "get",
    success,
    fail
  })
}

const getComment = options => {
  const { id, success, fail } = options
  return wx.request({
    url: baseUrl + `project_steps/${id}`,
    method: "get",
    success,
    fail
  })
}

// EQUIPMENTS 

const getEquipments = (options) => {
  const { success, fail } = options
  return wx.request({
    url: baseUrl + "equipments",
    method: "get",
    success,
    fail
  })
}

// BOOKINGS

const getBookings = (options) => {
  const { success, fail } = options
  const user_id = getApp().globalData.user
  return wx.request({
    url: baseUrl + `bookings?user=${user_id}`,
    method: "get",
    success,
    fail
  })
}

const createBooking = options => {
  const { data, success, fail } = options
  return wx.request({
    url: baseUrl + "bookings",
    method: "post",
    data,
    success,
    fail
  })
}

export default {
  getMakerspaces,
  getMakerspace,
  getProjects,
  getProject,
  getEquipments,
  getBookings
}