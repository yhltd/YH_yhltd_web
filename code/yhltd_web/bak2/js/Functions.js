function mobileRedirect(murl){
try {
if(document.getElementById("bdmark") != null){
return;
}
        
var urlhash = window.location.hash;
if (!urlhash.match("fromapp")){
if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad|Symbia)/i))) {
location.replace(murl);
}
}
} catch(err){}
}
mobileRedirect("/M/");


// nav menu
var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose; 



//��Ʒ���ർ��

var menuids=["suckertree1"] //Enter id(s) of SuckerTree UL menus, separated by commas

function buildsubmenus(){
for (var i=0; i<menuids.length; i++){
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
    ultags[t].parentNode.getElementsByTagName("a")[0].className="subfolderstyle"
    ultags[t].parentNode.onmouseover=function(){
    this.getElementsByTagName("ul")[0].style.display="block"
    }
    ultags[t].parentNode.onmouseout=function(){
    this.getElementsByTagName("ul")[0].style.display="none"
    }
    }
  }
}

if (window.addEventListener)
window.addEventListener("load", buildsubmenus, false)
else if (window.attachEvent)
window.attachEvent("onload", buildsubmenus)


/*�����˵�*/

$(function(){	
	//��ȡҪ��λԪ�ؾ�������������ľ���
	var navH = $("#NavLink").offset().top;
	//�������¼�
	$(window).scroll(function(){
		//��ȡ�������Ļ�������
		var scroH = $(this).scrollTop();
		//�������Ļ���������ڵ��ڶ�λԪ�ؾ�������������ľ��룬�͹̶�����֮�Ͳ��̶�
		if(scroH>=navH){
			$("#NavLink").css({"position":"fixed","top":0,"left":"0%","filter":"alpha(opacity=95)","-moz-opacity":0.95,"opacity":0.95});
		}else if(scroH<navH){
			$("#NavLink").css({"position":"static","margin":"0 auto","filter":"alpha(opacity=100)","-moz-opacity":1.0,"opacity":1.0});
		}
		console.log(scroH==navH);
	})
})


function comment_check() {
if ( document.form1.name.value == '' ) {
window.alert('����������^_^');
document.form1.name.focus();
return false;}

if ( document.form1.email.value.length> 0 &&!document.form1.email.value.indexOf('@')==-1|document.form1.email.value.indexOf('.')==-1 ) {
window.alert('��������ȷ��Email��ַ����:webmaster@hitux.com');
document.form1.email.focus();
return false;}

if(document.form1.qq.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("QQֻ��������^_^");   
document.form1.qq.focus();
return false;}

if ( document.form1.content.value == '' ) {
window.alert('����������^_^');
document.form1.content.focus();
return false;}

if ( document.form1.verycode.value == '' ) {
window.alert('��������֤��^_^');
document.form1.verycode.focus();
return false;}

return true;}


function order_check() {
if ( document.form1.ordercount.value == '' ) {
window.alert('�����붩������^_^');
document.form1.ordercount.focus();
return false;}

if(document.form1.ordercount.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("��������ֻ��������^_^");   
document.form1.ordercount.focus();
return false;}


if ( document.form1.name.value == '' ) {
window.alert('��������ϵ��^_^');
document.form1.name.focus();
return false;}

if ( document.form1.address.value == '' ) {
window.alert('��������ϵ��ַ^_^');
document.form1.address.focus();
return false;}

if ( document.form1.tel.value == '' ) {
window.alert('��������ϵ�绰^_^');
document.form1.tel.focus();
return false;}

if ( document.form1.email.value.length> 0 &&!document.form1.email.value.indexOf('@')==-1|document.form1.email.value.indexOf('.')==-1 ) {
window.alert('��������ȷ��Email��ַ����:webmaster@hitux.com');
document.form1.email.focus();
return false;}

if(document.form1.qq.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("QQֻ��������^_^");   
document.form1.qq.focus();
return false;}


if ( document.form1.verycode.value == '' ) {
window.alert('��������֤��^_^');
document.form1.verycode.focus();
return false;}

return true;}






