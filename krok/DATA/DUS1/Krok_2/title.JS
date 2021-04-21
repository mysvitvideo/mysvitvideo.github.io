var test_name = "Лікувальний факультет. Ректорський крок №2. Загальна лікарська підготовка";
var ros_name = [];
var kp = [];
var syma;
//~~~~~~~~~~~~~~~~~~~         
 kp[0] = 100;   //Кількість питань в тесті
 
//Розподіл питанать по розділах
var nos = 5; //Кількість розділів
var nosft=new Array();//Кількість питань по розділах 
 nosft[1]=20;
 nosft[2]=20;
 nosft[3]=20;
 nosft[4]=20;
 nosft[5]=20;
 // сума питань по розділах повина бути 100
//~~~~~~~~~~~~~~~~~~~         
// Встановлення початкового положення таймера
 var hh = 01, hh1; // години
 var mm = 40, mm1; // хвилини
 var ss = 00, ss1; // секунди
 var h1, h2, m1, m2, s1, s2;
//~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~         //~~~~~~~~~~~~~~~~~~~         
var  qua = new Array();         qua[0] = new Array();
var ans1 = new Array();        ans1[0] = new Array();
var ans2 = new Array();        ans2[0] = new Array();
var ans3 = new Array();        ans3[0] = new Array();
var ans4 = new Array();        ans4[0] = new Array();
var ans5 = new Array();        ans5[0] = new Array();
var ans6 = new Array();        ans6[0] = new Array();
                              //~~~~~~~~~~~~~~~~~~~ 
for(i = 0; i<=kp[0]; ++i)
  {qua[0][i]="";ans1[0][i]="";ans2[0][i]="";ans3[0][i]="";ans4[0][i]="";ans5[0][i]="";ans6[0][i]="";}
