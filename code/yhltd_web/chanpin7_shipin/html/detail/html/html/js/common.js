function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    if(isIE) {
        if (document.all && document.addEventListener && window.atob) {
            console.log('IE10');
            var inset_IECont = document.createElement("div");
            inset_IECont.innerHTML = '<div class="IE-Tips"><div class="Tip-container"><div class="IE-Tips-text">您当前使用的浏览器版本过低，为了获得最佳的浏览体验，建议您下载<a href="https://kingdeecms-1252177366.cos.ap-guangzhou.myqcloud.com/browser/chrome55.exe" target="_blank">谷歌浏览器</a>或将IE浏览器升级到11及以上版本。有任何问题，欢迎电话咨询<span>4008-830-830</span></div><div class="IE-Tips-btn"><p class="IE-Tips-btn-close">关闭</p></div></div></div>';
            document.body.insertBefore(inset_IECont, document.body.firstElementChild);
        }
    }
}
IEVersion();
$('.IE-Tips-btn-close').click(function (){
    $('.IE-Tips').hide()
})

// 百度监控代码
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?aff7fbe8fcb98b060541077cc76465f2";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

// 判断设备是否是移动端
/* var agents = [
    "android",
    "iphone",
    "ipad",
    "ipod",
    "symbianos",
    "windows phone"
];
var ua = navigator.userAgent.toLowerCase();
for (var a=0;a<agents.length;a++){
    console.log(ua)
    if(ua.indexOf(agents[a])>=0){
        if(window.location.host != 'm.kingdee.com'){
            window.location.href = "https://m.kingdee.com"+window.location.pathname;
        }
    }
} */

var CONFIG = {
    api: 'https://www.kingdee.com',
	ftp: 'https://m.kingdee.com:8010/',
};
if (document.documentElement.clientWidth < 750) {
    remInit()
    if(document.getElementsByClassName("wrap").length>0){
        document.getElementsByClassName("wrap")[0].style.opacity = "0";
    }
} else {
    if(document.getElementsByClassName("wrap").length>0){
        document.getElementsByClassName("wrap")[0].style.opacity = "1";
    }
}
function remInit() {
    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if (clientWidth >= 750) {
                    docEl.style.fontSize = '100px';
                } else {
                    docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                }
                setTimeout(function () {
                    document.getElementsByClassName("wrap")[0].style.opacity = "1";
                }, 300)
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
    (function () {
        if (typeof (WeixinJSBridge) == "undefined") {
            document.addEventListener("WeixinJSBridgeReady", function (e) {
                setTimeout(function () {
                    WeixinJSBridge.invoke('setFontSizeCallback', {
                        "fontSize": 0
                    }, function (res) {
                        // alert(JSON.stringify(res));
                    });
                }, 0);
            });
        } else {
            setTimeout(function () {
                WeixinJSBridge.invoke('setFontSizeCallback', {
                    "fontSize": 0
                }, function (res) {
                    // alert(JSON.stringify(res));
                });
            }, 0);
        }
    })();
}
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {

    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }

        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) { }
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }

    var config = $.cookie = function (key, value, options) {

        // Write

        if (value !== undefined && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);

            if (typeof options.expires === 'number') {
                var days = options.expires, t = options.expires = new Date();
                t.setTime(+t + days * 864e+5);
            }

            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }

        // Read

        var result = key ? undefined : {};

        // To prevent the for loop in the first place assign an empty array
        // in case there are no cookies at all. Also prevents odd result when
        // calling $.cookie().
        var cookies = document.cookie ? document.cookie.split('; ') : [];

        for (var i = 0, l = cookies.length; i < l; i++) {
            var parts = cookies[i].split('=');
            var name = decode(parts.shift());
            var cookie = parts.join('=');

            if (key && key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }

            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }

        return result;
    };

    config.defaults = {};

    $.removeCookie = function (key, options) {
        if ($.cookie(key) === undefined) {
            return false;
        }

        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
        return !$.cookie(key);
    };

}));

function _GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]); return null;
};

jQuery(document).ready(function ($) {
    var utm_source = encodeURI(_GetQueryString("utm_source")),
        utm_medium = encodeURI(_GetQueryString("utm_medium")),
        utm_content = encodeURI(_GetQueryString("utm_content")),
        utm_term = encodeURI(_GetQueryString("utm_term")),
        utm_campaign = encodeURI(_GetQueryString("utm_campaign")),
        channelCode = encodeURI(_GetQueryString("channelCode")),
        activeCode = encodeURI(_GetQueryString("activeCode"));

        
    if(utm_source !== null && utm_source !== 'null' && utm_source !== undefined && utm_source !== 'undefined') {
        // console.log('从新赋值cookie utm_source')
        $.cookie('utm_source', utm_source, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    if(utm_medium !== null && utm_medium !== 'null' && utm_medium !== undefined && utm_medium !== 'undefined') {
        // console.log('从新赋值cookie utm_medium')
        $.cookie('utm_medium', utm_medium, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    if(utm_content !== null && utm_content !== 'null' && utm_content !== undefined && utm_content !== 'undefined') {
        // console.log('从新赋值cookie utm_content')
        $.cookie('utm_content', utm_content, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    if(utm_term !== null && utm_term !== 'null' && utm_term !== undefined && utm_term !== 'undefined') {
        // console.log('从新赋值cookie utm_term')
        $.cookie('utm_term', utm_term, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    if(utm_campaign !== null && utm_campaign !== 'null' && utm_campaign !== undefined && utm_campaign !== 'undefined') {
        // console.log('从新赋值cookie utm_campaign')
        $.cookie('utm_campaign', utm_campaign, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    if(channelCode !== null && channelCode !== 'null' && channelCode !== undefined && channelCode !== 'undefined') {
        // console.log('从新赋值cookie channelCode')
        $.cookie('channelCode', channelCode, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    if(activeCode !== null && activeCode !== 'null' && activeCode !== undefined && activeCode !== 'undefined') {
        // console.log('从新赋值cookie activeCode')
        $.cookie('activeCode', activeCode, {
            // domain: 'jdy.com',
            path: '/'
        });
    }
    // utm_source == null ? "" : $.cookie('utm_source', utm_source);
    // $.cookie('utm_source', utm_source, {
    //     domain: 'jdy.com',
    //     path: '/'
    // });
    // utm_medium == null ? "" : $.cookie('utm_medium', utm_medium);
    // $.cookie('utm_medium', utm_medium, {
    //     domain: 'jdy.com',
    //     path: '/'
    // });
    // utm_content == null ? "" : $.cookie('utm_content', utm_content);
    // $.cookie('utm_content', utm_content, {
    //     domain: 'jdy.com',
    //     path: '/'
    // });
    // utm_term == null ? "" : $.cookie('utm_term', utm_term);
    // $.cookie('utm_term', utm_term, {
    //     domain: 'jdy.com',
    //     path: '/'
    // });
    // utm_campaign == null ? "" : $.cookie('utm_campaign', utm_campaign);
    // $.cookie('utm_campaign', utm_campaign, {
    //     domain: 'jdy.com',
    //     path: '/'
    // });
    // channelCode == null ? "" : $.cookie('channelCode', channelCode);
    // $.cookie('channelCode', channelCode, {
    //     domain: 'jdy.com',
    //     expires: 10,
    //     path: '/'
    // });
    // activeCode == null ? "" : $.cookie('activeCode', activeCode);
    // $.cookie('activeCode', activeCode, {
    //     domain: 'jdy.com',
    //     expires: 10,
    //     path: '/'
    // });
})

