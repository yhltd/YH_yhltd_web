<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=2.0, user-scalable=yes" />
<meta content="initial-scale=1.0,user-scalable=no,maximum-scale=1" media="(device-height: 568px)" name="viewport" />
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta content="telephone=no" name="format-detection" />
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<!-- #include file="../../inc/AntiAttack.asp" -->
<!-- #include file="../../inc/conn.asp" -->
<!-- #include file="../../inc/mobile_web_config.asp" -->
<!-- #include file="../../inc/html_clear.asp" -->
<%
search_q=request.querystring("q")
%>
<title>������<%=search_q%>_�ƺ�δ��������������޹�˾</title>
<meta name="keywords" content="$Class_Keywords$" />
<meta name="description" content="$Class_Description$" />
<link href="/css/HituxCMSLord/Minner.css" rel="stylesheet" type="text/css" />
<link href="/css/HituxCMSLord/Mcommon.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/Mfunctions.js"></script>
<script type="text/javascript" src="/images/iepng/iepngfix_tilebg.js"></script>
<script type="text/javascript">
window.onerror=function(){return true;}
</script>
</head>

<body>
<%
keywords=split(search_q," ")
c=ubound(keywords)
for i=0 to c
if i=0 then
search_sql1=search_sql1&"where  ( [title] like '%"&keywords(i)&"%'"
keywords_all=keywords(i)
else
search_sql1=search_sql1&" or   [title] like '%"&keywords(i)&"%'"
keywords_all=keywords_all&"+"&keywords(i)
end if
next

s_sql="select [title],[content],[file_path],[time],ArticleType from [article] "&search_sql1&" )  and view_yes=1 order by [time] desc"
%>
<!--head start-->
<div id="head">

<!--top start -->
<div class="top">

<div class="TopLogo">
<div class="logo"><a href="/"><img src="/images/up_images/logo.png" alt="�ƺ�δ��������������޹�˾"></a></div>

<div class="clearfix"></div>
</div>
<div class="clearfix"></div>
</div>
<!--top end-->
<div class="clearfix"></div>
</div>
<!--head end-->
<div id="wrapper">
<!--nav start-->
<div id="NavLink">
<!--Head Menu Start-->
<ul id='sddm'><li class='CurrentLi'><a href='/M/'>��վ��ҳ</a></li> <li><a href='/M/About/'>���ڹ�˾</a></li> <li><a href='/M/Product/'>��˾��Ʒ</a></li> <li><a href='/M/Contact/'>��ϵ����</a></li> </ul>
<!--Head Menu End-->
<div class="clearfix"></div>
</div>
<!--nav end-->
<div class='clearfix'></div>
<!--body start-->
<div id="body">
<div class="HeightTab clearfix"></div>
<!--inner start -->
<div class="inner">

<!--right start-->
<div class="right">
<div class="Position"><span>���λ�ã�<a href="/">��ҳ</a> > ����</span></div>
<div class="HeightTab clearfix"></div>
<!--main start-->
<div class="main">

<!--search content start-->
<div id="search_content" class="clearfix">

<%
if search_q<>"" then 

set rs=server.createobject("adodb.recordset")
rs.open(s_sql),cn,1,1
%>

<%'=============��ҳ���忪ʼ��Ҫ�������ݿ��֮��
if err.number<>0 then '������
response.write "���ݿ����ʧ�ܣ�" & err.description
err.clear
else
if not (rs.eof and rs.bof) then '����¼���Ƿ�Ϊ��
r=cint(rs.RecordCount) '��¼����
rowcount = 10 '����ÿһҳ�����ݼ�¼�����ɸ���ʵ���Զ���
rs.pagesize = rowcount '��ҳ��¼��ÿҳ��ʾ��¼��
maxpagecount=rs.pagecount '��ҳҳ��
page=request.querystring("page")
  if page="" then
  page=1
  end if
rs.absolutepage = page 
rcount1=0
pagestart=page-5
pageend=page+5
if pagestart<1 then
pagestart=1
end if
if pageend>maxpagecount then
pageend=maxpagecount
end if
rcount=rs.RecordCount
'=============��ҳ�������%>

