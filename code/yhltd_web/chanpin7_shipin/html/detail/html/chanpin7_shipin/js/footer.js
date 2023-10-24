let isPC = ''
if (document.documentElement.clientWidth > 750) {
    isPC = true
    $(".footer-share-logo-wx").hover(function () {
        $(".footer-share-er").show()
    }, function () {
        $(".footer-share-er").hide()
    });
} else {
    isPC = false
    $(".footer-share-logo-wx").click(function () {
        let ifTrue = $(".footer-share-er").css("display") === "none"
        if (ifTrue) {
            $(".footer-share-er").show()
        } else {
            $(".footer-share-er").hide()
        }
    })
}
// 判断是否首次进入
if ($.cookie('has_entered') === "1") {
    $('.advisory-tips-box').hide()
} else {
    $.cookie('has_entered', 1, { expires: 1 });
    setTimeout(function () {
        $('.advisory-tips-1').show()
        setTimeout(function () {
            $('.advisory-tips-1').hide()
            setTimeout(function () {
                $('.advisory-tips-2').show()
                setTimeout(function () {
                    $('.advisory-tips-2').hide()
                    $('.advisory-img-box').addClass('advisory-img-radius')
                }, 2400);
            }, 10000);
        }, 1500);
    }, 600);
}
// 客服咨询打开
$('.advisory-img').click(function () {
    let ifTrue = $('.advisory-box').css('display') === 'none';;
    if (ifTrue) {
        $('.advisory-box').show();
        $('.advisory-tips-box').hide()
        $('.advisory-img-box').addClass('advisory-img-radius-none')
    } else {
        $('.advisory-box').hide();
    }
})
// 客服咨询区域外关闭导航栏
$('.wrap').click(function () {
    let ifTrue = $('.advisory-box').css('display') === 'none';;
    if (!ifTrue) {
        $('.advisory-box').hide();
    }
});
//点击区域阻止冒泡
$('.advisory-box,.advisory-img').click(function (event) {
    event.stopPropagation();
});
// 个人号
$('.advisory-pc-personal').click(function () {
    if ($.cookie('kingdee_uid')) {
        let _Data = {
            uid: $.cookie('kingdee_uid'),
            prodClientType: 'WEB',
        };
        $.ajax({
            url: CONFIG.api + '/cmsadmin/robert/goRobert',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json;charset=UTF-8",
            headers: {
                'site_param': $.cookie('site_param')
            },
            data: JSON.stringify(_Data),
            success: function (da) {
                if (da.code === 200) {
                    newWin(da.data, 'newa6')
                } else if (da.code === 202) {
                    window.location.href = da.data
                }
            },
            error: function () {
            }
        })
    } else {
        let _Data = {
            uid: null,
            prodClientType: 'WEB',
        };
        $.ajax({
            url: CONFIG.api + '/cmsadmin/robert/goRobert',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json;charset=UTF-8",
            headers: {
                'site_param': null
            },
            data: JSON.stringify(_Data),
            success: function (da) {
                if (da.code === 200) {
                    newWin(da.data, 'newa7')
                } else if (da.code === 202) {
                    //alert('请登录后，再进行操作！')
                    window.location.href = da.data
                }
            },
            error: function () {
            }
        })
    }
})
// 售前咨询
$('.advisory-pc-item-before').click(function () {
    if ($.cookie('kingdee_uid')) {
        let _Data = {
            uid: $.cookie('kingdee_uid'),
            utm_source: $.cookie('utm_source')
        };
        if (isPC) {
            $.ajax({
                url: CONFIG.api + '/cmsadmin/imchat/redirectPCIM',
                type: 'POST',
                dataType: 'json',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(_Data),
                success: function (da) {
                    if (da.code === 200) {
                        newWin(da.data, 'newa8')
                    } else {
                    }
                },
                error: function () {
                }
            })
        } else {
            $.ajax({
                url: CONFIG.api + '/cmsadmin/imchat/redirectH5IM',
                type: 'POST',
                dataType: 'json',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(_Data),
                success: function (da) {
                    if (da.code === 200) {
                        newWin(da.data, 'newa9')
                    } else {
                    }
                },
                error: function () {
                }
            })
        }
    } else {
        let utm_source = $.cookie('utm_source')
        if (utm_source) {
            utm_source = utm_source == "baidu" ? "百度" : utm_source == "sogou" ? "搜狗" : utm_source == "sm" ? "神马" : utm_source == "toutiao" ? "今日头条"
                : utm_source == "wxmp" ? "微信MP" : utm_source == "baiduxin" ? "百度信息流" : utm_source == "zhihufolw" ? "知乎" : utm_source == "txfolw" ? "腾讯新闻" : utm_source;
        } else {
            utm_source = "金蝶官网";
        }
        let host = "support.kingdee.com";
        if (window.location.host == "uat.kingdee.com") {
            host = "supportest.kingdee.com";
        }
        let to_url = 'https://' + host + '/osp2016/chat/pc/index.php?vendorID=8&type=Sales&source=KingdeePC&utm_source=' + utm_source;
        newWin(to_url, 'newa10');
    }

})

