// 获取输入框1
var name = document.querySelectorAll('.name')
// console.log(name);
var phoneValue = document.querySelectorAll('.phoneValue')
var codeInput = document.querySelectorAll('.codeInput')
var codeText = document.querySelectorAll('.code-btn')
var countDown = 60;
var elIndex;

// 验证手机号
function checkPhone(e) {
    if (!(/^1[3456789]\d{9}$/.test(e.value)) || e.value == '') {
        return false;
    }
    return true;
}

var control = false
// 发送验证码
function setTime(e) {
    // console.log(e);
    if (countDown == 0) {
        codeText[e].removeAttribute("disabled");
        control = false
        if(e == 1) {
            codeText[e].innerText = "重新发送";
            $('.code-btn').eq(e).addClass('active')
        } else {
            codeText[e].innerText = "获取验证码";
        }
        countDown = 60;
        return;
    } else {
        control = true
        codeText[e].setAttribute("disabled", true);
        if(e == 1) {
            codeText[e].innerText ="发送验证码（ "+countDown+" s）";
            $('.code-btn').eq(e).removeClass('active')
        } else {
            codeText[e].innerText = "重新发送(" + countDown + ")";
        }
        countDown--;
    }
    elIndex = e;
    setTimeout("setTime(elIndex)", 1000)

}
// 发送验证码
function sendMsgCode(e,silderpuzzleIndex) {
    if(control) {
        return
    }
    if (!checkPhone(phoneValue[e])) {
        alert("手机号码有误，请重填。");
        if(e == 1) {
            $('.input-err').addClass('err-active')
        }
        return;
    }
    var tel = {
        phone: phoneValue[e].value,
        verifcaCode: silderpuzzleIndex
    }
    elIndex = e;
    // setTime(elIndex)

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
                setTime(elIndex)
                if(elIndex == 1) {
                    $('.footer-content-right').hide()
                    $('.footer-content-right2').show()
                    // console.log($('.verification').eq(0))
                    $('.verification').eq(0).focus()
                    $('.verification').val('')
                    $('.phone-text').text(phoneValue[elIndex].value)
                }
            }
        },
        error: function (err) {
            console.error(err);
            alert(JSON.stringify(err));
        }
    })
}

function submitBtn(e) {
    var name = document.querySelectorAll('.name')
    console.log(name[e].value, phoneValue[e].value, codeInput[e].value);
    if (name[e].value == '') {
        console.log("用户名不能为空");
        alert('姓名不能为空');
        return false;
    }
    if (!checkPhone(phoneValue[e])) {
        alert("手机号码有误，请重填");
        phoneValue[e].value = ''
        return false;
    }
    if (codeInput[e].value == '') {
        console.log("验证码不能为空");
        alert('验证码不能为空');
        return false;
    }
    submitAjax(e);
    return true;
}

