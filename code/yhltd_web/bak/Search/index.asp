<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" /><meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<!-- #include file="../inc/AntiAttack.asp" -->
<!-- #include file="../inc/conn.asp" -->
<!-- #include file="../inc/web_config.asp" -->
<!-- #include file="../inc/html_clear.asp" -->
<%
search_q=request.querystring("q")
%>
<title>������<%=search_q%>_�ƺ�δ��������������޹�˾</title>
<meta name="keywords" content="$Class_Keywords$" />
<meta name="description" content="$Class_Description$" />
<link href="/css/HituxCMSLord/inner.css" rel="stylesheet" type="text/css" />
<link href="/css/HituxCMSLord/common.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="/js/jquery.min.js"></script>
<script type="text/javascript" src="/js/Functions.js"></script>
<script type="text/javascript" src="/images/iepng/iepngfix_tilebg.js"></script>
<script type="text/javascript">
window.onerror=function(){return true;}
</script></head>

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
<div id="wrapper">

<!--head start-->
<div id="head">

<div class="TopInfoBG">
<div class="TopInfo">
<div class='welcome'>�ƺ�δ��������������޹�˾</div>
<div class="link"><a onclick="this.style.behavior='url(#default#homepage)';this.setHomePage('http://localhost:8080');" href="#">��Ϊ��ҳ</a> | <a href="javascript:window.external.AddFavorite('http://localhost:8080','�ƺ�δ��������������޹�˾')">�����ղ�</a> | <a href="/Sitemap/">��վ��ͼ</a></div>
</div>
<div class="clearfix"></div>
</div>
<div class="clearfix"></div>
<!--top start -->
<div class="top">

<div class="TopLogo">
<div class="logo"><a href="/"><img src="/images/up_images/logo.png" alt="�ƺ�δ��������������޹�˾"></a></div>
<div class="tel">
<p class="telW">ȫ����������</p>
<p class="telN">16619776280</p>
</div>
</div>

</div>
<!--top end-->

<!--nav start-->
<div id="NavLink">
<div class="NavBG">
<!--Head Menu Start-->
<ul id='sddm'><li class='CurrentLi'><a href='/'>��վ��ҳ</a></li> <li><a href='/About/' onmouseover=mopen('m2') onmouseout='mclosetime()'>���ڹ�˾</a> <div id='m2' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/About/'>��˾����</a> <a href='/Honor/'>��˾����</a> <a href='/About/Group'>��֯����</a> <a href='/About/Culture'>��ҵ�Ļ�</a> <a href='/About/Enviro'>��˾����</a> <a href='/About/Business'>ҵ�����</a> </div></li> <li><a href='/news/' onmouseover=mopen('m3') onmouseout='mclosetime()'>���Ŷ�̬</a> <div id='m3' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/news/CompanyNews'>��˾����</a> <a href='/news/IndustryNews'>��ҵ����</a> </div></li> <li><a href='/Product/' onmouseover=mopen('m4') onmouseout='mclosetime()'>��˾��Ʒ</a> <div id='m4' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/Product/DigitalPlayer'>���벥����</a> <a href='/Product/Pad'>ƽ�����</a> <a href='/Product/GPS'>GPS����</a> <a href='/Product/NoteBook'>�ʼǱ�����</a> <a href='/Product/Mobile'>�����ֻ�</a> </div></li> <li><a href='/Support/' onmouseover=mopen('m5') onmouseout='mclosetime()'>����֧��</a> <div id='m5' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/Support/Services'>�ۺ����</a> <a href='/Support/Download'>��������</a> <a href='/Support/FAQ'>��������</a> </div></li> <li><a href='/Recruit/' onmouseover=mopen('m6') onmouseout='mclosetime()'>�˲���Ƹ</a> <div id='m6' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/recruit/peiyang'>�˲�����</a> <a href='/recruit/fuli'>��������</a> <a href='/recruit/jobs'>��Ƹְλ</a> </div></li> <li><a href='/Case/'>����չʾ</a></li> <li><a href='/contact/' onmouseover=mopen('m8') onmouseout='mclosetime()'>��ϵ����</a> <div id='m8' onmouseover='mcancelclosetime()' onmouseout='mclosetime()'><a href='/Contact/'>��ϵ��ʽ</a> <a href='/Feedback/'>�ÿ�����</a> </div></li> </ul>
<!--Head Menu End-->
</div>
<div class="clearfix"></div>
</div>
<!--nav end-->

</div>
<!--head end-->
<!--body start-->
<div id="body">
<!--focus start-->
<div id="InnerBanner">
<script src='/ADs/106.js' type='text/javascript'></script>
</div>
<!--foncus end-->
<div class="HeightTab clearfix"></div>
<!--inner start -->
<div class="inner">
<!--left start-->
<div class="left">



