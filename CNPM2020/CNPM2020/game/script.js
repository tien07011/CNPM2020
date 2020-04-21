var GAMEWEB1 = GAMEWEB1 || {};

GAMEWEB1.Game = function()
{	
	questions = [
	 ['So sánh hai số: 870 & 807 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'lớn hơn'],
	 ['So sánh hai số: 510 & 409 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'lớn hơn'],
	 ['So sánh hai số: 323 & 332 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'nhỏ hơn'],
	 ['So sánh hai số: 906 & 609 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'lớn hơn'],
	 ['So sánh hai số: 780 & 806 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'nhỏ hơn'],
	 ['So sánh hai số: 396 & 639 ',['lớn hơn','bằng nhau','nhỏ hơn',] ,'nhỏ hơn'],
	];
	var correctAnswer;
	var questionBox = $('.question');
	var questionNumber = $('.question-number');
	var answers = $('.answers');
	var restart = $('.restart');
	var winner = $('.winner');
	var playhomescreen = $('.playhomescreen');
	var loser = $('.loser');
	Qnum = -1;
	function init()
	{	
		nextQuestion();
		restart.click(reStart);
		playhomescreen.click(playHome);
	}	
	function nextQuestion() {
		Qnum = Qnum + 1;
		console.log("qnum is " + Qnum)
		var total = questions.length;
		if(Qnum < total) {
			askQuestion(Qnum);	
		}
		
		else {		
			questionBox.html("Bạn đã chiến thắng !");
			answers.hide();
			//restart.show();
			questionNumber.hide();
			winner.show();
			playhomescreen.show();
		}
				
	}
	function askQuestion(counterNum) {
		questionBox.html(questions[counterNum][0]);
		questionNumber.html('Question number ' + (counterNum + 1));
		$('.answers').empty();
		answers.append('<li data-answer=' + questions[counterNum][1][0].replace(/ /g,'') + '>' + questions[counterNum][1][0] + '</li>');
		answers.append('<li data-answer=' + questions[counterNum][1][1].replace(/ /g,'') + '>' + questions[counterNum][1][1] + '</li>');
		answers.append('<li data-answer=' + questions[counterNum][1][2].replace(/ /g,'') + '>' + questions[counterNum][1][2] + '</li>');
		correctAnswer = questions[counterNum][2];
		console.log("Answer is " + correctAnswer);
		correctAnswer = correctAnswer.replace(/ /g,'').toLowerCase();
		$('.answers li').on('click', answerQuestion);
	}
	function answerQuestion() {
		$('.answers li').off();
		var UserAnswer = $(this).data('answer').replace(/ /g,'').toLowerCase();
		if (UserAnswer == correctAnswer) {
			nextQuestion();	
		}
		else {
			if (Qnum == 0) {
				questionBox.html("Rất tiếc bạn đã thua 870 > 807 vì 70 > 07");
			}
			if (Qnum == 1) {
				questionBox.html("Rất tiếc bạn đã thua 510 > 409 vì 500 > 400");
			}
			if (Qnum == 2) {
				questionBox.html("Rất tiếc bạn đã thua 323 > 332 vì 20 < 30");
			}
			if (Qnum == 3) {
				questionBox.html("Rất tiếc bạn đã thua 906 > 609 vì 900 > 600");
			}
			if (Qnum == 4) {
				questionBox.html("Rất tiếc bạn đã thua 780 > 806 vì 700 < 800");
			}
			if (Qnum == 5) {
				questionBox.html("Rất tiếc bạn đã thua 396 > 639 vì 300 < 600");
			}
			answers.hide();
			restart.show();
			questionNumber.hide();
			loser.show();
		}
				
	}
	function reStart() {
		
		Qnum = -1;
		nextQuestion();
		answers.show();
		restart.hide();
		loser.hide();
		questionNumber.show();
	}
	init();
};

$(function()
{	
	new GAMEWEB1.Game();
	
});

