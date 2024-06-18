/* eslint-disable no-undef */
import { createRouter, createWebHistory } from 'vue-router'
import CompanyDetails from '@/components/CompanyDetails.vue'
import BikeList from '@/components/BikeList.vue'
import PriceList from '@/components/PriceList.vue'
import ReserMethod from '@/components/ReserMethod.vue'
import CautionList from '@/components/CautionList.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:id',
      name: 'company',
      component: CompanyDetails,
    },
    {
      path: '/',
      name: 'BikeList',
      component: BikeList
    },
    {
      path: '/price',
      name: 'PriceList',
      component: PriceList
    },
    {
      path: '/reservation',
      name: 'ReserVation',
      component: ReserMethod
    },
    {
      path: '/caution',
      name: 'CautionList',
      component: CautionList
    },
  ]
})
export default router
