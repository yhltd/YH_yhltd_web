<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<!-- #include file="inc/functions.asp" -->
<%
errno=Request("errno")
If errno<>"" Then
	If CInt(errno)=2 Then
		errmsg="用户名或密码不能为空!"
	End If

	If CInt(errno)=1 Then
		errmsg="错误的用户名或密码!"
	End If
	If CInt(errno)=0 Then
		errmsg="错误的验证码!"
	End If
End If
%>

<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title><%=gdb("select web_name from web_settings ")%>-云合未来计算机技术技术有限公司手机端</title>
<link href="inc/logincss.css" rel="stylesheet" type="text/css" />
<script language="JavaScript">
function CheckLogin()
{
	if(document.MyForm.username.value=="")
	{
		alert("请输入用户名再提交！");
		document.MyForm.username.focus();
		return false 
	}
	if(document.MyForm.password.value=="")
	{
		alert("请输入密码再提交！");
		document.MyForm.password.focus()
		return false 

	}

	if(document.MyForm.verifycode.value=="")
	{
		alert("请输入验证码再提交");
		document.MyForm.verifycode.focus()
		return false 

	}

}
</script>
</head>
<body>
<div class="mains">
<div class="inners">
<div class="lefts"> </div>

<div class="login">
<form action="admin_login.asp" method="post" name="MyForm" id="MyForm"><INPUT type="hidden" value="chklogin" name="reaction">
<div class="center">
<div class="inner">
 <table   cellpadding="0" cellspacing="0" id="innnertalbe">
        <tr>
          <td  height="60">用 户</td>
          <td ><input name="username" type="text" class="login_textfield" id="username" size="16" maxlength="100" /></td>
         </tr><tr>
		  <td height="60" >密 码</td>
          <td ><input name="password" type="password" class="login_textfield" id="password" size="16" maxlength="100" /></td>
        </tr>
        <tr>
		  <td height="56" >验证码</td>
          <td ><input type="text" name="verifycode" class='verifycode' id="verifycode"  size="16" maxlength="5"/> <IMG style="CURSOR: pointer"
            onclick="this.src=this.src+'?'" height=16 width=50 alt="验证码,看不清楚?请点击刷新验证码"
            src="../inc/getcode.asp"></td>
        </tr>        
        <tr >
		  <td height="49"></td>
          <td><input name="image" type="submit" class="LoginSub" onclick="return CheckLogin()" value=" 登 录 " />
          <br><span style="color:#FF0000;"><%=errmsg%></span></td>
        </tr>
      </table>
</div>
<div class="clearfix"></div>
</div>
</form>
</div>


</div>
</div>
<div class="CopyR">2017 &copy; <a href="http://www.hituxcms.com" target="_blank">云合未来计算机技术有限公司工作室</a> www.hituxcms.com 版权所有 All rights reserved  </div>

</body>
</html>
