var start_button = document.getElementById("start_button");
var playscreen = document.getElementById("playscreen");
var stage = 0;
var status = 0;
var ball = document.getElementsByClassName("ball");
var number_holder1 = document.getElementsByClassName("number_holder1");
var number_holder2 = document.getElementsByClassName("number_holder2");
var greater = document.getElementById("greater").addEventListener('click', MyGreater);
var equal = document.getElementById("equal").addEventListener('click', MyEqual);
var less = document.getElementById("less").addEventListener('click', MyLess);

function MyGreater() {
    document.getElementById("img_box1").src = "../pictuer/dis9.png";
}

function MyEqual() {
    document.getElementById("box").innerHTML = "=";
}

function MyLess() {
    document.getElementById("box").innerHTML = "<";
}

var question1 = [less, greater, less, equal];
var score = 0;
var correct;
var hundred = document.getElementsByClassName("hundred");
var ten = document.getElementsByClassName("ten");
var one = document.getElementsByClassName("one");

function start() {
    status = 1;
    var t = setInterval(show, 50);
    var count = 0;

    function show() {
        if (count == 8) {
            clearInterval(t);
            start_img.style.display = 'none';
        } else {
            count++;
            playscreen.style.opacity = (count * 0.1) + 0.2;
            start_button.style.opacity = 0.8 - (count * 0.1);
        }
    }
}

function make_question(question) {
    if (question[0] == less) set_box_block(question[1]);
    document.getElementById("img_box1").src = "../picture/dis2.png";

}