<!--position start-->
<div class="searchtip">������������<span class="FontRed"><%=search_q%></span>��,�ҵ������Ϣ <span class="font_brown"><%=rcount%></span> ��</div>
<!--position end-->
<!--list start-->
<div class="result_list">
<div class="gray">��ʾ���ÿո���������Ѱ�ؼ��ʿɻ�ȡ�����������硰���� ��Ʒ����</div>
<dl>

<%'===========ѭ���忪ʼ
do while not rs.eof and rowcount%>
<%
select case rs("ArticleType")
case 1
Content_FolderName=Article_FolderName
case 2
Content_FolderName=Product_FolderName
case 3
Content_FolderName=Case_FolderName
end select

title1=left(rs("title"),30)
for i=0 to c
title1=Replace(title1, keywords(i), "<span class='FontRed'>" & keywords(i)& "</span>")
next

content1=left(nohtml(rs("content")),110)
for i=0 to c
content1=Replace(content1,keywords(i), "<span class='FontRed'>" & keywords(i)& "</span>")
next
%>
<dt ><a href='<%="/"&Content_FolderName&"/"&rs("file_path")%>' target='_blank' title='<%=rs("title")%>'><%=title1%></a></dt>
<dd><%=content1%>...</dd>
<dd class="font12 arial font_green line"><a href='<%="/"&Content_FolderName&"/"&rs("file_path")%>' target='_blank'><span class="font_green"><%=web_url&"/"&Content_FolderName&"/"&rs("file_path")%></span></a><%=year(rs("time"))%>-<%=month(rs("time"))%>-<%=day(rs("time"))%></dd>
<%
rowcount=rowcount-1 
rs.movenext
loop
 '===========ѭ�������%>

</dl>
</div>
<!--list end-->

<!--page start-->
<div class="result_page clearfix">
<!--#include file="../../inc/page_list.asp"-->
</div>
<!--page end-->

<%
else
response.write "<div class='search_welcome'>�ܱ�Ǹ,û���ҵ��� <span class='FontRed'>"&search_q&"</span> ��ص���Ϣ��<p >��ʾ���ÿո���������Ѱ�ؼ��ʿɻ�ȡ�����������硰���� ��Ʒ����</p></div>"
end if
end if
end if%>
</div>
<!--search content end-->	

</div>
<!--main end-->
</div>
<!--right end-->
</div>
<!--inner end-->
</div>
<!--body end-->
<div class="clearfix"></div>
<!--footer start-->
<div id="footer">

<div class="inner">
<div class='InnerLeft'>
<p><a href="/m/">��վ��ҳ</a> | <a href="/m/About">��������</a> | <a href="/m/Recruit">�˲���Ƹ</a>  | <a href="/m/Sitemap">��վ��ͼ</a></p>
<p>Copyright 2017-2020 �ƺ�δ��������������޹�˾ ��Ȩ���� All Rights Reserved </p>
<p>Built By <a href="http://www.yhocn.cn/" target="_blank">�ƺ�δ��������������޹�˾</a> <a href="http://www.yhocn.cn/" target="_blank">�ƺ�δ��������������޹�˾</a> ����֧�� </p>

</div>


<div class='clearfix'></div>
</div>
</div>
<!--footer end -->


<!--HituxBar start-->
<div class="HituxBar_com_position">
<div class="HituxBar_com_chat wp">
<ul>
<li class='LiIcon1' style='background:url(/images/up_images/m_hitux_icon6.png) no-repeat center 5px;'><a href='/M/'>��ҳ</a></li> <li class='LiIcon2' style='background:url(/images/up_images/m_hitux_icon1.png) no-repeat center 5px;'><a href='tel:400800888'>�绰</a></li> <li class='LiIcon3' style='background:url(/images/up_images/m_hitux_icon2.png) no-repeat center 5px;'><a href='mailto:admin@hitux.com'>�ʼ�</a></li> <li class='LiIcon4' style='background:url(/images/up_images/m_hitux_icon5.png) no-repeat center 5px;'><a href='/M/FeedBack/'>����</a></li> 
</ul>
</div>
<div class='clearfix'></div>
</div>
</div>
<!--HituxBar end-->

</div>


</body>
</html>
<!--
Powered By HituxCMS ASP V2.1 Mobile 
-->
