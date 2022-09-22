const BASE_URL = process.NODE_ENV === 'production' 
                                   ? 'http://jsppapi.jsplusplus.site/'
                                   : 'http://localhost:3002/';

const API = {
  LOGIN: {
    LOGIN_ACTION: BASE_URL + 'admin/login_action',
    LOGIN_CHECK: BASE_URL + 'admin/login_check',
    LOGOUT_ACTION: BASE_URL + 'admin/logout_action'
  },
  COURSE: {
    GET_COURSE_DATA: BASE_URL + 'get_courses',
    CHANGE_COURSE_FIELD: BASE_URL + 'change_course_field',
  },
  RECOM_COURSE: {
    GET_RECOM_COURSE_DATA: BASE_URL + 'get_recom_courses',
  },
  SLIDER: {
    GET_SLIDER_DATA: BASE_URL + 'get_sliders'
  },
  COLLECTION: {
    GET_COLLECTION_DATA: BASE_URL + 'get_collections'
  },
  TEACHER: {
    GET_TEACHER_DATA: BASE_URL + 'get_teachers',
    SELECT_STAR_TEACHER: BASE_URL + 'select_star_teacher'
  },
  STUDENT: {
    GET_STUDENT_DATA: BASE_URL + 'get_students',
  },
  CRAWLER: {
    CRAWL_ACTION: BASE_URL + 'crawler/'
  },
  COMMON: {
    CHANGE_STATUS: BASE_URL + 'change_status'
  }
}

const NAV = [
  {
    field: 'course',
    title: '課程管理'
  },
  {
    field: 'recom_course',
    title: '推薦課程'
  },
  {
    field: 'slider',
    title: '輪播圖管理'
  },
  {
    field: 'collection',
    title: '課程集合管理'
  },
  {
    field: 'teacher',
    title: '老師管理'
  },
  {
    field: 'student',
    title: '學生管理'
  },
  {
    field: 'crawler',
    title: '資料爬取'
  },
];

export {
  API,
  NAV
}