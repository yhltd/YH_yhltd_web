<!--#include file="../inc/access.asp"  -->
<!-- #include file="inc/functions.asp" -->
<!-- #include file="../inc/x_to_html/index_to_html.asp" -->
<% '�������ݵ����ݱ�
page=request.querystring("page")
act=request.querystring("act")
keywords=request.querystring("keywords")
article_id=cint(request.querystring("id"))


act1=Request("act1")
If act1="save" Then 
l_id=trim(request.form("l_id"))
l_name=trim(request.form("name"))
l_url=trim(request.form("url"))
l_image=trim(request.form("web_image"))
l_memo=trim(request.form("memo"))
l_number=trim(request.form("number"))
l_order=trim(request.form("order"))
l_TopNav=cint(request.form("TopNav"))
l_BottomNav=cint(request.form("BottomNav"))
l_OtherNav=cint(request.form("OtherNav"))


set rs=server.createobject("adodb.recordset")
sql="select * from web_menu_type where id="&l_id&""
rs.open(sql),cn,1,3
rs("name")=l_name
rs("memo")=l_memo
rs("url")=l_url
rs("image")=l_image
'rs("number")=l_number
if l_order<>"" then
rs("order")=l_order
end if
rs("TopNav")=l_TopNav
rs("BottomNav")=l_BottomNav
rs("OtherNav")=l_OtherNav
rs.update
rs.close
set rs=nothing
response.Write "<script language='javascript'>alert('�޸ĳɹ���');location.href='menu_type_list.asp?page="&page&"&act="&act&"&keywords="&keywords&"';</script>"
end if 
 %>
 

	<%
Call header()

%>
<% set rs=server.createobject("adodb.recordset")
sql="select * from web_menu_type where id="&article_id&""
rs.open(sql),cn,1,1
if not rs.eof and not rs.bof then%>
  <form id="form1" name="form1" method="post" action="?act1=save&page=<%=page%>&act=<%=act%>&keywords=<%=keywords%>">
         <script language='javascript'>
function checksignup1() {
if ( document.form1.name.value == '' ) {
window.alert('�������������^_^');
document.form1.name.focus();
return false;}
if(document.form1.number.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("��������ֻ��������^_^");   
document.form1.number.focus();
return false;}

if(document.form1.order.value.search(/^([0-9]*)([.]?)([0-9]*)$/)   ==   -1)   
      {   
  window.alert("����ֻ��������^_^");   
document.form1.order.focus();
return false;}

return true;}
</script>
<script language="JavaScript" type="text/javascript">
  function show(){

var obj = document.getElementById("Category_list");

var index = obj.selectedIndex;

var text =  obj.options[index].text;

var value = obj.options[index].value;

document.form1.name.value=text;
document.form1.url.value=document.form1.Category_list.value;
  }
  </script>
	<table cellpadding='3' cellspacing='1' border='0' class='tableBorder' align=center>
	<tr>
	  <th class='tableHeaderText' colspan=2 height=25>�޸�һ������</th>
	<tr>
	<td width="15%" height=23 class='forumRowHighLight'>�������� (����) </td>
	<td width="85%" class='forumRowHighLight'><input name='name' type='text' id='name'  value="<%=rs("name")%>" size='40'><select  id="Category_list" onChange="show()">
	      <option value="">ѡ����Ŀ���뵼��</option>
<%
set rsl=server.createobject("adodb.recordset")
sql="select [name],[folder],[id],[pid],[ppid] from [category] where ppid=1 order by [order] "
rsl.open(sql),cn,1,1
if not rsl.eof then
do while not rsl.eof
Class_List=Class_List&"<option value='/"&rsl("Folder")&"/'>"&rsl("name")&"</option> "

set rs2=server.createobject("adodb.recordset")
sql="select [id],[name],[folder] from [category] where ppid=2 and pid="&rsl("id")&" "
rs2.open(sql),cn,1,1
if not rs2.eof then
do while not rs2.eof 
Class_List=Class_List&"<option value='/"&rsl("Folder")&"/"&rs2("folder")&"/' >"&rs2("name")&"</option>"
set rs3=server.createobject("adodb.recordset")
sql="select  [name],[folder] from [category] where ppid=3 and pid="&rs2("id")&" "
rs3.open(sql),cn,1,1
if not rs3.eof then
do while not rs3.eof 
Class_List=Class_List&"<option value='/"&rsl("Folder")&"/"&rs2("folder")&"/"&rs3("folder")&"/' >"&rs3("name")&"</option>"
rs3.movenext
loop
end if
rs3.close
set rs3=nothing
rs2.movenext
loop
end if
rs2.close
set rs2=nothing
rsl.movenext
loop
end if
rsl.close
set rsl=nothing
response.write Class_List
%>
</select> ��Ŀ�����ڣ����<a href='category_add.asp?ppid=1'>��������Ŀ</a>
	 <input name='l_id' type='hidden' id='l_id' value="<%=rs("id")%>" size='40'>
	  &nbsp;</td>
	</tr>
	  <tr>
	    <td class='forumRow' height=23>��������</td>
	    <td class='forumRow'><input name='url' type='text' id='url' value="<%=rs("url")%>" size='70'></td>
      </tr>
	  <tr>
	    <td class='forumRowHighLight' height=23>ͼƬ</td>
	    <td width="85%" class='forumRowHighLight'><table width="100%" border="0" cellspacing="0" cellpadding="0">
         <tr>
           <td width="22%" ><input name="web_image" type="text" id="web_image"  value="<%=rs("image")%>" size="30"></td>
           <td width="78%"  ><iframe width="500" name="ad" frameborder=0 height=30 scrolling=no src="upload.asp"></iframe></td>
         </tr>
       </table></td>
      </tr>
	<tr>
	  <td class='forumRowHighLight' height=11>����</td>
	  <td class='forumRowHighLight'><input name='order' type='text' id='order' size='20' maxlength="2" value="<%=rs("order")%>">
ֻ�������֣�����ԽС����Խ��ǰ</td>
	  </tr>
	<tr>

	<tr>
	  <td class='forumRow' height=11>��ע</td>
	  <td class='forumRow'><textarea name='memo'  cols="100" rows="6" id="memo" ><%=rs("memo")%></textarea></td>
	</tr>
	<tr>
	  <td class='forumRowHighLight' height=11>����λ��</td>
	  <td class='forumRowHighLight'><label>
	    <input name="TopNav" type="checkbox" value="1" <%if rs("TopNav")=1 then
		response.write "checked"
		end if%> />
      �������� 
      <input type="checkbox" name="BottomNav" value="1" <%if rs("BottomNav")=1 then
		response.write "checked"
		end if%>/>
      �ײ����� 
      <input type="checkbox" name="OtherNav" value="1" <%if rs("OtherNav")=1 then
		response.write "checked"
		end if%> />
      ��������</label></td>
	  </tr>	
	<tr><td height="50" colspan=2  class='forumRow'><div align="center">
	  <INPUT type=submit value='�ύ' onClick='javascript:return checksignup1()' name=Submit>
	  </div></td></tr>
	</table>
</form>
<%
else
response.write"δ�ҵ�����"
end if%>
<%
Call DbconnEnd()
 %>