</div>
<!--left end-->
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
<!--#include file="../inc/page_list.asp"-->
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
<div class="HeightTab clearfix"></div>
	<!-- Dark Footer -->
		<div id="dark_footer_wrap">
			<div id="dark_footer">
            
<div class='box_240px_left'><div class='post'><h2><a href='/About/'>���ڹ�˾</a> </h2> <ul><li><a href='/About/'>��˾����</a></li> <li><a href='/Honor/'>��˾����</a></li> <li><a href='/About/Group'>��֯����</a></li> <li><a href='/About/Culture'>��ҵ�Ļ�</a></li> <li><a href='/About/Enviro'>��˾����</a></li> <li><a href='/About/Business'>ҵ�����</a></li> </ul> </div></div> <div class='box_240px_left'><div class='post'><h2><a href='/news/'>���Ŷ�̬</a> </h2> <ul><li><a href='/news/CompanyNews'>��˾����</a></li> <li><a href='/news/IndustryNews'>��ҵ����</a></li> </ul> </div></div> <div class='box_240px_left'><div class='post'><h2><a href='/Product/'>��˾��Ʒ</a> </h2> <ul><li><a href='/Product/DigitalPlayer'>���벥����</a></li> <li><a href='/Product/Pad'>ƽ�����</a></li> <li><a href='/Product/GPS'>GPS����</a></li> <li><a href='/Product/NoteBook'>�ʼǱ�����</a></li> <li><a href='/Product/Mobile'>�����ֻ�</a></li> </ul> </div></div> <div class='box_240px_left'><div class='post'><h2><a href='/Support/'>����֧��</a> </h2> <ul><li><a href='/Support/Services'>�ۺ����</a></li> <li><a href='/Support/Download'>��������</a></li> <li><a href='/Support/FAQ'>��������</a></li> </ul> </div></div> <div class='box_240px_left'><div class='post'><h2><a href='/Recruit/'>�˲���Ƹ</a> </h2> <ul><li><a href='/recruit/peiyang'>�˲�����</a></li> <li><a href='/recruit/fuli'>��������</a></li> <li><a href='/recruit/jobs'>��Ƹְλ</a></li> </ul> </div></div>  
<div class='HeightTab2 clearfix'></div>
 <!-- Baidu Button BEGIN -->
    <div id="bdshare" class="bdshare_t bds_tools_32 get-codes-bdshare">
        <a class="bds_qzone"></a>
        <a class="bds_tsina"></a>
        <a class="bds_tqq"></a>
        <a class="bds_renren"></a>
        <span class="bds_more">����</span>
		<a class="shareCount"></a>
    </div>
<script type="text/javascript" id="bdshare_js" data="type=tools&amp;uid=501276" ></script>
<script type="text/javascript" id="bdshell_js"></script>
<script type="text/javascript">
	document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + new Date().getHours();
</script>
<!-- Baidu Button END -->             				
<div class='HeightTab clearfix'></div>
			</div>
		</div>
		<!-- // Dark Footer -->
<div class="clearfix"></div>
<!--footer start-->
<div id="footer">

<div class="inner">
<div class='InnerLeft'>
<p><a href="/">��վ��ҳ</a> | <a href="/About/">��������</a> | <a href="/Contact">��ϵ��ʽ</a> | <a href="/Sitemap">��վ��ͼ</a></p>
<p>Copyright   2017-2020 �ƺ�δ��������������޹�˾ www.HituxCMS.com ��Ȩ���� All rights reserved</p>
<p>��ICP��19018259�� <a href="http://www.yhocn.cn/" target="_blank">�ƺ�δ��������������޹�˾</a> ����֧�� <a href="http://www.yhocn.cn/" target="_blank">�ƺ�δ��������������޹�˾</a> <a href="/rss" target="_blank"><img src="/images/rss_icon.gif"></a> <a href="/rss/feed.xml" target="_blank"><img src="/images/xml_icon.gif"></a>
</p>
<script type="text/javascript" src="/js/HituxTop.js"></script>


</div>
<div class='InnerRight'>
<div class="SearchBar">
<form method="get" action="/Search/index.asp">
				<input type="text" name="q" id="search-text" size="15" onBlur="if(this.value=='') this.value='����ؼ���';" 
onfocus="if(this.value=='����ؼ���') this.value='';" value="����ؼ���" /><input type="submit" id="search-submit" value=" " />
			</form>
</div>
</div>
<div class='clearfix'></div>
</div>

</div>
<!--footer end -->


</div>
<script type="text/javascript" src="/js/ServiceCenter.js"></script>

</body>
</html>
<!--
Powered By HituxCMS ASP V2.1 Mobile 
-->