var purchaseList = [];
function obtainData() {

    // 获取下拉数据
    /*let res = [{
        title: '苍穹',
        sequence: 'SKYCLOUD'
    }, {
        title: 'EAS Cloud',
        sequence: 'EAS'
    }, {
        title: '金蝶云·星空',
        sequence: 'K3CLOUD'
    }, {
        title: 'K/3 WISE',
        sequence: 'K3WISE'
    }, {
        title: 'KIS',
        sequence: 'KIS'
    }, {
        title: 'KIS专业版',
        sequence: 'KISPRO'
    }, {
        title: 'KIS标准版',
        sequence: 'KISSTD'
    }, {
        title: '精斗云',
        sequence: 'JDY'
    }, {
        title: '智慧记',
        sequence: 'ZHJ'
    }, {
        title: 's-HR',
        sequence: 'SHR'
    }, {
        title: '管易云',
        sequence: 'GYY'
    }, {
        title: '账无忧',
        sequence: 'ZWY'
    }, {
        title: '云之家',
        sequence: 'YZJ'
    }, {
        title: '行业产品',
        sequence: 'INDUSTRY'
    }, {
        title: '其它产品',
        sequence: 'OTHERS'
    }]*/

    function obtain(res) {
        let html = ''
        res.forEach(function (item, i) {
            html += '<li value ="saab"><h4>' + item.title + '</h4><p>序列号 <span>' + item.prodSN + '</span></p><span style="display:none">' + item.prodCategoryCode + '</span><span style="display:none">' + item.prodDeployWay + '</span><span style="display:none">' + item.prodVersion + '</span></li>'
        })
        $('.after-sale-servicr-ul').html(html)
    }

    let prodConvert = {
        "C01": "EAS",
        "C02": "K3WISE",
        "C03": "KIS",
        "C04": "K3CLOUD",
        "C05": "SKYCLOUD",
        "C06": "JDY",
        "C07": "GYY",
        "C10": "ZWY",
        "C11": "OTHERS",
        "C22": "EAS"
    };

    if (purchaseList.length > 0) {
        // 下拉框显示
        $('.after-sale-servicr').show()
        obtain(purchaseList)
    } else {
        // 获取下拉列表数据
        $.ajax({
            url: CONFIG.api + '/cmsadmin/imchat/queryProductDataList',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json;charset=UTF-8',
            headers: {
                'site_param': $.cookie('site_param')
            },
            success: function (da) {
                if (da.code === 200) {
                    let res = [];
                    if (da.data.length > 0) {
                        da.data.forEach(function (item1, i1) {
                            item1.active_product.forEach(function (item, i) {
                                res.push({
                                    title: item.category_name,
                                    prodCategoryCode: prodConvert[item.category_code],
                                    prodSN: item.sn,
                                    prodDeployWay: item.prod_deploy_way,
                                    prodVersion: item.version
                                });
                            })
                        })
                    }
                    purchaseList = res;
                    if (res.length > 0) {
                        // 下拉框显示
                        $('.after-sale-servicr').show()
                        obtain(res)
                    } else {
                        // 拦截框显示
                        $('.sales-intercept').show()
                    }
                }
            },
            error: function () {
            }
        })
    }
}

