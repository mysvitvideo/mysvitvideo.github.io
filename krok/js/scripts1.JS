function starts() {
var ul = document.getElementById('main');
for(var i =1; i<=dusciplina.length-1; ++i){
    if(dusciplina[i].name!=null){
var li   = document.createElement('LI');
li.innerHTML = "<a href=\"javascript:ChoosDus(\'"+(i)+"\');\" >"+dusciplina[i].name+"</a>";
ul.appendChild(li);
}
 }
    var $A = function(iterable) {
        if (iterable) {
        var result = [], i = iterable.length;
        while (i) result[--i] = iterable[i];
            return result;
        }
               return [];
           };
        lis = $A(ul.getElementsByTagName('li'));
        lis.sort(function(a, b) {
            a = a.childNodes[0].innerHTML.toLowerCase();
            b = b.childNodes[0].innerHTML.toLowerCase();
            return a < b ? -1 : a > b ? 1 : 0;
        });

        for (var i = 0, length = lis.length; i < length; i++) ul.appendChild(lis[i]);
}

function ChoosDus(m){
    var ul = document.getElementById('main');
    ul.innerHTML="<p><a href='javascript:window.location.reload() '> << </a> "+dusciplina[m].name+"</p>";
    for(var i =1; i<=dusciplina[m].tem.length-1; ++i){
        if(dusciplina[m].tem[i]!=null){
            var li   = document.createElement('LI');
   li.innerHTML = "<a href=\"javascript:NewTest(\'"+m+":"+i+":"+dusciplina[m].tem[i].nos+"\');\" >"+dusciplina[m].tem[i].name+"</a>";
            ul.appendChild(li);
        }
    }


}


function NewTest(m) {
    var d = m.split(":")[0];
    var t = m.split(":")[1];
    var nos = m.split(":")[2];
    var answer = confirm("Бажаєте приступити до тестування \n" + dusciplina[d].tem[t].name);
    if (!answer) {
    } else {
        var texxt = document.all["texxt"].innerHTML;
		// var  myWin = open('');
        var  myWin = open('', 'popup', 'scrollbars=yes ,fullscreen=yes');
//myWin= open('' ,'toolbar = no, location=no, directories = no, menubar = no, scrollbars=no, resizable=no,status=no, fullscreen=yes');
        // открыть объект document для последующей печати
        myWin.document.charset = "windows-1251";
        // генерировать новый документ
        myWin.document.write('<HTML> <HEAD><TITLE>Тестування</TITLE> <meta http-equiv="Content-Type" charset="utf-8">');
        myWin.document.write("  <LINK rel=\"stylesheet\" type=\"text/css\" media=\"screen\" href=\"js/menus.css\">");
        //noinspection JSCheckFunctionSignatures
        myWin.document.write('<SCRIPT SRC="DATA/DUS',d,'/Krok_', t, '/title.JS"></SCRIPT>');

        for (i = 1; i <= nos; i++) {
        myWin.document.write('<SCRIPT SRC="DATA/DUS',d,'/Krok_',t,'/roz_',i,'.JS" ></SCRIPT>');
        }
        myWin.document.write('<SCRIPT>var images="DATA/DUS',d,'/Krok_',t,'/IMAGES"; </SCRIPT>');
        myWin.document.write('<SCRIPT SRC="js/scripts2.JS"></SCRIPT>');
	    myWin.document.write(texxt);
        myWin.document.write("</body></html>");
        myWin.document.character = "windows-1251";
        myWin.document.close();
		myWin.focus();
    }
}



