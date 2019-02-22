import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import homepage from '@/views/homepage'
import socialpractice from '@/views/socialpractice'
import researchStudy from '@/views/researchStudy'
import sport from '@/views/sport'
import legalaid from '@/views/legalaid'
import safetyschool from '@/views/safetyschool'
import helpecenter from '@/views/helpecenter'
import aboutour from '@/views/aboutour'
import schoolsafe from '@/views/schoolsafe'
import teachertrain from '@/views/teachertrain'
import studybase from '@/views/studybase'
import login from '@/views/login'
import register from '@/views/register'
import registersuccess from '@/views/registersuccess'
import download from '@/views/download'
import customermessage from '@/views/customermessage'
import legaldetail from '@/views/legaldetail'
import videoDetail from '@/views/videoDetail'
import applicaninfo from '@/views/applicaninfo'
import bachome from '@/views/bachome'
import bachomepage from '@/views/bachomepage'
import ordermanage from '@/views/ordermanage'
import policymanage from '@/views/policymanage'
import customermanage from '@/views/customermanage'
import setup from '@/views/setup'
import resetpassword from '@/views/resetpassword'
import fillinpassword from '@/views/fillinpassword'
import finishset from '@/views/finishset'
import productdetail from '@/views/productdetail'
import findpassword from '@/views/findpassword'
import practiceBase from '@/views/practiceBase'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
            redirect: '/homepage',
            children: [
                {
                    path: 'homepage',
                    name: 'homepage',
                    component: homepage
                },
                {
                    path: 'schoolsafe',
                    name: 'schoolsafe',
                    component: schoolsafe,
                },
                {
                    path: 'teachertrain',
                    name: 'teachertrain',
                    component: teachertrain
                },
                {
                    path: 'videoDetail',
                    name: 'videoDetail',
                    component: videoDetail
                },
                {
                    path: 'researchStudy',
                    name: 'researchStudy',
                    component: researchStudy
                },
                {
                    path: 'socialpractice',
                    name: 'socialpractice',
                    component: socialpractice
                },
                {
                    path: 'practiceBase',
                    name: 'practiceBase',
                    component: practiceBase
                },
                {
                    path: 'studybase',
                    name: 'studybase',
                    component: studybase
                },
                {
                    path: 'sport',
                    name: 'sport',
                    component: sport
                },{
                    path: 'legalaid',
                    name: 'legalaid',
                    component: legalaid
                },
                {
                    path: 'legaldetail/:id',
                    name: 'legaldetail',
                    component: legaldetail
                },
                {
                    path: 'safetyschool',
                    name: 'safetyschool',
                    component: safetyschool
                },
                {
                    path: 'helpecenter',
                    name: 'helpecenter',
                    component: helpecenter
                },
                {
                    path: 'aboutour/:id',
                    name: 'aboutour',
                    component: aboutour
                },
                {
                    path: 'download',
                    name: 'download',
                    component: download
                },
                {
                    path: 'customermessage',
                    name: 'customermessage',
                    component: customermessage
                },
                {
                    path: 'productdetail/:id',
                    name: 'productdetail',
                    component: productdetail
                }
            ]
        },
        {
            path: '/bachome',
            name: 'bachome',
            component: bachome,
            redirect: '/bachomepage',
            children: [
                {
                    path: '/bachomepage',
                    name: 'bachomepage',
                    component: bachomepage
                },
                {
                    path: '/ordermanage',
                    name: 'ordermanage',
                    component: ordermanage
                },
                {
                    path: '/policymanage',
                    name: 'policymanage',
                    component: policymanage
                },
                {
                    path: '/customermanage',
                    name: 'customermanage',
                    component: customermanage
                },
                {
                    path: '/setup',
                    name: 'setup',
                    component: setup
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: login
        },
        {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/registersuccess',
            name: 'registersuccess',
            component: registersuccess
        },
        {
            path: '/applicaninfo',
            name: 'applicaninfo',
            component: applicaninfo
        },
        {
            path: '/resetpassword/:id',
            name: 'resetpassword',
            component: resetpassword
        },
        {
            path: '/fillinpassword/:id',
            name: 'fillinpassword',
            component: fillinpassword
        },
        {
            path: '/finishset/:id',
            name: 'finishset',
            component: finishset
        },
        {
            path: '/findpassword/:id',
            name: 'findpassword',
            component: findpassword
        },
    ]
})