function submitAjax(e) {
    var name = document.querySelectorAll('.name')
    // console.log(phoneValue)
    var telCode = {
        phone: phoneValue[e].value,
        vcode: codeInput[e].value
    }
    var message = {
        eventid: "c27",
        contentid: null,
        contenttype: null,
        url: window.location.href,
        referurl: "留资页",
        third: 1,
        platform: "wap_kdweb",
        login: $.cookie("kingdee_uid") ? 1 : 0,
        spm: null,
        userid: $.cookie("kingdee_uid"),
        mobile: phoneValue[e].value,
        consumername: name[e].value,
        consumercorp: '',
        consumerneed: '',
        sourcelev1: '',
        sourcelev2: '',
        sourcelev3: $.cookie('utm_source') !== 'null' && $.cookie('utm_source') ? decodeURI(decodeURI($.cookie('utm_source'))) : '',
        sourcelev4: $.cookie('utm_medium') !== 'null' && $.cookie('utm_medium') ? decodeURI(decodeURI($.cookie('utm_medium'))) : '',
        sourcelev5: $.cookie('utm_campaign') !== 'null' && $.cookie('utm_campaign') ? decodeURI(decodeURI($.cookie('utm_campaign'))) : '',
        sourcelev6: $.cookie('utm_term') !== 'null' && $.cookie('utm_term') ? decodeURI(decodeURI($.cookie('utm_term'))) : '',
        sourcelev7: $.cookie('utm_content') !== 'null' && $.cookie('utm_content') ? decodeURI(decodeURI($.cookie('utm_content'))) : ''
    }

    var source = []
    if($.cookie('utm_source') !== 'null' && $.cookie('utm_source')){
        source.push(decodeURI(decodeURI($.cookie('utm_source'))))
    }
    if($.cookie('utm_medium') !== 'null' && $.cookie('utm_medium')){
        source.push(decodeURI(decodeURI($.cookie('utm_medium'))))
    }
    if($.cookie('utm_campaign') !== 'null' && $.cookie('utm_campaign')){
        source.push(decodeURI(decodeURI($.cookie('utm_campaign'))))
    }
    if($.cookie('utm_term') !== 'null' && $.cookie('utm_term')){
        source.push(decodeURI(decodeURI($.cookie('utm_term'))))
    }
    if($.cookie('utm_content') !== 'null' && $.cookie('utm_content')){
        source.push(decodeURI(decodeURI($.cookie('utm_content'))))
    }
    var message1 = {
        linkName: name[e].value,
        linkPhone: phoneValue[e].value,
        corpName: '',
        description: '',
        consultType: '2',
        sourceOne: '电话营销',
        sourceTwo: '集团',
        sourceMore: source.join(',')
    }
    // 初次请求，验证输入的手机和验证码是否对的上
    $.ajax({
        type: "post",
        url: CONFIG.api + "/cmsadmin/inquiry/vaildMsgCode",
        data: JSON.stringify(telCode),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: res => {
            console.log(res);
            if (res.code == -1) {
                console.log(res.message);
                alert(res.message);
            } else {
                // 获取的状态码正常再发送数据过去
                $.ajax({
                    type: "post",
                    url: CONFIG.api + "/cmsadmin/kingdeeMessage/upBehvLog",
                    data: JSON.stringify(message),
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    success: res => {
                        console.log(res);
                    },
                    error: err => {
                        console.log(err);
                        alert(JSON.stringify(err));
                    }
                })

                $.ajax({
                    type: "post",
                    url: CONFIG.api + "/cmsadmin/kingdeeMessage/upBehvLogNoLogin",
                    data: JSON.stringify(message1),
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    success: res => {
                        console.log(res);
                        window._agl && window._agl.push(['track', ['success', {t: 3}]])
                        window.location.href = "/sem/success";
                    },
                    error: err => {
                        console.log(err);
                        alert(JSON.stringify(err));
                    }
                })
            }
        },
        error: err => {
            console.log(err);
            alert(JSON.stringify(err));
        }
    })
}

// 立即申请试用按钮交互
// $('.facula').on('mouseenter', this, function() {
//     // console.log('aaa')
//     $(this).addClass('active')
// })
// $('.facula').on('mouseleave', this, function() {
//     // console.log('aaa')
//     $(this).removeClass('active')
// })

// 页面底部
$('.input-box').on('mouseenter', this, function() {
    $('.input-err').removeClass('err-active')
})

// 返回重选手机号
$('.modify-return').click(function() {
    $('.footer-content-right').show()
    $('.footer-content-right2').hide()
    countDown = 0
})

// 输入验证码
document.querySelectorAll(".verification").forEach(function(item,i) {
    item.onfocus = function(){
        $(item).val('')
    }
})


// 页面底部的验证码输入框自动切换下一个
$('.verification').on('input', this, function() {
    // console.log($(this).index())
    $('.verification-err').removeClass('verification-active')
    if($(this).index() < 5) {
        $('.verification').eq($(this).index() + 1).focus();
    }else {
        // console.log('输入完成')
        $(this).blur()
        inputComplete()
    }
})
document.querySelectorAll('.verification').forEach(function(item, i) {
    item.index = i
    item.onkeyup = function(e) {
        if(e.keyCode == 8) {
            document.querySelectorAll('.verification')[item.index - 1].focus()
        }
    }
})

function isNumber(val) {
    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)) {
        return true;
    } else {
        return false;
    }
}

