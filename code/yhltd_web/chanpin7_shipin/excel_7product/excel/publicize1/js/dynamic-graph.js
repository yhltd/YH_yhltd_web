function watchVideo(index) {
    if (index === 1) {
        $("#video").attr("src", "video/DHF_TEMP/24c55579c2b6dd6d91c6f02057996c0a.mp4");
    } else if (index === 2) {
        $("#video").attr("src", "video/DHF_TEMP/excel_财务.mp4");
    } else if (index === 3) {
        $("#video").attr("src", "video/DHF_TEMP/产供销排产系统 小代.mp4");
    } else if (index === 4) {
        $("#video").attr("src", "video/DHF_TEMP/进销存20220607-01.mp4");
    } else if (index === 5) {
        $("#video").attr("src", "video/DHF_TEMP/排产表1.4.mp4");
    } else if (index === 6) {
        $("#video").attr("src", "video/DHF_TEMP/排产管理系统-中质量.mp4");
    } else if (index === 7) {
        $("#video").attr("src", "video/DHF_TEMP/培训管理系统-中质量.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

function watchVideo1(index) {
    if (index === 1) {
        $("#video").attr("src", "video/11.mp4");
    } else if (index === 2) {
        $("#video").attr("src", "video/产供销排产系统 小代.mp4");
    } else if (index === 3) {
        $("#video").attr("src", "video/短视频数据化分析系统.mp4");
    } else if (index === 4) {
        $("#video").attr("src", "video/进销存20220607-01.mp4");
    } else if (index === 5) {
        $("#video").attr("src", "video/幼儿管理.mp4");
    } else if (index === 6) {
        $("#video").attr("src", "video/生产管理系统.mp4");
    } else if (index === 7) {
        $("#video").attr("src", "video/说明.mp4");
    }
    $(".videoCanvas").show();
    $(".video-mask").show();
}

function popDiv(){
    var popBox = document.getElementById("popDiv");
    var popLayer = document.getElementById("popLayer");
    popBox.style.display = "block";
    popLayer.style.display = "block";
}
function popDiv1(){
    var popBox1 = document.getElementById("popDiv1");
    var popLayer1 = document.getElementById("popLayer1");
    popBox1.style.display = "block";
    popLayer1.style.display = "block";
}
function popDiv2(){
    var popBox2 = document.getElementById("popDiv2");
    var popLayer2 = document.getElementById("popLayer2");
    popBox2.style.display = "block";
    popLayer2.style.display = "block";
}
function popDiv3(){
    var popBox3 = document.getElementById("popDiv3");
    var popLayer3 = document.getElementById("popLayer3");
    popBox3.style.display = "block";
    popLayer3.style.display = "block";
}
function popDiv4(){
    var popBox4 = document.getElementById("popDiv4");
    var popLayer4 = document.getElementById("popLayer4");
    popBox4.style.display = "block";
    popLayer4.style.display = "block";
}
function popDiv5(){
    var popBox5 = document.getElementById("popDiv5");
    var popLayer5 = document.getElementById("popLayer5");
    popBox5.style.display = "block";
    popLayer5.style.display = "block";
}
function closePop(){
    let popDiv = document.getElementById("popDiv");
    popDiv.style.display = "none";
}
function    closePop1(){
    let popDiv1 = document.getElementById("popDiv1");
    popDiv1.style.display = "none";
}
function closePop2(){
    let popDiv2 = document.getElementById("popDiv2");
    popDiv2.style.display = "none";
}
function closePop3(){
    let popDiv3 = document.getElementById("popDiv3");
    popDiv3.style.display = "none";
}
function closePop4(){
    let popDiv4 = document.getElementById("popDiv4");
    popDiv4.style.display = "none";
}function closePop5(){
    let popDiv5 = document.getElementById("popDiv5");
    popDiv5.style.display = "none";
}

$("#video-shut").click(function () {

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
window.onload = function()
{
    var oDiv = document.getElementById("div1");
    var oUl = document.getElementsByTagName("ul")[0];
    var oLi = document.getElementsByTagName("li");
    var oA = document.getElementsByTagName("a");
    var timer = null;
    var iSpeed = 3;
    //复制一遍ul
    oUl.innerHTML +=oUl.innerHTML;
    //ul的宽度是所有li宽度之和，复制ul之后的整个ul的宽度就是li的长度乘以一个li的宽度
    oUl.style.width = oLi.length*oLi[0].offsetWidth + "px";
    function fnMove()
    {
        //图片向左移动时的条件，即在div里的ul的offsetLeft小于一个ul的宽度
        if (oUl.offsetLeft<-oUl.offsetWidth/2)
        {
            //将整个复制的ul向右拖拽直至整个ul中的第一张图归位到起点
            oUl.style.left = 0;
        }
        //图片向右移动时的条件，即在div里的ul的offsetLeft大于等于0
        else if (oUl.offsetLeft>=0)
        {
            //将整个复制的ul向左拖拽直至整个ul中的第一张图归位到起点
            oUl.style.left = -oUl.offsetWidth/2 + "px";
        }
        //给ul一个速度让整个ul的offsetLeft增加或减少，速度为正则向右移动，速度为负则向左移动
        oUl.style.left = oUl.offsetLeft +iSpeed + "px";
    }
    timer=setInterval(fnMove,30)
    //点击向左滚动即触发第一个a元素标签
    oA[0].onclick = function()
    {
        iSpeed = -8;
    }
    //点击向右滚动即触发第二个a元素标签
    oA[1].onclick = function()
    {
        iSpeed = 8;
    }
    //当鼠标移动到div里面的时候图片滚动暂停，此时清除定时器即可。
    oDiv.onmouseover = function()
    {
        clearInterval(timer);
    }
    //当鼠标移出div的时候图片继续滚动，此时重新加载定时器。
    oDiv.onmouseout = function()
    {
        timer=setInterval(fnMove,30);
    }
}


var cot=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex(){
    if(cot<=2){
        $('.imgs img').eq(cot).animate({'margin-left':'-1000px'},500);
        cot++;
    }
}
function pre(){
    if(cot>0){
        cot--;
        $('.imgs img').eq(cot).animate({'margin-left':'0'},500);
    }
}

var cot1=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex1(){
    if(cot1<=3){
        $('.imgs1 img').eq(cot1).animate({'margin-left':'-1000px'},500);
        cot1++;
    }
}
function pre1(){
    if(cot1>0){
        cot1--;
        $('.imgs1 img').eq(cot1).animate({'margin-left':'0'},500);
    }
}

var cot2=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex2(){
    if(cot2<=3){
        $('.imgs2 img').eq(cot2).animate({'margin-left':'-1000px'},500);
        cot2++;
    }
}
function pre2(){
    if(cot2>0){
        cot2--;
        $('.imgs2 img').eq(cot2).animate({'margin-left':'0'},500);
    }
}

var cot3=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex3(){
    if(cot3<=5){
        $('.imgs3 img').eq(cot3).animate({'margin-left':'-1000px'},500);
        cot3++;
    }
}
function pre3(){
    if(cot3>0){
        cot3--;
        $('.imgs3 img').eq(cot3).animate({'margin-left':'0'},500);
    }
}

var cot4=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex4(){
    if(cot4<=2){
        $('.imgs4 img').eq(cot4).animate({'margin-left':'-1000px'},500);
        cot4++;
    }
}
function pre4(){
    if(cot4>0){
        cot4--;
        $('.imgs4 img').eq(cot4).animate({'margin-left':'0'},500);
    }
}

var cot5=0;//设置一个计数器，初始值为0；作用是用来监听点击切换的时候哪一个图片应该隐藏或者显示
function nex5(){
    if(cot5<=6){
        $('.imgs5 img').eq(cot5).animate({'margin-left':'-1000px'},500);
        cot5++;
    }
}
function pre5(){
    if(cot5>0){
        cot5--;
        $('.imgs5 img').eq(cot5).animate({'margin-left':'0'},500);
    }
}




    window.onload = function(){
        var box=this.document.getElementsByClassName("re")[0];
        var lik=box.getElementsByTagName("li");
        function fun(i,j){//转换图片函数，就是把透明度改了一下
            lik[i].style.opacity=1;
            lik[j].style.opacity=0;
            lik[i+5].style.backgroundColor="#00008b";//改一下小图标
            lik[j+5].style.backgroundColor="#00000000"
        }
        fun(0,1);//初始化下
        var i =0;
        function auto(){//轮播循环函数
            if(++i>=5){
                i=0;
                fun(0,4);
            }
            else fun(i,i-1);
        }


            timer=this.setInterval(auto,2000);
        box.onmouseover = function () { //鼠标划上去，停止轮播
            console.log('good');
            clearInterval(timer);
        }
        box.onmouseout = function () { //鼠标划出，继续轮播
            timer = setInterval(auto, 2000); //调用定时器
        }
        var j =0;
        for(;j<5;j++){//点击小图标也可以转换图片
            lik[j+5].ind=j;
            lik[j+5].onclick=function(){
                fun(this.ind,i)
                i=this.ind;
            }
        }

    }
