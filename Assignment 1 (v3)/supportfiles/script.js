//function to change images using buttons
var imgs = document.getElementsByTagName("img");
var curimg = 0;

function imagechange(n) {
   for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
   }
   if(n===1)
   {
      curimg =curimg+1;
      if(curimg>3)
      {
         curimg=0;
      }
     
      imgs[curimg].style.opacity = 1;
     
   }

   else if(n===2)
   {
      curimg =curimg-1;
      if(curimg<0)
      {
         curimg=3;
      }
     
      imgs[curimg].style.opacity = 1;
     
   }
   
}



//function to show demo and change button contents
var j=0;
function showdemo() {
   if(j===0)
   {
      document.getElementById("div3demo").style.display = "block";
      j=j+1;
      document.querySelector(".div3 button").innerHTML = 'Hide';
   }
   else if(j===1)
   {
      document.getElementById("div3demo").style.display = "none";
      j=0;
      document.querySelector(".div3 button").innerHTML = 'Show Demo';
   }
}


//function to make demo button blink
setInterval(buttonblink, 700)
let n = 0;
function buttonblink() {
   if (n === 0) {
      document.querySelector(".div3 button").style.backgroundColor = 'black';
      document.querySelector(".div3 button").style.color = 'yellow';
      document.querySelector(".div3 button").style.borderColor = 'yellow';
      n = n + 1;
   }
   else if (n === 1) {
      document.querySelector(".div3 button").style.backgroundColor = 'yellow';
      document.querySelector(".div3 button").style.color = 'black';
      document.querySelector(".div3 button").style.borderColor = 'black';
      n = 0;
   }

}

//function to add data into table
let k = 4;
function addrow() {
 var Inputs=document.querySelectorAll(".demo input");
 var invest=Inputs[0].value;
 var ROI=Inputs[1].value;
 var Prd=Inputs[2].value;
   if (invest.length === 0 || ROI.length === 0 || Prd.length === 0 || isNaN(invest) || isNaN(ROI) || isNaN(Prd)||invest<0||ROI<0||Prd<0) {
      alert("Incomplete/Invalid data!!!");
   }
   else {
      const table = document.getElementById("table1");
      const row = table.insertRow(k);
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);


      cell1.innerHTML = invest;
      cell2.innerHTML = ROI;
      cell3.innerHTML = Prd;
      var Result = parseFloat((invest)) * (parseFloat(1) + parseFloat(ROI) /parseFloat(100)) ^ parseFloat(Prd);
      cell4.innerHTML = Result;

      Inputs[0].value="";
 Inputs[1].value="";
 Inputs[2].value="";


      k = k + 1;
   }


}

//function to change nav bar color with scroll
window.onscroll=function(){navcolorchange()};

function navcolorchange() {
   if (document.documentElement.scrollTop > 400) {
     document.querySelector(".nav").style.backgroundColor = "darkslategray";
   }
   else if (document.documentElement.scrollTop < 400) {
      document.querySelector(".nav").style.backgroundColor = "black";
    }

 }



