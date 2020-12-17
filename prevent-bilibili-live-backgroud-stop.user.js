// ==UserScript==
// @name         防止B站直播在后台自动暂停
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  防止B站直播在后台自动暂停
// @author       xfgryujk
// @include      /https?:\/\/live\.bilibili\.com\/?\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/\d+\??.*/
// @include      /https?:\/\/live\.bilibili\.com\/(blanc\/)?\d+\??.*/
// @grant        none
// ==/UserScript==

(function() {
    let realSetTimeout = window.setTimeout
    let realSetInterval = window.setInterval
    window.setTimeout = function (func, ...args) {
        let code = func.toString()
        if (code.indexOf('triggerSleepCallback') !== -1) {
            console.log(code)
            console.log('fuck bilibili PM')
            return null
        }
        return realSetTimeout.call(this, func, ...args)
    }
    window.setInterval = function (func, ...args) {
        let code = func.toString()
        if (code.indexOf('triggerSleepCallback') !== -1) {
            console.log(code)
            console.log('fuck bilibili PM')
            return null
        }
        return realSetInterval.call(this, func, ...args)
    }
})();

// From https://bbs.nga.cn/read.php?&tid=24074071