// 验证码输入完成时执行的函数
function inputComplete () {
    var codeInputTxt = ''
    $('.verification').each(function(i,item) {
        codeInputTxt += $(item).val()
    })
    console.log('验证码是',isNumber(codeInputTxt))
    if(!(isNumber(codeInputTxt))) {
        $('.verification-err').addClass('verification-active')
        $('.verification').val('')
        $('.verification').eq(0).focus()
        return
    }
    var phoneValuetxt = phoneValue[1].value,
        codeInputtxt = codeInputTxt,
        e = 1;
     var telCode = {
        phone: phoneValuetxt,
        vcode: codeInputtxt
    }
     console.log('参数是',telCode)

    var message = {
        eventid: "c27",
        contentid: null,
        contenttype: null,
        url: window.location.href,
        referurl: "留资页",
        third: 1,
        platform: "wap_kdweb",
        login: $.cookie("kingdee_uid") ? 1 : 0,
        spm: null,
        userid: $.cookie("kingdee_uid"),
        mobile: phoneValuetxt,
        consumername: '',
        consumercorp: '',
        consumerneed: '',
        sourcelev1: '',
        sourcelev2: '',
        sourcelev3: $.cookie('utm_source') !== 'null' && $.cookie('utm_source') ? decodeURI(decodeURI($.cookie('utm_source'))) : '',
        sourcelev4: $.cookie('utm_medium') !== 'null' && $.cookie('utm_medium') ? decodeURI(decodeURI($.cookie('utm_medium'))) : '',
        sourcelev5: $.cookie('utm_campaign') !== 'null' && $.cookie('utm_campaign') ? decodeURI(decodeURI($.cookie('utm_campaign'))) : '',
        sourcelev6: $.cookie('utm_term') !== 'null' && $.cookie('utm_term') ? decodeURI(decodeURI($.cookie('utm_term'))) : '',
        sourcelev7: $.cookie('utm_content') !== 'null' && $.cookie('utm_content') ? decodeURI(decodeURI($.cookie('utm_content'))) : ''
    }

    var source = []
    if($.cookie('utm_source') !== 'null' && $.cookie('utm_source')){
        source.push(decodeURI(decodeURI($.cookie('utm_source'))))
    }
    if($.cookie('utm_medium') !== 'null' && $.cookie('utm_medium')){
        source.push(decodeURI(decodeURI($.cookie('utm_medium'))))
    }
    if($.cookie('utm_campaign') !== 'null' && $.cookie('utm_campaign')){
        source.push(decodeURI(decodeURI($.cookie('utm_campaign'))))
    }
    if($.cookie('utm_term') !== 'null' && $.cookie('utm_term')){
        source.push(decodeURI(decodeURI($.cookie('utm_term'))))
    }
    if($.cookie('utm_content') !== 'null' && $.cookie('utm_content')){
        source.push(decodeURI(decodeURI($.cookie('utm_content'))))
    }
    var message1 = {
        linkName: '',
        linkPhone: phoneValuetxt,
        corpName: '',
        description: '',
        consultType: '2',
        sourceOne: '电话营销',
        sourceTwo: '集团',
        sourceMore: source.join(',')
    }
    // 初次请求，验证输入的手机和验证码是否对的上
    $.ajax({
        type: "post",
        url: CONFIG.api + "/cmsadmin/inquiry/vaildMsgCode",
        data: JSON.stringify(telCode),
        dataType: "json",
        contentType: "application/json;charset=utf-8",
        success: res => {
            console.log(res);
            if (res.code == -1) {
                console.log(res.message);
                alert(res.message);
                $('.verification-err').addClass('verification-active')
                $('.verification').val('')
                $('.verification').eq(0).focus()
            } else {
                // 获取的状态码正常再发送数据过去
                $.ajax({
                    type: "post",
                    url: CONFIG.api + "/cmsadmin/kingdeeMessage/upBehvLog",
                    data: JSON.stringify(message),
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    success: res => {
                        console.log(res);
                    },
                    error: err => {
                        console.log(err);
                        alert(JSON.stringify(err));
                    }
                })

                $.ajax({
                    type: "post",
                    url: CONFIG.api + "/cmsadmin/kingdeeMessage/upBehvLogNoLogin",
                    data: JSON.stringify(message1),
                    dataType: "json",
                    contentType: "application/json;charset=utf-8",
                    success: res => {
                        console.log(res);
                        window._agl && window._agl.push(['track', ['success', {t: 3}]])
                        window.location.href = "/sem/success";
                    },
                    error: err => {
                        console.log(err);
                        alert(JSON.stringify(err));
                    }
                })
            }
        },
        error: err => {
            console.log(err);
            alert(JSON.stringify(err));
        }
    })
}


// 致电金蝶
$(".after-sale-box-item2").hover(function() {
    $(".after-sale-dialog-center2").show()
}, function () {
    $(".after-sale-dialog-center2").hide();
})
// 取消冒泡
$('.after-sale-dialog-center').click(function(e) {
    e.stopPropagation()
})
$('.advisory-pc-item-before').unbind('click')
// 滑块验证
function silderPuzzle(e) {
    if(countDown<60){
        return false
    }
    elIndex = e
    if (!checkPhone(phoneValue[e])) {
        alert("手机号码有误，请重填。");
        if(e == 1) {
            $('.input-err').addClass('err-active')
        }
        return;
    }
    silderpuzzleInitReset("000000") // 随机码
    $('.silderpuzzle-mask').show()
    errorsNum = 0
}
// 验证成功
function verificationSuccess() {
    sendMsgCode(elIndex,silderpuzzleIndex)
}
// 验证失败
function verificationFail() {
}