// 售后咨询,智能客服菜单
$('.advisory-pc-item-after,a.autoCustService').click(function () {
    if ($.cookie('kingdee_uid')) {
        let _Data = {
            uid: $.cookie('kingdee_uid'),
        };
        if (isPC) {
            // 下拉列表
            obtainData()

            // $.ajax({
            //     url: CONFIG.api + '/cmsadmin/imchat/redirectPCIMLater',
            //     type: 'POST',
            //     dataType: 'json',
            //     contentType: "application/json;charset=UTF-8",
            //     data: JSON.stringify(_Data),
            //     success: function (da) {
            //         if (da.code === 200) {
            //             window.open(da.data)
            //         } else {
            //         }
            //     },
            //     error: function () {
            //     }
            // })
        } else {
            $.ajax({
                url: CONFIG.api + '/cmsadmin/imchat/redirectH5IMLater',
                type: 'POST',
                dataType: 'json',
                contentType: "application/json;charset=UTF-8",
                data: JSON.stringify(_Data),
                success: function (da) {
                    if (da.code === 200) {
                        // window.open(da.data)
                    } else {
                    }
                },
                error: function () {
                }
            })
        }
    } else {
        //alert('请登录后，再进行操作！')
        $.ajax({
            url: CONFIG.api + '/cmsadmin/robert/goRobert',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json;charset=UTF-8",
            headers: {
                'site_param': null,
                'sale_after': '1'
            },
            data: JSON.stringify({}),
            success: function (da) {
                if (da.code === 202) {
                    window.location.href = da.data
                }
            },
            error: function () {
            }
        })
    }
});

// PC个人号展开
// $(".advisory-pc-default-box-under").hover(function () {
//     $(".advisory-pc-dialog-box").show();
// }, function () {
//     if ($('.advisory-pc-dialog-box:hover').length === 0) {
//         // $(".advisory-pc-dialog-box").hide();
//     }
// });
// $(".advisory-pc-dialog-box").mouseleave(function () {
//     if ($('.advisory-pc-default-box-under:hover').length === 0) {
//         $(".advisory-pc-dialog-box").hide();
//     }
// })

function gifToggle() {
    $(".content-gif1").show();
    $(".content-gif2").hide();
    setTimeout(function () {
        $(".content-gif1").hide();
        $(".content-gif2").show();
    }, 5000);
}

setInterval(function () {
    gifToggle()
}, 10000)

$(".after-sale-box-item-under").hover(function () {
    $(".advisory-pc-dialog-box").show()
},function(){
    if ($('.advisory-pc-dialog-box:hover').length === 0) {
        $(".advisory-pc-dialog-box").hide();
    }
})
$(".advisory-pc-dialog-box").mouseleave(function () {
    if ($('.after-sale-box-item-under:hover').length === 0) {
        $(".advisory-pc-dialog-box").hide();
    }
})

$(".after-sale-box-item-center").hover(function () {
    $(".content-gif1").attr('src', 'https://www.kingdee.com/r/cms/www/default/v0.1/images/index/advisory-pc/content-gif2.gif');
    $(".after-sale-dialog-center").show()
}, function () {
    $(".content-gif1").attr('src', 'https://www.kingdee.com/r/cms/www/default/v0.1/images/index/advisory-pc/content-gif1.gif');
    if ($('.after-sale-dialog-center:hover').length === 0) {
        $(".after-sale-dialog-center").hide();
    }
})
$(".after-sale-dialog-center").mouseleave(function () {
    if ($('.after-sale-box-item-center:hover').length === 0) {
        $(".after-sale-dialog-center").hide();
    }
})

