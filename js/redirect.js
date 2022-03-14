; (function () {
    //判断是否是移动设备
    var ua = navigator.userAgent;
    var UA = {
        Android: function () {   //安卓
            return ua.match(/Android/i) ? true : false;
        },
        BlackBerry: function () {  //黑莓
            return ua.match(/BlackBerry/i) ? true : false;
        },
        IOS: function () {  //IOS
            return ua.match(/iPhone|iPad|iPod/i) ? true : false;
        },
        //这个其实没啥必要了,可以不用判断这个，毕竟IE是一种古老的东西
        Windows: function () {
            return ua.match(/IEMobile/i) ? true : false;
        },
        isMobile: function () {  //移动设备
            return UA.Android() || UA.BlackBerry() || UA.IOS() || UA.Windows();
        }
    }
    if (UA.isMobile()) {
        const origin = window.location.origin
        const pathname = window.location.pathname
        //正则匹配第一个/，进行重定向
        location.replace(`${origin}/m${pathname}`);
    }
})();
