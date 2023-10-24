$(function () {
    // header
    $('.header-tabs a').click(function (e) {
        // e.preventDefault();
        $('.header-tabs li').removeClass("header-tabs-current");
        $(this).parent().addClass("header-tabs-current");
    });

    // $('#core-function-tabs a').hover(function () {
    //   if (!$(this).parent().hasClass("current")) {
    //     $(this).parent().addClass("hoverItem");
    //   }
    // }, function () {
    //   $(this).parent().removeClass("hoverItem");
    // });

    //
    // $('#core-function-tabs a').click(function (e) {
    //   e.preventDefault();
    //   $('#core-function-tabs li').removeClass("current").removeClass("hoverItem");
    //   $(this).parent().addClass("current");
    // });

    // $('#core-function-tabs a').hover(function () {
    //   if (!$(this).parent().hasClass("current")) {
    //     $(this).parent().addClass("hoverItem");
    //   }
    // }, function () {
    //   $(this).parent().removeClass("hoverItem");
    // });
});


// // 获取输入框
// let name = document.querySelector('.name')
// let phoneValue = document.querySelector('.phoneValue')
// let codeInput = document.querySelector('.codeInput')
// let codeText = document.querySelector('.code-btn')
// let countDown = 60;

// // 验证手机号
// function checkPhone() {
//   if (!(/^1[3456789]\d{9}$/.test(phoneValue.value)) || phoneValue.value == '') {
//       return false;
//   }
//   return true;
// }
// // 发送验证码
// function setTime() {
//   if (countDown == 0) {
//       codeText.removeAttribute("disabled");
//       codeText.innerText = "获取验证码";
//       countDown = 60;
//       return;
//   } else {
//       codeText.setAttribute("disabled", true);
//       codeText.innerText = "重新发送(" + countDown + ")";
//       countDown--;
//   }
//   setTimeout(function () {
//       setTime()
//   }, 1000)

// }
// // 发送验证码
// function sendMsgCode() {
//   if (!checkPhone()) {
//       alert("手机号码有误，请重填。");
//       return;
//   }
//   let tel = {
//       phone: phoneValue.value
//   }
//   $.ajax({
//       type: "POST",
//       url: CONFIG.api + "/cmsadmin/inquiry/sendMsgCode",
//       data: JSON.stringify(tel),
//       dataType: "json",
//       contentType: 'application/json;charset=utf-8',
//       success: function (res) {
//           console.log(res)
//           if (res.code == -1) {
//               console.log(res.message)
//               alert(res.message)
//           } else {
//               setTime()
//           }
//       },
//       error: function (err) {
//           console.error(err);
//           alert(err)
//       }
//   })
// }

// function submitBtn() {
//   console.log(name.value, phoneValue.value, codeInput.value);
//   if (name.value == '') {
//       console.log("用户名不能为空");
//       alert('姓名不能为空');
//       return false;
//   }
//   if (!checkPhone()) {
//       alert("手机号码有误，请重填");
//       phoneValue.value = ''
//       return false;
//   }
//   if (codeInput.value == '') {
//       console.log("验证码不能为空");
//       alert('验证码不能为空');
//       return false;
//   }
//   submitAjax();
//   return true;
// }

// function submitAjax() {
//   let telCode = {
//       phone: phoneValue.value,
//       vcode: codeInput.value
//   }
//   let message = {
//       eventid: "c27",
//       contentid: null,
//       contenttype: null,
//       url: window.location.href,
//       referurl: "留资页",
//       third: 1,
//       platform: "wap_kdweb",
//       login: $.cookie("kingdee_uid") ? 1 : 0,
//       spm: null,
//       userid: $.cookie("kingdee_uid"),
//       mobile: phoneValue.value,
//       consumername: name.value,
//       consumercorp: '',
//       consumerneed: '',
//       sourcelev1: '',
//       sourcelev2: '',
//       sourcelev3: $.cookie('utm_source') ? $.cookie('utm_source') : '',
//       sourcelev4: $.cookie('utm_medium') ? $.cookie('utm_medium') : '',
//       sourcelev5: $.cookie('utm_campaign') ? $.cookie('utm_campaign') : '',
//       sourcelev6: $.cookie('utm_term') ? $.cookie('utm_term') : '',
//       sourcelev7: $.cookie('utm_content') ? $.cookie('utm_content') : ''
//   }

