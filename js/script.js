
var btn = document.getElementsByClassName("btn-calc"),
    screen = document.querySelector(".screen"),
    myCalc = "0";


for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function () {
     var btnValue = this.innerHTML;

     // replacement of 0 if first simbol is a number
    if (myCalc == "0" && btnValue.search(/\d/) === 0) {
      myCalc = btnValue;

      // checking for double dots
    } else if (myCalc.match( /\.\d+$/ ) !== null && btnValue.match(/\./) !== null) {
      myCalc = myCalc.substring(0, myCalc.length);

      // checking for double simbols
    } else if (myCalc.match( /[%\.\+\-\/\*]$/ ) && btnValue.match(/[%\.\+\-\/\*]/)) {
      myCalc = myCalc.substring(0, myCalc.length);
    } else {
      myCalc += btnValue;
     }

      // AC and CE btn actions
     if (btnValue == "ac") {
      myCalc = "0"
    } else if (btnValue == "ce") {
      myCalc = myCalc.substring(0, myCalc.length - 3);
    };
      screen.innerHTML = myCalc;

      // checking if last simbols is a number befor getting answer
     if (btnValue == "=" && myCalc.match(/\d$/) === null) {
       while (myCalc.match(/\d$/) == null || myCalc.length === 0) {
        myCalc = myCalc.substring(0, myCalc.length - 1);
       }
       screen.innerHTML = Math.round(eval(myCalc)*1000000)/1000000;
       myCalc = screen.innerHTML;

      } else if (btnValue == "=" && myCalc.match(/\d$/) !== null){
       screen.innerHTML = Math.round(eval(myCalc)*1000000)/1000000;
       myCalc = screen.innerHTML;
     };

     // checking length of a string
     if (myCalc.length > 20) {
       screen.innerHTML = "Digit limit exceeded";
        myCalc = "0";
     } ;

  });
}

  /* Matrix btn actions*/

var btnMatrix = document.getElementsByClassName("btn-matrix")
    gate = document.getElementsByClassName("gate"),
    question = document.getElementsByClassName("question"),
    video = document.querySelector(".video");

for (var i = 0; i < btnMatrix.length; i++) {
  btnMatrix[i].addEventListener("click", function () {

     var btnMatrixValue = this.innerHTML;

     gate[0].classList.add("move");
     gate[1].classList.add("move");
     question[0].classList.add("invisible");

     if (btnMatrixValue == "Yes") {
       video.classList.add("invisible");
     }
  });
}

  /* Close Btn */
var closeBtn = document.getElementById("btn-close");

closeBtn.addEventListener("click", function () {
     gate[0].classList.remove("move");
     gate[1].classList.remove("move");

     setTimeout(function () {
        question[0].classList.remove("invisible");
        video.classList.remove("invisible");
     }, 1500);

});

