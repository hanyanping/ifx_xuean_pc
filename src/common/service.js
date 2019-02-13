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
            Util.localStorageUtil.clear('access_token');
            Util.localStorageUtil.clear('userInfo');
            var signUrl = window.location.href;
            if (signUrl.indexOf('code') > 0) {
                signUrl = signUrl.substring(0, signUrl.indexOf('code'));
            }
            var linkUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Global.weixinInfo.appId + '&redirect_uri=' + encodeURIComponent(signUrl) + '&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect';
            console.log(linkUrl)
            window.location.href = linkUrl;
        }
    } else {
    }
}
const getResource = (opts, data) => {
    var tokenVal = Util.localStorageUtil.get('access_token');
    if (opts.url.indexOf('wx/jsapi/sign') >= 0 || (opts.url.indexOf('/usr/user/wechat/login') >= 0)) {
        tokenVal = '';
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
    login(data) {
        // 登录
        return getResource({
            url: '/oauth2/token',
            method: 'post'
        }, data)
    },
    helper(){
            return {
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
    order() {
        return {
            postOrder: function (data) {
                return getResource({
                    url: '/ord/order',
                    method: 'post'
                }, data)
            },
            getOrderList: function (data) {
                return getResource({
                    url: '/ord/order',
                    method: 'get'
                }, data)
            },
            getorderDetail: function (data, key) {
                return getResource({
                    url: `/ord/order/${key}`,
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
    }
}