//   let message1 = {
//       linkName: name.value,
//       linkPhone: phoneValue.value,
//       corpName: '',
//       description: '',
//       consultType: '2',
//       sourceOne: '电话营销',
//       sourceTwo: '集团'
//   }
//   // 初次请求，验证输入的手机和验证码是否对的上
//   $.ajax({
//       type: "post",
//       url: CONFIG.api + "/cmsadmin/inquiry/vaildMsgCode",
//       data: JSON.stringify(telCode),
//       dataType: "json",
//       contentType: "application/json;charset=utf-8",
//       success: res => {
//           console.log(res);
//           if (res.code == -1) {
//               console.log(res.message);
//               alert(res.message);
//           } else {
//               // 获取的状态码正常再发送数据过去
//               $.ajax({
//                   type: "post",
//                   url: CONFIG.api + "/cmsadmin/kingdeeMessage/upBehvLog",
//                   data: JSON.stringify(message),
//                   dataType: "json",
//                   contentType: "application/json;charset=utf-8",
//                   success: res => {
//                       console.log(res);
//                   },
//                   error: err => {
//                       console.log(err);
//                       alert(err)
//                   }
//               })

//               $.ajax({
//                   type: "post",
//                   url: CONFIG.api + "/cmsadmin/kingdeeMessage/upBehvLogNoLogin",
//                   data: JSON.stringify(message1),
//                   dataType: "json",
//                   contentType: "application/json;charset=utf-8",
//                   success: res => {
//                       console.log(res);
//                       window.location.href = "/inquiry/complete.html"
//                   },
//                   error: err => {
//                       console.log(err);
//                       alert(err)
//                   }
//               })
//           }
//       },
//       error: err => {
//           console.log(err);
//           alert(err)
//       }
//   })
// }


window.onload = function () {

    //   let mainnavList = document.getElementsByClassName("navtab");
    //   for (let i = 0; i < mainnavList.length; i++) {
    //       mainnavList[i].onclick = function () {
    //           for (let j = 0; j < mainnavList.length; j++) {
    //               mainnavList[j].classList.remove("active");
    //           }
    //           this.classList.add("active")
    //       }
    //   }

    //   let mainNav = document.getElementsByClassName("module-tabs")[0];
    //   let financialCloud = document.getElementsByName("tab-container-1")[0];
    //   let supplychainCloud = document.getElementsByName("tab-container-2")[0];
    //   let manufactureCloud = document.getElementsByName("tab-container-3")[0];
    //   let omnichannelCloud = document.getElementsByName("tab-container-4")[0];
    //   let HRCloud = document.getElementsByName("tab-container-5")[0];

    // 监听页面滚动距离
    //   window.onscroll = function () {
    // console.log(document.documentElement.scrollTop);
    // console.log(mainNav.offsetTop)
    //   let k = null;
    //   if (document.documentElement.scrollTop < financialCloud.offsetTop + financialCloud.offsetHeight - mainNav.offsetHeight) {
    // console.log("小于"+business.offsetTop+"距离了");
    //   k = 0;
    //   } else if (document.documentElement.scrollTop < supplychainCloud.offsetTop + supplychainCloud.offsetHeight - mainNav.offsetHeight) {
    // console.log("小于"+advantage.offsetTop+"距离了");
    //   k = 1;
    //   } else if (document.documentElement.scrollTop < manufactureCloud.offsetTop + manufactureCloud.offsetHeight - mainNav.offsetHeight) {
    // console.log("小于"+advantage.offsetTop+"距离了");
    //   k = 2;
    //   } else if (document.documentElement.scrollTop < omnichannelCloud.offsetTop + omnichannelCloud.offsetHeight - mainNav.offsetHeight) {
    // console.log("小于"+advantage.offsetTop+"距离了");
    //   k = 3;
    //   } else if (document.documentElement.scrollTop < HRCloud.offsetTop + HRCloud.offsetHeight - mainNav.offsetHeight) {
    // console.log("小于"+advantage.offsetTop+"距离了");
    //   k = 4;
    //   }
    //   for (let i = 0; i < mainnavList.length; i++) {
    //   mainnavList[i].classList.remove("active");
    //   }
    //   mainnavList[k].classList.add("active")
    //   }
}