// ------------------------左侧留咨----------------

// 页面加载10s后向右侧自动滑入展开  10s
// 滑开过程2s                     2s
// 无操作 展开状态停留10s后自动收回 10s

// 10s后向右侧自动滑入展开
setTimeout(function () {
    moveToLeft()
    // }, 2000);
}, 10000);
function moveToLeft() {
    $(".advisory-footer-left").hide();
    $(".advisory-footer-box").show();
    $(".advisory-footer-box").addClass("animateToRight")
}

// 向左滑
// 展开状态停留10s后自动收回（用户无操作：悬停、点击、手机号、验证码输入等操作），否则则取消自动收回规则
function moveToRight() {
    $(".advisory-footer-box").removeClass("animateToRight")
    $(".advisory-footer-box").addClass("animateToLeft")
    setTimeout(function () {
        $(".advisory-footer-left").show();
        $(".advisory-footer-box").hide();
    }, 500);
}
setTimeout(function () {
    if ($('.advisory-footer-box:hover').length !== 0 || $('#apply-phone').val() !== '' || $('.silderpuzzle-mask').is(':visible') || $('.advisory-footer-content-code').is(':visible') ) {
    } else {
        moveToRight()
    }
}, 20500);
// }, 6000);
$(".advisory-footer-left").click(function () {
    $(".advisory-footer-box").removeClass("animateToLeft")
    moveToLeft()
})
$(".advisory-footer-close").click(function () {
    $(".advisory-footer-box").removeClass("animateToRight")
    moveToRight()
})
setTimeout(function () {
    $(".advisory-footer-left").click(function () {
        $(".advisory-footer-box").removeClass("animateToLeft")
        moveToLeft()
    })
    $(".advisory-footer-close").click(function () {
        $(".advisory-footer-box").removeClass("animateToRight")
        moveToRight()
    })
    $(".advisory-footer-content-success .advisory-footer-content-right div").click(function () {
        moveToRight()
    })
}, 10500);
// }, 4000);

$(".advisory-footer-content-code-text1 span").click(function(){
    $(".advisory-footer-content-code").hide();
    $(".advisory-footer-content-apply").show()
})


var applyPhone = document.querySelector('#apply-phone');// 手机号
var elTarget;
var codeInputFoot;
var codeNum = '123456'
var codeList = $(".advisory-footer-content-code-num input")// 验证码
var codeInputList  //输入的验证码
var codeTextFoot = document.querySelector('.codeText')
var countDownFoot = 60;
var codeArr = new Array(6);

$('#apply-phone').on('keypress', function (event) {
    if (event.keyCode == 13) {
        silderPuzzleFoot(event)
    }
});
$(".advisory-footer-content-btn").click(silderPuzzleFoot)
function footerContentBtn(silderpuzzleIndex) {
    if (checkPhoneFoot()) {
        $(".advisory-footer-content-apply").hide();
        $(".advisory-footer-content-code-text .codePhone").text(applyPhone.value);
        // setTimeFoot();
        $(".advisory-footer-content-code").show();
        sendMsgCodeFoot(silderpuzzleIndex)
    } else {
        $("#apply-phone").attr("placeholder", "")
        $("#apply-phone").blur();
        $("#apply-phone").val("")
        $(".phone-error").show()
        $(".phone-error").click(function () {
            $("#apply-phone").focus();
            $(".phone-error").hide()
        })
    }
}
function checkPhoneFoot() {
    if (!(/^1[3456789]\d{9}$/.test(applyPhone.value)) || applyPhone.value == '') {
        return false;
    }
    return true;
}

$('.advisory-footer-content-code-num input:gt(0)').attr('readOnly', 'true');
$('.advisory-footer-content-code-num input').keyup(function (e) {
    if(e.keyCode == 8){
        $(this).prev().focus();
    }else{
        $(".code-error-box").hide()
        if (/^[0-9]{1}$/g.test($(this).val())) {
            $(this).next().removeAttr('readOnly').focus();
            codeArr[$(this).index()] = $(this).val();
            if ($(this).index() == 5) {
                codeArr.join('')
                codeInputFoot = codeArr.join('')
                checkMsgCode()
            }
        } else {
            $(this).val('');
        }
    }
});


