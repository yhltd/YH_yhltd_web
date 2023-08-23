/*财务*/
function watchVideo_cw(index) {
    if (index === 1) {
        $("#video").attr("src","video/财务PC.mp4");
    } else if (index === 2) {
        $("#video").attr("src","video/财务excel宣传视频.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/财务小程序.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

/*分权*/
function watchVideo_fq(index) {
    if (index === 1) {
        $("#video").attr("src","video/分权PC宣传视频.mp4");
    } else if (index === 2) {
        $("#video").attr("src","video/分权excel宣传视频.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/分权管理小程序.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

/*教务*/
function watchVideo_jw(index) {
    if (index === 1) {
        $("#video").attr("src","video/教务PC.mp4");
    } /*else if (index === 2) {
        $("#video").attr("src","video/教务Excel.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/教务小程序.mp4");
    }*/
    $(".videoCanvas").show();
    $(".video-mask").show();
}

/*进销存*/
function watchVideo_jxc(index) {
    if (index === 1) {
        $("#video").attr("src","video/进销存PC宣传视频.mp4");
    } else if (index === 2) {
        $("#video").attr("src","video/进销存excel宣传视频.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/进销存小程序宣传视频.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

/*排产*/
function watchVideo_pc(index) {
    if (index === 1) {
        $("#video").attr("src","video/排产PC宣传视频.mp4");
    } else if (index === 2) {
        $("#video").attr("src","video/排产小程序.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/排产小程序.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

/*人事*/
function watchVideo_rs(index) {
    if (index === 1) {
        $("#video").attr("src","video/人事PC宣传视频.mp4");
    } else if (index === 2) {
        $("#video").attr("src","video/人事excel.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/人事小程序宣传视频.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

/*卡管理*/
function watchVideo_k(index) {
    if (index === 1) {
        $("#video").attr("src","video/卡PC.mp4");
    } else if (index === 2) {
        $("#video").attr("src","video/卡excel.mp4");
    } else if (index === 3) {
        $("#video").attr("src","video/卡小程序.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

$("#video-shut").click(function() {

    $("#video").trigger("pause");
    $(".videoCanvas").hide();
    $(".video-mask").hide();
})

$('.videoCanvas').mouseover(function (event) {
    $('.video-shut').show();
})

$('.videoCanvas').mouseout(function (event) {
    $('.video-shut').hide();
})

function close_video() {

    $("#video").trigger("pause");
    $(".videoCanvas").hide();
    $(".video-mask").hide();
}