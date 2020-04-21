var start_button = document.getElementById("start_button");
var playscreen = document.getElementById("playscreen");
var status = 0;
var bead7 = document.getElementById("bead7")
var bead6 = document.getElementById("bead6")
var bead5 = document.getElementById("bead5")
var bead4 = document.getElementById("bead4")
var bead3 = document.getElementById("bead3")
var bead2 = document.getElementById("bead2")
var bead1 = document.getElementById("bead1")
var bead0 = document.getElementById("bead0")

function start() {
    status = 1;
    var t = setInterval(open, 50);
    var count = 0;

    function open() {
        if (count == 8) {
            clearInterval(t);
            start_button.style.display = 'none';
        } else {
            count++;
            playscreen.style.opacity = (count * 0.1) + 0.2;
            start_button.style.opacity = 0.8 - (count * 0.1);
        }
    }
}

var img_box1 = document.getElementById("img_box1");
var img_box2 = document.getElementById("img_box2");
var left = document.getElementById("left");
var right = document.getElementById("right");
var center = document.getElementById("center");

// next screen 1
var greater1 = document.getElementById("greater1");
var equal1 = document.getElementById("equal1");
var less1 = document.getElementById("less1");
greater1.addEventListener('click', note1);
equal1.addEventListener('click', note1);
less1.addEventListener('click', Question1);


function Question1() {
    img_box1.src = "../picture/dis3.png";
    img_box2.src = "../picture/dis4.png";
    greater1.parentNode.removeChild(greater1);
    equal1.parentNode.removeChild(equal1);
    less1.parentNode.removeChild(less1);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead7.style.left = "440px";
}

function note1() {
    left.innerHTML = "291 block";
    right.innerHTML = "300 block";
    center.innerHTML = "AGAIN";
}
//next screen 2
var greater2 = document.getElementById("greater2");
var equal2 = document.getElementById("equal2");
var less2 = document.getElementById("less2");
equal2.addEventListener('click', note2);
less2.addEventListener('click', note2);
greater2.addEventListener('click', Question2);

function Question2() {
    img_box1.src = "../picture/dis5.png";
    img_box2.src = "../picture/dis6.png";
    greater2.parentNode.removeChild(greater2);
    equal2.parentNode.removeChild(equal2);
    less2.parentNode.removeChild(less2);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead6.style.left = "416px";
}

function note2() {
    left.innerHTML = "720 block";
    right.innerHTML = "702 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}
//next 3

var greater3 = document.getElementById("greater3");
var equal3 = document.getElementById("equal3");
var less3 = document.getElementById("less3");
equal3.addEventListener('click', note3);
less3.addEventListener('click', note3);
greater3.addEventListener('click', Question3);

function Question3() {
    img_box1.src = "../picture/dis7.png";
    img_box2.src = "../picture/dis8.png";
    greater3.parentNode.removeChild(greater3);
    equal3.parentNode.removeChild(equal3);
    less3.parentNode.removeChild(less3);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead5.style.left = "392px";
}

function note3() {
    left.innerHTML = "411 block";
    right.innerHTML = "408 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}
//next 4
var greater4 = document.getElementById("greater4");
var equal4 = document.getElementById("equal4");
var less4 = document.getElementById("less4");
equal4.addEventListener('click', note4);
greater4.addEventListener('click', note4);
less4.addEventListener('click', Question4);

function Question4() {
    img_box1.src = "../picture/dis9.png";
    img_box2.src = "../picture/dis10.png";
    greater4.parentNode.removeChild(greater4);
    equal4.parentNode.removeChild(equal4);
    less4.parentNode.removeChild(less4);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead4.style.left = "368px";
}

function note4() {
    left.innerHTML = "506 block";
    right.innerHTML = "560 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}
//next5

var greater5 = document.getElementById("greater5");
var equal5 = document.getElementById("equal5");
var less5 = document.getElementById("less5");
greater5.addEventListener('click', note5);
less5.addEventListener('click', note5);
equal5.addEventListener('click', Question5);

function Question5() {
    img_box1.src = "../picture/dis11.png";
    img_box2.src = "../picture/dis12.png";
    greater5.parentNode.removeChild(greater5);
    equal5.parentNode.removeChild(equal5);
    less5.parentNode.removeChild(less5);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead3.style.left = "344px";
}

function note5() {
    left.innerHTML = "350 block";
    right.innerHTML = "350 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}
//next 6
var greater6 = document.getElementById("greater6");
var equal6 = document.getElementById("equal6");
var less6 = document.getElementById("less6");
equal6.addEventListener('click', note6);
less6.addEventListener('click', note6);
greater6.addEventListener('click', Question6);

function Question6() {
    img_box1.src = "../picture/dis13.png";
    img_box2.src = "../picture/dis14.png";
    greater6.parentNode.removeChild(greater6);
    equal6.parentNode.removeChild(equal6);
    less6.parentNode.removeChild(less6);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead2.style.left = "320px";
}

function note6() {
    left.innerHTML = "500 block";
    right.innerHTML = "474 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}
//next 7

var greater7 = document.getElementById("greater7");
var equal7 = document.getElementById("equal7");
var less7 = document.getElementById("less7");
equal7.addEventListener('click', note7);
greater7.addEventListener('click', note7);
less7.addEventListener('click', Question7);

function Question7() {
    img_box1.src = "../picture/dis15.png";
    img_box2.src = "../picture/dis16.png";
    greater7.parentNode.removeChild(greater7);
    equal7.parentNode.removeChild(equal7);
    less7.parentNode.removeChild(less7);
    left.style.opacity = "0";
    right.style.opacity = "0";
    center.style.opacity = "0";
    bead1.style.left = "296px";
}

function note7() {
    left.innerHTML = "106 block";
    right.innerHTML = "160 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}
//next 8
var greater8 = document.getElementById("greater8");
var equal8 = document.getElementById("equal8");
var less8 = document.getElementById("less8");
equal8.addEventListener('click', note8);
less8.addEventListener('click', note8);
greater8.addEventListener('click', GoLesson);

function note8() {
    left.innerHTML = "702 block";
    right.innerHTML = "618 block";
    left.style.opacity = "1";
    right.style.opacity = "1";
    center.style.opacity = "1";
}

//onmouse

function bigLess(x) {
    x.src = "../picture/less_hover.png";
}

function normalLess(x) {
    x.src = "../picture/less.png";
}

function bigEqual(x) {
    x.src = "../picture/equal_hover.png";
}

function normalEqual(x) {
    x.src = "../picture/equal.png";
}

function bigGreater(x) {
    x.src = "../picture/greater_hover.png";
}

function normalGreater(x) {
    x.src = "../picture/greater.png";
}