// 验证码时间
function setTimeFoot() {
    if (countDownFoot == 0) {
        codeTextFoot.removeAttribute("disabled");
        codeTextFoot.innerText = "重新发送";
        countDownFoot = 60;
        return;
    } else {
        codeTextFoot.setAttribute("disabled", true);
        codeTextFoot.innerText = countDownFoot + "s";
        countDownFoot--;
    }
    setTimeout(function () {
        setTimeFoot()
    }, 1000)
}

// $(".codeTextFoot").click(function(){
//     setTimeFoot()
// })

// 向手机发送验证码
function sendMsgCodeFoot(silderpuzzleIndex) {
    if (!checkPhoneFoot()) {
        return;
    }
    let tel = {
        phone: applyPhone.value,
        verifcaCode: silderpuzzleIndex
    }
    $.ajax({
        type: "POST",
        url: CONFIG.api + "/cmsadmin/inquiry/sendMsgCode",
        data: JSON.stringify(tel),
        dataType: "json",
        contentType: 'application/json;charset=utf-8',
        success: function (res) {
            console.log(res)
            if (res.code == -1) {
                console.log(res.message)
                alert(res.message)
            } else {
                setTimeFoot()
            }
        },
        error: function (err) {
            console.error(err);
            alert(err)
        }
    })
}

function checkMsgCode() {
    let telCode = {
        phone: applyPhone.value,
        vcode: codeInputFoot
    }
    // 初次请求，验证输入的手机和验证码是否对的上
    $.ajax({
        type: "post",
        url: CONFIG.api + "/cmsadmin/inquiry/vaildMsgCode",
        data: JSON.stringify(telCode),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: function (res) {
            console.log(res);
            if (res.code == -1) {
                console.log(res.message);
                // alert(res.message);
                for (var i = 0; i < codeList.length; i++) {
                    codeList.eq(i).val('');
                    codeList.eq(0).focus()
                    $(".code-error-box").hide()
                }
                $(".code-error-box").show()
            } else {
                $(".advisory-footer-content-enter").hide()
                $(".advisory-footer-content-success").css("display", "flex")

            }
        },
        error: function (err) {
            console.log(err);
            alert(err)
        }
    })
}


// ------------------------左侧留咨 end ----------------

// 回到顶部
$(function () {
    $(window).scroll(function () {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        let windowH = $(window).height()
        if (scrollTop > windowH) {
            $(".back-to-top").show()
        } else {
            $(".back-to-top").hide()
        }
    })
})
$(".back-to-top").on('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
})



// ================下拉框
// 点击下拉
let isshow = false
$('.after-sale-servicr-selection').click(function (e) {
    e.stopPropagation()
    isshow = !isshow
    if (isshow) {
        $('.after-sale-servicr-ul').show()
    } else {
        $('.after-sale-servicr-ul').hide()
    }
})
// 选项点击
$('.after-sale-servicr-ul').on('click', 'li', function (e) {
    e.stopPropagation()

    // let prodCategoryCode = {
    //     EAS: 'C01',
    //     K3WISE: 'C02',
    //     KIS: 'C03',
    //     C04K3CLOUD: 'C04',
    //     SKYCLOUD: 'C05',
    //     JDY: 'C06',
    //     GYY: 'C07',
    //     ZWY: 'C10',
    //     OTHERS: 'C11',
    //     EAS: 'C22',
    // }

    $('.after-sale-servicr-active').removeClass('after-sale-servicr-active')
    $(this).addClass('after-sale-servicr-active')
    $('.after-sale-servicr-selection').text($(this).children('h4').text())
    $('.after-sale-servicr-selection').attr('prodSN', $(this).children('p').children('span').text());
    $('.after-sale-servicr-selection').attr('prodCategoryCode', $(this).children('span').get(0).innerText)
    $('.after-sale-servicr-selection').attr('prodDeployWay', $(this).children('span').get(1).innerText)
    $('.after-sale-servicr-selection').attr('prodVersion', $(this).children('span').get(2).innerText)


    // $('.after-sale-servicr-selection').attr('prodCategoryCode',prodCategoryCode[$(this).children('p').children('span').text()])
    isshow = false
    $('.after-sale-servicr-ul').hide()
})

