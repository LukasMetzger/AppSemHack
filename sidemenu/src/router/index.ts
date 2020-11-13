import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Newsfeed from '@/views/Newsfeed.vue';
import Channels from '@/views/Channels.vue';
import Surveys from '@/views/Surveys.vue';
import Help from '@/views/Help.vue';
import myMentor from '@/views/myMentor.vue';
import Profile from '@/views/Profile.vue';
import Events from '@/views/Events.vue';
import mentorSelected from '@/views/mentorSelected.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/HomePage'
  },
  {
    path: '/Newsfeed',
    name:'Newsfeed',
    component: Newsfeed
  },
  {
    path: '/Channels',
    name:'Channels',
    component: Channels
  },
  {
    path: '/Events',
    name:'Events',
    component: Events
  },
  {
    path: '/Help',
    name:'Help',
    component: Help
  },
  {
    path: '/Profile',
    name:'Profile',
    component: Profile
  },
  {
    path: '/Surveys',
    name:'Surveys',
    component: Surveys
  },
  {
    path: '/myMentor',
    name:'myMentor',
    component: myMentor
  },
  {
    path: '/mentorSelected',
    name: 'mentorSelected',
    component: mentorSelected
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
