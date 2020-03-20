import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'
import Login from './views/Login'
import Register from './views/Register'
import Dashboard from './views/Dashboard'

import CoursesIndex from './views/courses/Index'
import ShowCourse from './views/courses/Show'
import CreateCourse from './views/courses/Create'
import EditCourse from './views/courses/Edit'

import LecturersIndex from './views/lecturers/Index'
import ShowLecturer from './views/lecturers/Show'
import CreateLecturer from './views/lecturers/Create'
import EditLecturer from './views/lecturers/Edit'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/login',
        name: 'login',
        component: Login
      },
      {
        path: '/register',
        name: 'register',
        component: Register
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/dashboard/courses',
        name: 'coursesIndex',
        component: CoursesIndex
      },
      {
        path: '/dashboard/courses/:id',
        name: 'showCourse',
        component: ShowCourse
      },
      {
        path: '/dashboard/courses/create',
        name: 'createCourse',
        component: CreateCourse
      },
      {
        path: '/dashboard/courses/edit/:id',
        name: 'editCourse',
        component: EditCourse
      },
      {
        path: '/dashboard/lecturers',
        name: 'lecturersIndex',
        component: LecturersIndex
      },
      {
        path: '/dashboard/lecturers/:id',
        name: 'showLecturer',
        component: ShowLecturer
      },
      {
        path: '/dashboard/lecturers/create',
        name: 'createLecturer',
        component: CreateLecturer
      },
      {
        path: '/dashboard/lecturers/edit/:id',
        name: 'editLecturer',
        component: EditLecturer
      }
    ]
});
