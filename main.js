"use strict";

// {
//     const hamburger = document.querySelector(".hamburger");
//     const nav = document.querySelector(".nav");

//     hamburger.addEventListener("click", () => {
//         hamburger.classList.toggle("open");
//         nav.classList.toggle("open");
//     });
// }

var carousel = $(".carousel"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);

function rotate(e){
  if(e.data.d=="n"){
    currdeg = currdeg - 60;
  }
  if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}




var open = false;

function Drop(n) {
  var i;
  if (open == false) {
    for (i = n; i < 5; i++) {
      Drp(i)
    }
    open = true
  } else if (open == true) {
    for (i = n; i < 5; i++) {
      Cls(i)
    }
    open = false
  }
}

function Drp(n) {
  var elem = document.getElementsByClassName("menu-con")[n];
  var pos = -1 * window.innerHeight - n * 100;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.top = 0 + 'px';
    } else {
      pos += 10;
      elem.style.top = pos + 'px';
    }
  }
}

var open = false;

function Drop(n) {
  var i;
  if (open == false) {
    for (i = n; i < 5; i++) {
      Drp(i)
    }
    open = true
  } else if (open == true) {
    for (i = n; i < 5; i++) {
      Cls(i)
    }
    open = false
  }
}

function Drp(n) {
  var elem = document.getElementsByClassName("menu-con")[n];
  var pos = -1 * window.innerHeight - n * 100;
  var id = setInterval(frame, 5);

  function frame() {
    if (pos >= -10) {
      clearInterval(id);
      elem.style.top = 0 + 'px';
    } else {
      pos += 10;
      elem.style.top = pos + 'px';
    }
  }
}

function Cls(n) {
  var elems = document.getElementsByClassName("menu-con")[n];
  var poss = 0;
  var ids = setInterval(frames, 5);

  function frames() {
    if (poss <= -1 * window.innerHeight) {
      clearInterval(ids);
      elems.style.top = -1 * window.innerHeight + 'px';
    } else {
      poss += -7 - n * 2;
      elems.style.top = poss + 'px';
    }
  }
}