import Vue from 'vue'
// import Vuex from 'vuex'

import axios from 'axios'
import Global from './global'
import Util from './util'
// import Store from '../vuex/index'


axios.interceptors.request.use(config => {
    // Store.commit("setIsLoading", true);
    return config
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
});

function errorState(response) {
    // Store.commit("setIsLoading", false);
    //console.log(response)
    // 如果http状态码正常，则直接返回数据
    //if(response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    if (response.status == '200') {

    } else {

    }

}
function successState(response) {
    // Store.commit("setIsLoading", false);
    //统一判断后端返回的错误码
    if (response.status == '200') {
        if (response.data.errorCode == 0) {
        } else if (response.data.errorCode == -1) {

        } else if (response.data.errorCode == 1) {

        } else if (response.data.errorCode == 5001) {
            // Util.localStorageUtil.clear('token');
        }
    } else {
    }
}
const getResource = (opts, data) => {
    var tokenVal = '';
    if(Util.localStorageUtil.get('token')){
        tokenVal = Util.localStorageUtil.get('token')
    }
    let httpDefaultOpts = { //http默认配置
        method: opts.method,
        baseURL: Global.requestUrl,
        url: opts.url,
        timeout: 20000,
        params: data,
        data: data,
        headers: opts.method == 'get' ? {
            'X-Requested-With': 'XMLHttpRequest',
            "Accept": "application/json",
            "Content-Type": "application/json; charset=UTF-8",
            'token': tokenVal
        } : {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=UTF-8',
            'token': tokenVal
        }
    };

    if (opts.method == 'get') {
        delete httpDefaultOpts.data
    } else {
        delete httpDefaultOpts.params
    }

    let promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(
            (response) => {
                // console.log(opts.url,response.data.errorCode)
                successState(response);
                resolve(response.data)
            }
        ).catch(
            (error) => {
                errorState(error);
                reject(error)
            }
        )

    });
    return promise
};

