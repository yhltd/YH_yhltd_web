<!-- #include file="../../inc/access.asp" -->

<%'�ݴ���
function Mobile_to_js()
On Error Resume Next
%>
<%
'��ȡ�滻
set rs=server.createobject("adodb.recordset")
sql="select web_Folder,web_show from mobile_web_settings"
rs.open(sql),cn,1,1
if not rs.eof  then
web_Folder=rs("web_folder")
web_ShowYes=rs("web_show")
end if
rs.close
set rs=nothing
%>
<% '��ȡģ������
Set fso=Server.CreateObject("Scripting.FileSystemObject") 
Set htmlwrite=fso.OpenTextFile(Server.MapPath("/js/Functions.js")) 
replace_code=htmlwrite.ReadAll() 
htmlwrite.close 
%>

<%
replace_code=replace(replace_code,"/"&OldFolder&"/","/"&web_Folder&"/")
if web_ShowYes=1 then
replace_code=replace(replace_code,"replace(murl)","replace(NoUrl)")
else
replace_code=replace(replace_code,"replace(NoUrl)","replace(murl)")
end if
%>
<% '�ж�ADs�ļ����Ƿ���ڣ����򴴽�
Set Fso=Server.CreateObject("Scripting.FileSystemObject") 
If Fso.FolderExists(Server.MapPath("/js"))=false Then
NewFolderDir="/js"
call CreateFolderB(NewFolderDir)
end if
%>

<%'����HTML�ļ���,ָ���ļ�·��
filepath="/js/Functions.js"
%>

<%
 '��ȡģ��
Set fout = fso.CreateTextFile(Server.MapPath(filepath))
fout.WriteLine replace_code
fout.close
fso.close
set fso=nothing
%>

<%end function
%>