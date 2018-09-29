// ==UserScript==
// @name         微博避免兴趣推荐
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  微博避免兴趣推荐 （跳回首页）
// @author       Senorsen
// @match        https://weibo.com/nguide/interests
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    location.href = '/';
})();
