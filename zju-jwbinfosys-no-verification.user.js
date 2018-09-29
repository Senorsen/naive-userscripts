// ==UserScript==
// @name         浙大教务网免验证码
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  浙大教务网免验证码
// @author       Senorsen
// @include        http://jwbinfosys.zju.edu.cn/default2.aspx
// @include        https://jw.zjuqsc.com/
// @include        https://jw.zjuqsc.com/default2.aspx
// @grant        none
// ==/UserScript==

(function() {
    'use strict'
    const o = document.getElementsByName('Textbox3')[0]
    if (o.value === 'zjdx_bksy') {
        // iPlanetDirectoryPro bug.
        document.cookie = 'iPlanetDirectoryPro=;Path=/;Domain=.zju.edu.cn; Date=Wed, 21 Oct 2015 07:28:00 GMT'
        document.cookie = 'iPlanetDirectoryPro=;Path=/; Date=Wed, 21 Oct 2015 07:28:00 GMT'
    }
    o.parentElement.innerText = '信用较好，无需验证码'
    document.cookie = 'ASP.NET_SessionId=;Path=/; Date=Wed, 21 Oct 2015 07:28:00 GMT'
})()
