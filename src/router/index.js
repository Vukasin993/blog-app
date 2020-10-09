import Vue from 'vue'
import VueRouter from 'vue-router'
import Posts from '../views/Posts.vue'
import SinglePost from '../components/SinglePost'
import AddPost from '../components/AddPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/post/:id',
    name: 'view-post',
    component: SinglePost
  },
  {
    path: '/add',
    name: 'add',
    component: AddPost
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
