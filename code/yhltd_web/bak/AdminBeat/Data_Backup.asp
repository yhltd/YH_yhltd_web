<!--#include file="../inc/access.asp"  -->
<!-- #include file="inc/functions.asp" -->
<!-- #include file="../inc/x_to_html/index_to_html.asp" -->
<% '�������ݵ����ݱ�
act=Request("act")
If act="save" Then 
NewData=replace(LCase(request("NewData")),".asp",".mdb")
if NewData=request("OldData") then
response.Write "<script language='javascript'>alert('�µ����ݿ����Ʋ�������ԭʼ���ݿ������ظ���');history.go(-1);</script>"
response.end
else
Set  fso=CreateObject("Scripting.FileSystemObject")  
filesource=server.MapPath(DataFolder&"/"&request("OldData"))
fileto=server.MapPath(DataFolder&"/"&NewData)
if fso.fileexists(filesource) then

set rs=server.createobject("adodb.recordset")
sql="select * from web_data where dataname='"&NewData&"' "
rs.open(sql),cn,1,3
if not rs.eof then
rs("memo")=request("memo")
rs("time")=now()
rs.update
else
rs.addnew
rs("dataname")=NewData
rs("memo")=request("memo")
rs("time")=now()
end if
rs.update
rs.close
set rs=nothing

fso.copyfile filesource,fileto,true

else
response.Write "<script language='javascript'>alert('�Ҳ�����Ҫ���ݵ�ԭʼ���ݿ⣡');history.go(-1);</script>"
end if
set fso = nothing

response.Write "<script language='javascript'>alert('���ݳɹ���');location.href='Data_list.asp';</script>"

end if
end if
 %>
 

	<%
Call header()

%>

  <form id="form1" name="form1" method="post" action="?act=save">
         <script language='javascript'>
function checksignup1() {
if ( document.form1.OldData.value == '' ) {
window.alert('������ԭʼ���ݿ�����^_^');
document.form1.OldData.focus();
return false;}

if ( document.form1.NewData.value == '' ) {
window.alert('�����뱸�����ݿ�����^_^');
document.form1.NewData.focus();
return false;}

return true;}
</script>
	<table cellpadding='3' cellspacing='1' border='0' class='tableBorder' align=center>

	<tr>
	  <th class='tableHeaderText' colspan=2 height=25>�������ݿ�</th>
	<tr>
	<tr>
	  <td height=23 colspan="2" class='forumRow'><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td height="20" class='TipTitle'>&nbsp;�� ������ʾ</td>
        </tr>
        <tr>
          <td height="30" valign="top" class="TipWords">
            <p>1�����龭������������ݿ����ļ��м����ݿ����ƣ��Ա�֤���ݰ�ȫ��</p>
            <p>2�����龭������������ݿ⣬ȷ��������ݲ��ᶪʧ��</p>
            <p>3��������ݿ���󣬿��ܻ�ķѹ���ʱ�䱸�ݣ��������ĵȴ�����Ҫ��ε���ύ��</p>
            </td>
        </tr>
        <tr>
          <td height="10">&nbsp;</td>
        </tr>
      </table></td>
	  </tr>
	<td width="15%" height=23 class='forumRow'>ԭʼ���ݿ�����</td>
	<td class='forumRow'><input name='OldData' type='text' id='OldData' size='40'  style="color:#666666" value="<%=DataName%>" readonly>
	  &nbsp;�����޸�</td>
	</tr>
	  <tr>
	    <td class='forumRowHighLight' height=23>�������ݿ�����</td>
	    <td class='forumRowHighLight'><input name='NewData' type='text' id='NewData' value="<%=Replace(DataName,".mdb","")&"_"&Date()&".mdb"%>" size='40'>
        &nbsp;Ĭ��ʹ��ԭʼ���Ƽ����ڵ�������ʽ�������޸ĳ��������ơ�</td>
      </tr>
<tr>
	  <td class='forumRow' height=11>��ע</td>
	  <td class='forumRow'><textarea name='memo'  cols="100" rows="6" id="memo" ></textarea></td>
	</tr>
	<tr><td height="50" colspan=2  class='forumRow'><div align="center">
	  <INPUT type=submit value='�ύ' onClick='javascript:return checksignup1()' name=Submit>
	  </div></td></tr>
	</table>
</form>

<%
Call DbconnEnd()
 %>