
var imgs = document.getElementsByTagName("img");
var curimg = 0;

function dotchange(n) {
   for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.opacity = 0;
   }
   curimg = n;
   imgs[curimg].style.opacity = 1;
}

function showdemo() {
   document.getElementById("div3demo").style.display = "block";
}

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

let k = 4;
function addrow() {
   var invest = prompt("Enter Your Investment", "$$$$$");
   var ROI = prompt("Enter Your Interest Rate", "%%%");
   var Prd = prompt("Investment Period", "Years");
   if (invest.length === 0 || ROI.length === 0 || Prd.length === 0 || isNaN(invest) || isNaN(ROI) || isNaN(Prd)) {
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

      k = k + 1;
   }


}