// 遮罩层点击隐藏
$('.after-sale-servicr').click(function () {
    $(this).hide()
})
// 阻止冒泡
$('.after-sale-servicr-box').click(function (e) {
    e.stopPropagation()
    isshow = false
    $('.after-sale-servicr-ul').hide()
})

// 取消
$('.after-sale-servicr-cancel').click(function (e) {
    e.stopPropagation()
    $('.after-sale-servicr').hide()
})

// 确定
$('.after-sale-servicr-determine').click(function (e) {
    e.stopPropagation()
    if ($('.after-sale-servicr-selection').attr('prodSN')) {
        let _Data = {
            kduid: $.cookie('kingdee_uid'),
            site_param: $.cookie('site_param'),
            prodCategoryCode: $('.after-sale-servicr-selection').attr('prodCategoryCode'),
            prodSN: $('.after-sale-servicr-selection').attr('prodSN'),
            prodDeployWay: $('.after-sale-servicr-selection').attr('prodDeployWay'),
            prodVersion: $('.after-sale-servicr-selection').attr('prodVersion')
        }

        $.ajax({
            // url: 'https://supportest.kingdee.com/productSelect.php',
            url: CONFIG.api + '/cmsadmin/imchat/redirectPCIMLater',
            type: 'POST',
            dataType: 'json',
            contentType: "application/json;charset=UTF-8",
            data: JSON.stringify(_Data),
            headers: {
                'kduid': $.cookie('kingdee_uid'),
                'site_param': $.cookie('site_param')
            },
            success: function (da) {
                if (da.code === 200) {
                    newWin(da.data, 'newa12')
                } else {
                }
            },
            error: function () {
            }
        })
    }

})

// 客服电话弹框
if (document.querySelector('.customer_phone_mask')) {
    function customerBoxEject(time) {
        setTimeout(function () {
            $('.customer_phone_mask').fadeIn(1000);
            $('.customer_phone_buts').animate({ marginLeft: '0' }, 1000)
            $('.customer_phone_text').animate({ marginLeft: '0' }, 1000)
        }, time);
    }
    if (sessionStorage.getItem("FirstEntry")) {
        customerBoxEject(60000)
    } else {
        sessionStorage.setItem("FirstEntry", "false")
        customerBoxEject(10000)
    }
    $('.customer_phone_close').click(function () {
        $('.customer_phone_mask').hide()
        customerBoxEject(60000)
    })
}
//a标签动态click
function newWin(url, id) {
    let a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('target', '_blank');
    a.setAttribute('id', id);
    // 防止反复添加
    if (!document.getElementById(id)) document.body.appendChild(a);
    a.click();
}

// 未购买商品售后拦击弹框
$('.sales-intercept-close').click(function () {
    $('.sales-intercept').hide()
})
$('.sales-intercept-butt').click(function (e) {
    e.preventDefault()
    $('.sales-intercept').hide()
})

//滑块校验
function silderPuzzleFoot(e) {
    elTarget = e
    if (!checkPhoneFoot()) {
        alert("手机号码有误，请重填。");
        $('.input-err').addClass('err-active')
        return;
    }
    silderpuzzleInitReset("000000") // 随机码
    $('.silderpuzzle-mask').show()
    errorsNum = 0
}
// 验证成功
function verificationSuccessFoot() {
    footerContentBtn(silderpuzzleIndex)
}
// 验证失败
function verificationFail() {
}
document.write(`<script src="/r/cms/www/default/v0.1/lib/SliderImgPuzzle/sliderImgPuzzle.js"></script>`)
