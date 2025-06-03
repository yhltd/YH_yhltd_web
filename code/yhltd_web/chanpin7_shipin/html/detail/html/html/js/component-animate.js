
$(function () {
    // a标签描点跳转动画过渡
    $(".scroll").map(function () {
        $(this).click(function (event) {
            event.preventDefault();
            $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 500);
        });
    })
    if(document.querySelector('#swiper-box-one')) {
        let scrollHeight = []       // 不同板块距离顶部的高度数组
        // $('#swiper-box-one').offset().top
        scrollHeight.push($('#swiper-box-one').offset().top)
        scrollHeight.push($('#swiper-box-two').offset().top)
        scrollHeight.push($('#swiper-box-three').offset().top)
        scrollHeight.push($('#swiper-box-four').offset().top)
        scrollHeight.push($('#swiper-box-five').offset().top)
        scrollHeight.push($('#swiper-box-six').offset().top)
        scrollHeight.push($('#swiper-box-seven').offset().top)
        scrollHeight.push(Infinity)     // 正无穷 
    
        // 滚动事件
        window.onscroll = function (e) {
            let ScrollTop = document.documentElement.scrollTop,  // 滚动高度
            activeIndex = 0     // 当前激活的索引
            // console.log(ScrollTop)
            // 循环数组
            for(let i = 0; i < scrollHeight.length; i++) {
                //  判断范围
                if(ScrollTop >= scrollHeight[i] && ScrollTop < scrollHeight[i + 1]) {
                    activeIndex = i
                    break
                }
            }
            // 更改样式和图片
            $('.signal').attr('src', CONFIG.ftp+'r/cms/www/default/v0.1/images/EBC/dot.png')
            $('.signal').removeClass('signal')
            $(".scroll").eq(activeIndex).children().eq(0).attr('src', CONFIG.ftp+'r/cms/www/default/v0.1/images/EBC/signal.png')
            $(".scroll").eq(activeIndex).children().eq(0).addClass('signal')
        }
    }
    
})