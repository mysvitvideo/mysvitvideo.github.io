var kv = new Array();
var pv = new Array(); 
var variant_v = new Array();
 variant_v[0]=[];
 variant_v[1]=[]; //назва розділу з якого задають питання
 variant_v[2]=[]; //Номер питання в даному розділі
var Nomer_q = new Array();
var k_pr=new Array();
k_pr[0]=0;
var Nom_q = 0;
var intervalID, i, j, Name,Grup, a,errrorr, dozvil;
var bgr='';
var dd='';
errrorr='';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function UkrLat(str) {
	//str = str.toLowerCase(); // все в нижний регистр
		var cyr2latChars = new Array(
		['а', 'a'], ['б', 'b'], ['в', 'v'], ['г', 'h'], ['ґ', 'g'], ['д', 'd'], ['е', 'e'],
		['є', 'ye'],['ж', 'zh'],['з', 'z'],	['и', 'y'],	['і', 'i'],	['ї', 'yi'],['й', 'y '],
		['к', 'k'],	['л', 'l'],	['м', 'm'], ['н', 'n'],	['о', 'o'],	['п', 'p'],	['р', 'r'],	
		['с', 's'],	['т', 't'],	['у', 'u'],	['ф', 'f'],	['х', 'kh'],['ц', 'ts'],['ч', 'ch'],
		['ш', 'sh'],['щ', 'shch'],['ь', ''],['ю', 'yu'],['я', 'ya'],['ы', 'y'],	
		['A', 'A'], ['Б', 'B'], ['В', 'V'], ['Г', 'H'],['Ґ', 'G'],['Д', 'D'],['Е', 'E'],
		['Є', 'YE'],['Ж', 'ZH'],['З', 'Z'], ['И', 'Y'],['І', 'I'],['Ї', 'YI'],['Й', 'Y '],
		['К', 'K'],['Л', 'L'],	['М', 'M'], ['Н', 'N'],['О', 'O'],['П', 'P'],['Р', 'R'],	
		['С', 'S'],	['Т', 'T'],	['У', 'U'],	['Ф', 'F'],['Х', 'KH'],['Ц', 'TS'],['Ч', 'CH'],
		['Ш', 'SH'],['Щ', 'SHCH'],['Ь', ''],['Ю', 'YU'],['Я', 'YA'],
		['a', 'a'],['b', 'b'], ['c', 'c'], ['d', 'd'], ['e', 'e'],
		['f', 'f'],['g', 'g'], ['h', 'h'], ['i', 'i'], ['j', 'j'],
		['k', 'k'],['l', 'l'], ['m', 'm'], ['n', 'n'], ['o', 'o'],
		['p', 'p'],['q', 'q'], ['r', 'r'], ['s', 's'], ['t', 't'],
		['u', 'u'],['v', 'v'], ['w', 'w'], ['x', 'x'], ['y', 'y'],
		['z', 'z'],['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'],['E', 'E'],
		['F', 'F'],['G', 'G'],['H', 'H'],  ['I', 'I'],['J', 'J'],['K', 'K'],
		['L', 'L'],['M', 'M'], ['N', 'N'], ['O', 'O'],['P', 'P'],
		['Q', 'Q'],['R', 'R'],['S', 'S'],  ['T', 'T'],['U', 'U'],['V', 'V'],
		['W', 'W'],['X', 'X'], ['Y', 'Y'], ['Z', 'Z'],
		[' ', ' '],['.', '.'],[',', ','], ['-', '-']
    );

    var newStr = new String();
    for (var i = 0; i < str.length; i++) {
        ch = str.charAt(i);
        var newCh = '';

        for (var j = 0; j < cyr2latChars.length; j++) {
            if (ch == cyr2latChars[j][0]) {
                newCh = cyr2latChars[j][1];
            }
        }
        newStr += newCh;
    }
    return( newStr.replace(/[_]{2,}/gim, ' ').replace(/\n/gim, ''));
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  
function identifik(){
Name=document.all["name"].value;
Grup = document.all["grup"].value;
dozvil=true;
if ((Name == null)||(Name == '')||(Grup == null)||(Grup == '')||(Name.length <5)||(Grup.length >5)||(/[^А-яІіЄєЇїA-z\.\-\s, ]/.test(Name))||((/[^0-9\*А-яA-z\+\- ]/.test(Grup)))){
alert(" Некоректне введення даних! / Incorrect input data!");
}else{
	//Name=UkrLat(Name);
dozvil=true;
alert('Успішного тестування');
document.all["induf"].style.display='none';
document.all["test"].style.display='block';
rnd_q();
rnd();

var d=new Date();
time_start=d.toLocaleTimeString();
//Запуск таймера
intervalID = setInterval (puttime, 1000);
//~~~~~~~~~~~~~~~~~~~
inner();
}}

function inner() {
var syma=0;
for(i=1;i<nosft.length;i++){
syma=syma+nosft[i];
}
if(syma!=kp[0]){dozvil=true; alert("неправильний розподіл питань по розділам "+syma+" "+kp[0])}
document.all["tema"].innerHTML= test_name;
document.all["qu"].innerHTML=qua[0][Nom_q];
if ((ans1[0][Nom_q] != "")&&(typeof ans1[0][Nom_q]!='undefined'))
{
document.all["an_a"].innerHTML=ans1[0][Nom_q];
document.all["line_a"].innerHTML = '<IMG SRC="IMG/an1_03.gif"   >';
}  
if ((ans2[0][Nom_q] != "")&&(typeof ans2[0][Nom_q]!='undefined'))
{
document.all["an_b"].innerHTML=ans2[0][Nom_q];
document.all["line_b"].innerHTML = '<IMG SRC="IMG/an2_03.gif"   >';
}  
if ((ans3[0][Nom_q] != "")&&(typeof ans3[0][Nom_q]!='undefined'))
{
document.all["an_c"].innerHTML=ans3[0][Nom_q];
document.all["line_c"].innerHTML = '<IMG SRC="IMG/an3_03.gif"   >';
}   else {
document.all["line_c"].innerHTML ="";
document.all["an_c"].innerHTML="";
}
if ((ans4[0][Nom_q] != "")&&(typeof ans4[0][Nom_q]!='undefined')) 
{
document.all["an_d"].innerHTML=ans4[0][Nom_q];
document.all["line_d"].innerHTML = '<IMG SRC="IMG/an4_03.gif"  >';
}   else {
document.all["line_d"].innerHTML ="";
document.all["an_d"].innerHTML="";
}
if ((ans5[0][Nom_q] != "")&&(typeof ans5[0][Nom_q]!='undefined'))
{
document.all["an_e"].innerHTML=ans5[0][Nom_q];
document.all["line_e"].innerHTML = '<IMG SRC="IMG/an5_03.gif" >';
}   else {
document.all["line_e"].innerHTML ="";
document.all["an_e"].innerHTML="";}
if ((ans6[0][Nom_q] != "")&&(typeof ans6[0][Nom_q]!='undefined'))
{
document.all["an_f"].innerHTML=ans6[0][Nom_q];
document.all["line_f"].innerHTML = '<IMG SRC="IMG/an6_03.gif"  >';
}   else {document.all["line_f"].innerHTML ="";
document.all["an_f"].innerHTML="";
}

    show_img(images) //каталог в якому знаходиться малюнки



}

function show_img(ob){
var imag1=document.getElementsByTagName("img");
var news=location.href;
var news1=news.split("/");
news=news.replace(news1[news1.length-1],""); 
for(r=0;r<imag1.length;r++){
if(imag1[r].parentNode.id.substring(0,3)!="lin" )
imag1[r].src=imag1[r].src.replace(news,ob+"/");

}}



function color_new(evt){
  var evt = evt || window.event; 
  var x = evt.target || evt.srcElement;   

  var tag = x.tagName; 

if ((tag == "TD") && (x.innerHTML != "") && (x.id != "qu"))
{
if (x.id) {
document.all(x.id).bgColor = "ffff70";

}
}
}

function color_back(evt){
var tag;
  var evt = evt || window.event; // получаем истинный event
  var x = evt.target || evt.srcElement;   // получаем истинный элемент
tag = x.tagName; 
if (tag == "TD")
{
if (x.id) {
document.all(x.id).bgColor = "";
}
}
}

function table_cl(evt)
{
  var evt = evt || window.event; // получаем истинный event
  var x = evt.target || evt.srcElement;   // получаем истинный элемент
  var tag =x.tagName
if (( tag == "TD")&&(x.id) &&(x.id != "var_v") &&(x.id != "qu") && (x.id != "line_qu") )
{
a=x.id;
variant_v[0][Nom_q] =a.substring(a.length-1,a.length); 
document.all["var_v"].innerHTML = a.substring(a.length-1,a.length);

}
var tu=x.parentNode.id;
if((tu.substring(0,3)=="an_") || (tu.substring(0,3)=="lin" ) && (tu != "line_qu")){
variant_v[0][Nom_q] =tu.substring(tu.length-1,tu.length);
document.all["var_v"].innerHTML = tu.substring(tu.length-1,tu.length);
}
var tu2=x.parentNode.parentNode.id;
if(tu2.substring(0,3)=="an_"){
variant_v[0][Nom_q] =tu2.substring(3,4);
document.all["var_v"].innerHTML = tu2.substring(3,4);

}

}

function next(){
++Nom_q;
if (Nom_q > kp[0]-1)
{
--Nom_q;
dozvil=true;
alert("Ви дали вiдповiдь на останнє запитання. Клацнiть на ПОПЕРЕДНЄ ПИТАННЯ або ЗАВЕРШИТИ ТЕСТУВАННЯ");
//document.all["test_end"].style.display="block";
return;
}
document.all["an_a"].innerHTML="";
document.all["an_b"].innerHTML="";
document.all["an_c"].innerHTML="";
document.all["an_d"].innerHTML="";
document.all["an_e"].innerHTML="";
document.all["an_f"].innerHTML="";
document.all["var_v"].innerHTML = variant_v[0][Nom_q];
inner();
}

function pred(){
--Nom_q;
if (Nom_q < 0)
{
Nom_q=0;
dozvil=true;
alert("Це перше запитання, натиснiть НАСТУПНЕ ПИТАННЯ або ЗАВЕРШИТИ ТЕСТУВАННЯ");
return;
}
document.all["an_a"].innerHTML="";
document.all["an_b"].innerHTML="";
document.all["an_c"].innerHTML="";
document.all["an_d"].innerHTML="";
document.all["an_e"].innerHTML="";
document.all["an_f"].innerHTML="";
document.all["var_v"].innerHTML = variant_v[0][Nom_q];
inner();
}

function rnd_q(){
var vv, tmp; 
var gip=1;

for(i=1;i<nosft.length;i++){
    Nomer_q[i]=new Array();
  for(j=0;j<kp[i];j++){  Nomer_q[i][j]=j  }
  }
 
for(i=1;i<nosft.length;i++){
  
  for(j=0;j<kp[i];j++){
  vv = Math.floor(Math.random()*(kp[i]))
  
  tmp = Nomer_q[i][j];
Nomer_q[i][j] = Nomer_q[i][vv];
Nomer_q[i][vv] = tmp;
  }
  }


var noq=-1
for(i =0; i<kp[0]; ++i){
 noq=noq+1
 if(noq>=nosft[gip]){gip=gip+1;noq=0}
 qua[0][i]= qua[gip][Nomer_q[gip][noq]].substring(2,qua[gip][Nomer_q[gip][noq]].length)
tmp =(qua[gip][Nomer_q[gip][noq]]).substring(0,1);
ans1[0][i]=ans1[gip][Nomer_q[gip][noq]];
ans2[0][i]=ans2[gip][Nomer_q[gip][noq]];
ans3[0][i]=ans3[gip][Nomer_q[gip][noq]];
ans4[0][i]=ans4[gip][Nomer_q[gip][noq]];
ans5[0][i]=ans5[gip][Nomer_q[gip][noq]];
ans6[0][i]=ans6[gip][Nomer_q[gip][noq]];
variant_v[0][i] = "Ви ще не вiдповiли на це питання";
variant_v[1][i]= ros_name[gip];
variant_v[2][i]= Nomer_q[gip][noq];
kv[i] = tmp;
k_pr[gip]=0;
}
}


function rnd(){
var tmp;

for(i =0; i<kp[0]; ++i){
tmp = ans1[0][i];

var vv = Math.round(Math.random()*(kv[i]-1));
pv[i]="a";

}

}
function puttime(){
if ((hh == 0) && (mm == 0) && (ss < 0) )
{
	dozvil=true;
alert("Час вичерпано!");
testend();
clearInterval(intervalID);
//return false;
}else{

if (ss <0)
{
ss =59;
--mm;
} 

if (mm <0)
{
mm = 59;
--hh;
}

if (hh<10)
{
  h2 = hh;
  h1 = "0";
  hh = "0"+hh;
}
  else
   {
   hh1 = hh.toString();
   h1 = hh1.substring(0,1);
   h2 = hh1.substring(1,2);
   }

if (mm<10)
{
  m2 = mm;
  m1 = "0";
  mm = "0"+mm;
}
  else
   {
   mm1 = mm.toString();
   m1 = mm1.substring(0,1);
   m2 = mm1.substring(1,2);
   
   }
if (ss<10)
{
  s1 = "0";
  s2 = ss;
  ss = "0"+ss;
}
  else
    {
     ss1 = ss.toString();
     s1 = ss1.substring(0,1);
     s2 = ss1.substring(1,2);	
	}

++mm; --mm;
++ss; --ss;
++hh; --hh;

--ss;
document.all["timelimit"].innerHTML = h1+h2+" : "+m1+m2+" : "+s1+s2;
document.all["kp"].innerHTML = Nom_q+1;
document.all["vskp"].innerHTML = kp[0];
}}

function db_table_cl(){
table_cl();
next();
}
function menu(){
	dozvil=true;
//alert("Ой ... Нема у Вас меню");
event.returnValue = false;
}

function testend(){
clearInterval(intervalID);
var hh=1;
var end="@";
var d = new Date();
var time_end=d.toLocaleTimeString();

window.document.write('<HTML><HEAD><TITLE>Результат</TITLE><META http-equiv="Content-Type" charset="WINDOWS-1251"></HEAD><LINK rel="stylesheet" type="text/css" media="screen" href="js/menus.css"><SCRIPT SRC="js/2.JS"></SCRIPT><script>var kim="',images,'";');
window.document.write('function show_rez(){var raz = document.getElementById("raz"); ');
window.document.write('if(raz.checked==true){ document.getElementById("rez2").style.display="block"; document.getElementById("rez1").style.display="none";}');
window.document.write('if(raz.checked!=true){ document.getElementById("rez1").style.display="block"; document.getElementById("rez2").style.display="none"; document.getElementById("rez3").style.display="none"; document.getElementById("raz_all").checked=false;}}');
window.document.write('function eee(){line_jor.src = "favicon.ico";show_img(kim);}');
window.document.write('function clear(){setTimeout("eee()", 1000)}');
window.document.write('function show_rez_all(){if(document.getElementById("raz_pas").value==""){');
window.document.write('var raz_all = document.getElementById("raz_all");');
window.document.write('if(raz_all.checked==true){ document.getElementById("rez3").style.display="block"; }');
window.document.write('if(raz_all.checked!=true){  document.getElementById("rez3").style.display="none";}}}');


noq=-1;
gip=1;
for(i =0; i<kp[0]; ++i)
{ noq=noq+1
 if(noq>=nosft[gip]){ gip=gip+1; noq=0; }
 if (variant_v[0][i]== pv[i]){   k_pr[gip]++;}
  }
for(i =1; i<nosft.length; ++i){
k_pr[0]=k_pr[0]+k_pr[i]; 
}


document.write(' </script> <BODY bgcolor="ffffff" onload="javascript:clear()">');
document.write('<center><H2> ',test_name,' <BR><BR>Тестування: ЗАВЕРШЕНО! <BR><BR>Тестувався <b STYLE="font: 18pt; color: red">',errrorr,Name,'</b><br> Група: <b STYLE="font: 18pt; color: red">',Grup,'</b> </H3> <H4 ><div id="di"> <input type="checkbox" id="raz" onClick="javascript:show_rez()"><label for="raz">Детальний результат</label></h4>');

var koef = Math.round(100*k_pr[0]/kp[0]);

window.document.write('<hr><div id="rez1"><H2 STYLE="font: 16pt; color: green">Ви вiдповiли правильно на таку кiлькiсть питань<H2 STYLE="font: 16pt; color: red"> ',k_pr[0],'<H2 STYLE="font: 16pt; color: green"> iз <H3 STYLE="font: 16pt; color: red">',kp[0],'</H3><H2 STYLE="font: 16pt; color: green"> заданих<BR> <BR>Рівень знань: <H1 STYLE="font: 22pt; color: red"> ',koef,'%</H1></center></div>');
window.document.write('<div id="rez2"><center><Table border=1 STYLE="font: 12pt;" width="63%"><TR STYLE=" color: green"><td>№</td><td width="47%">Назва розділу</td><td width="16%">Кількість питань у розділі</td><td width="20%">Кількість правильних відповідей</td><td width="14%">Рівень знань по розділу</td></tr>');

for(i =1; i<nosft.length; ++i){
window.document.write('<TR><td>',i,'</td><td>',ros_name[i],'</td><td>',nosft[i],'</td><td>',k_pr[i],'</td><td>',(100*k_pr[i]/nosft[i]).toFixed(1),'%</td></tr>')
end=end+i+":"+k_pr[i]+":"+nosft[i]+"@";
}
window.document.write('<TR STYLE=" color: green"><td colspan="3">Загальна кількість правильних відповідей</td><td STYLE=" color: red">',k_pr[0],'</td><td>-</td></tr>')
window.document.write('<TR STYLE="font: 16pt; color: green"><td colspan="4">Рівень знань</td><td STYLE=" color: red">',koef,'%</td></tr>')
window.document.write('</table></center><div id="di"> <input id="raz_pas" type="password" size="1" border=0><input type="checkbox" id="raz_all" onClick="javascript:show_rez_all()"><label for="raz_all">Розгорнутий варіат</label></div></div>');


var str= images.split("/")[1].substr(3) + "|" + images.split("/")[2].substr(5);
var jor_row=str+"|"+errrorr+Name+"|"+Grup+"|"+end+"|"+k_pr[0]+":"+kp[0]+"|"+time_start+"|"+time_end+"|"+d.getDate()+"/"+(d.getMonth()-0+1)+"/"+d.getFullYear();

window.document.write('<hr>');
window.document.write('<div id="rez3"><center><Table border=1  width="97%"><TR  style="font-size: 19pt;"><td width="1%">№</td><td width="5%">Назва розділу</td><td width="6%">Номер розділу, номер питання</td><td>Питання</td><td width="15%">Привильна відповідь</td><td width="15%">Ваша відповідь</td></tr>');
//jor.src = "jor.php?d="+jor_row;

var noq=-1;
var gip=1;

for(i =0; i<kp[0]; ++i)
{ noq=noq+1
 if(noq>=nosft[gip]){ gip=gip+1; noq=0; }
 if (variant_v[0][i]== pv[i]){ text_td ="<td>"+ans1[gip][variant_v[2][i]]+"</td>"}
 else{
 text_td="<td STYLE=\" color: red\">"+variant_v[0][i]+"</td>";
 if (variant_v[0][i]=="b"){text_td="<td STYLE=\" color: red\">"+ans2[gip][variant_v[2][i]]+"</td>";}
 if (variant_v[0][i]=="c"){text_td="<td STYLE=\" color: red\">"+ans3[gip][variant_v[2][i]]+"</td>";}
 if (variant_v[0][i]=="d"){text_td="<td STYLE=\" color: red\">"+ans4[gip][variant_v[2][i]]+"</td>";}
 if (variant_v[0][i]=="e"){text_td="<td STYLE=\" color: red\">"+ans5[gip][variant_v[2][i]]+"</td>";}
 if (variant_v[0][i]=="f"){text_td="<td STYLE=\" color: red\">"+ans6[gip][variant_v[2][i]]+"</td>";}
 if (variant_v[0][i]=="a"){
		if (pv[i]=="b") text_td="<td STYLE=\" color: red\">"+ans2[gip][variant_v[2][i]]+"</td>";
		if (pv[i]=="c") text_td="<td STYLE=\" color: red\">"+ans3[gip][variant_v[2][i]]+"</td>";
		if (pv[i]=="d") text_td="<td STYLE=\" color: red\">"+ans4[gip][variant_v[2][i]]+"</td>";
		if (pv[i]=="e") text_td="<td STYLE=\" color: red\">"+ans5[gip][variant_v[2][i]]+"</td>";
		if (pv[i]=="f") text_td="<td STYLE=\" color: red\">"+ans6[gip][variant_v[2][i]]+"</td>";
 }
 }
  
 window.document.write('<TR  ><td>',i+1,'</td><td>',variant_v[1][i],'</td><td>Р-№',gip,'<br> П-№',variant_v[2][i],' </td> <td> ',qua[0][i],'</td><td>',ans1[gip][variant_v[2][i]],' </td>',text_td,'</tr>'); 
  
  }

//show_img(images);
window.document.write('<img id="line_jor"  width="1" height="1">');
window.document.write('</table></center></div><div id="up"></div></body></html>');
window.document.close();
//document.getElementById('line_jor').src = "jor.php?d="+jor_row;

}




function onblur_win(){
	if (!dozvil){alert( 'Тестування завершено!\n Ви вийшли з вікна тестування!' );
	errrorr="!! ";
	testend();}
	if (dozvil){dozvil=false;}
}