export default {
    login() {
        // 登录
        return{
            logout: function (data) {//退出
                return getResource({
                    url: '/xunan/enterprise/account/logout',
                    method: 'post'
                }, data)
            },
            getCode: function (data) {//注册手机验证码
                return getResource({
                    url: '/xunan/enterprise/account/reg/code',
                    method: 'post'
                }, data)
            },
            getnewCode: function (data) {//修改手机获取验证码
                return getResource({
                    url: '/xunan/enterprise/account/phone/new/code',
                    method: 'post'
                }, data)
            },
            resetnewPhone: function (data) {//验证修改手机
                return getResource({
                    url: '/xunan/enterprise/account/phone/new/reset',
                    method: 'post'
                }, data)
            },
            register: function (data) {//注册
                return getResource({
                    url: '/xunan/enterprise/account/reg',
                    method: 'post'
                }, data)
            },
            login: function (data) {//登陆
                return getResource({
                    url: '/xunan/enterprise/account/login',
                    method: 'post'
                }, data)
            },
            oldPhoneCode: function (data) {//获取旧手机验证码（修改手机号）
                return getResource({
                    url: '/xunan/enterprise/account/phone/old/code',
                    method: 'post'
                }, data)
            },

            getnameCode: function (data) {//获取旧手机验证码(找回密码或者重置密码)
                return getResource({
                    url: '/xunan/enterprise/account/password/code/send',
                    method: 'post'
                }, data)
            },
            verifioldPhone: function (data) {//验证旧手机验证码
                return getResource({
                    url: '/xunan/enterprise/account/password/code/verify',
                    method: 'post'
                }, data)
            },
            verifioldPhonecode: function (data) {//验证旧手机验证码（修改手机号）
                return getResource({
                    url: '/xunan/enterprise/account/phone/old/verify',
                    method: 'post'
                }, data)
            },
            check: function (data) {//验证是否登陆
                return getResource({
                    url: '/xunan/enterprise/account/password/check',
                    method: 'post'
                }, data)
            },
            getInfo: function (data) {//获取个人信息
                return getResource({
                    url: '/xunan/enterprise/account/login/info',
                    method: 'GET'
                }, data)
            },
            changePassword: function (data) {//修改密码
                return getResource({
                    url: '/xunan/enterprise/account/password/reset',
                    method: 'POST'
                }, data)
            },
            nologinToken: function(data){
                return getResource({
                    url: '/xunan/enterprise/account/token',
                    method: 'post'
                }, data)
            }

        }
    },
    helper(){
            return {
                getShowLawHelpList: function (data) {//法律援助列表
                    return getResource({
                        url: '/xunan/lawHelp/showLawHelpList',
                        method: 'get'
                    }, data)
                },
                getShowLawHelpDetail: function (data) {//法律援助列表
                    return getResource({
                        url: '/xunan/lawHelp/showLawHelpCenterDetail',
                        method: 'get'
                    }, data)
                },
                isDianzan: function (data) {//点赞
                    return getResource({
                        url: '/xunan/helpCenter/likesSiteHelpCenter',
                        method: 'post'
                    }, data)
                },
                showSiteHelpCenter: function (data) {//帮助中心问题列表
                    return getResource({
                        url: '/xunan/helpCenter/showSiteHelpCenter',
                        method: 'get'
                    }, data)
                },

                getusermessageType: function (data) {//问题类型
                    return getResource({
                        url: '/xunan/messageSend/sendMessageOption',
                        method: 'get'
                    }, data)
                },
                getuserSendMessage: function (data) {//提交留言
                    return getResource({
                        url: '/xunan/messageSend/userSendMessage',
                        method: 'post'
                    }, data)
                },
            }
    },
    home() {
        return {
            getProduct: function (data, key) {//产品
                return getResource({
                    url: `/prod/productinfo/${key}`,
                    method: 'get'
                }, data)
            },
            getShowHomeAll: function (data) {//首页信息
                return getResource({
                    url: '/xunan/homeInfo/showHomeAll',
                    method: 'get'
                }, data)
            },
            getStatementDocDetail: function (data, key) {//条款详情
                return getResource({
                    url: `/prod/productinfo/statement/${key}`,
                    method: 'get'
                })
            },
            getProductAreaList: function (data, key) {//产品可销售区域
                return getResource({
                    url: `/prod/productinfo/${key}/area`,
                    method: 'get'
                })
            },
            getProductPosterList: function (data, key) {//产品海报列表
                return getResource({
                    url: `/prod/productinfo/${key}/poster`,
                    method: 'get'
                })
            },
            getProbrand: function (data) {//品牌型号
                return getResource({
                    url: 'prod/brand',
                    method: 'get'
                }, data)
            }
        }
    },
    download() {
        return {
            getDownloadList: function (data) { //下载列表
                return getResource({
                    url: '/xunan/download/category',
                    method: 'get'
                }, data)
            }
        }
    },
    user() {
        return {
            getBaseInfo: function (data,key) {
                return getResource({
                    url: `/xunan/baseInfo/${key}`,
                    method: 'get'
                }, data)
            },
            getLoginCode: function (data) {
                return getResource({
                    url: '/usr/user/loginCode',
                    method: 'get'
                }, data)
            },
            postLoginCode: function (data) {
                return getResource({
                    url: '/usr/user/loginCode',
                    method: 'post'
                }, data)
            },
            getTeamInfo: function (data) {
                return getResource({
                    url: '/usr/center/team/info',
                    method: 'get'
                }, data)
            },
            getTeamlist: function (data) {
                return getResource({
                    url: '/usr/center/team',
                    method: 'get'
                }, data)
            },
            getWithdraw: function (data) {//提现记录
                return getResource({
                    url: '/usr/center/withdraw',
                    method: 'get'
                }, data)
            },
            getAccount: function (data) {//享宝明细
                return getResource({
                    url: '/usr/center/account',
                    method: 'get'
                }, data)
            },
            getUserInfo: function (data) {
                return getResource({
                    url: '/usr/user/wechat/login',
                    method: 'post'
                }, data)
            },
            getRegcode: function (data) {
                return getResource({
                    url: 'usr/user/reg/code',
                    method: 'post'
                }, data)
            },
            signature: function (data) {
                return getResource({
                    url: 'wx/jsapi/sign',
                    method: 'post'
                }, data)
            },
            reglogin: function (data) {
                return getResource({
                    url: 'usr/user/reg',
                    method: 'post'
                }, data)
            },
            getbankCard: function (data) {
                return getResource({
                    url: 'usr/bankCard',
                    method: 'get'
                }, data)
            },
            getwithdraw: function (data) {
                return getResource({
                    url: 'usr/center/withdraw/info',
                    method: 'get'
                }, data)
            },
            postbankCard: function (data) {
                return getResource({
                    url: 'usr/bankCard',
                    method: 'post'
                }, data)
            },
            getpersonDetail: function (data) {
                return getResource({
                    url: 'usr/center/profile',
                    method: 'get'
                }, data)
            },
            getcenterInfo: function (data) {
                return getResource({
                    url: 'usr/center/info',
                    method: 'get'
                }, data)
            },
            getinfo: function (data) {
                return getResource({
                    url: 'usr/user/info',
                    method: 'get'
                }, data)
            },
            getisSubscribe: function (data) {
                return getResource({
                    url: 'usr/user/wechat/isSubscribe',
                    method: 'get'
                }, data)
            },
            getBalance: function (data) {
                return getResource({
                    url: 'usr/center/balance',
                    method: 'get'
                }, data)
            },
            postWithdraw: function (data) {
                return getResource({
                    url: 'usr/center/withdraw',
                    method: 'post'
                }, data)
            },

        }
    },
    video() {
        return {
            getSchoolTypeList: function (data) {
                return getResource({
                    url: '/xunan/safeSchool/getSchoolTypeList',
                    method: 'get'
                }, data)
            },

            getVideoDetail: function (data) {
                return getResource({
                    url: `/xunan/download/md5`,
                    method: 'get'
                }, data)
            },
            getorderState: function (data, key) {
                return getResource({
                    url: `/ord/order/${key}/info`,
                    method: 'get'
                }, data)
            },
            getOrderpolicy: function (data, key) {
                return getResource({
                    url: `/ord/order/${key}/policy`,
                    method: 'get'
                }, data)
            },
            getcountInfo: function (data) {
                return getResource({
                    url: '/ord/order/count',
                    method: 'get'
                }, data)
            },
        }
    },
    product(){
        return {
            getProductCategoryList: function (data) {
                return getResource({
                    url: '/xunan/productInfo/getProductCategoryList',
                    method: 'get'
                }, data)
            },
            getProductInfoListByCategory: function (data) {//获取产品列表
                return getResource({
                    url: '/xunan/productInfo/getProductInfoListByCategory',
                    method: 'get'
                }, data)
            },
        }
    }
}


