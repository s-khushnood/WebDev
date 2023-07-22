var imgs=document.getElementsByTagName("img");
var dots=document.getElementsByClassName("dot");
var curimg=0;
var interval=2000;
var timer=setInterval(dotchange,interval)

function dotchange(n){
   for (var i=0;i<imgs.length;i++)
   {
      imgs[i].style.opacity=0;
   }
   
   curimg=(curimg+1)%imgs.length;
   // if(n!=undefined)
   // {clearInterval(timer);
   // timer=setInterval(dotchange,interval)
   // curimg=n;
   // }
   imgs[curimg].style.opacity=1;
}







function services(){
    document.getElementById("introduction").style.display="none";
    document.getElementById("service").style.display="block";
 }

 function table(){
    document.getElementById("mytable").style.display="block";
 }

