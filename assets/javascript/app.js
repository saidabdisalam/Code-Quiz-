$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What year did Tom Brady win his last superbowl?',
	possibleAnswers : ['A. 2013',
				 'B. 2015',
				 'C. 2019',
				 'D. 2017'],
	flags : [false, false, true, false],
	answer : 'C. 2017'
};

var q2 = {
	question: 'How many championship rings does Bill Russell have?',
	possibleAnswers: ['A. 5',
				 'B. 11',
				 'C. 3',
				 'D. 0'],
	flags : [false, true, false, false],
	answer : 'B. 11'
};

var q3 = {
	question : 'Who won the NBA Championship in 2006?',
	possibleAnswers : ['A. Lakers',
				 'B. Heat',
				 'C. Nuggets',
				 'D. Spurs'],
	flags : [false, true, false, false],
	answer : 'B. Heat'
};

var q4 = {
	question : 'How many wings does a honey bee have?',
	possibleAnswers : ['A. 4',
				 'B. 0',
				 'C. 1',
				 'D. 3'],
	flags : [true, false, false, false],
	answer : 'A. 4'
};

var q5 = {
	question : 'Who was the Fresh Prince of Bel-Air',
	possibleAnswers : ['A. Denzel Washington',
				 'B. Will Smith',
				 'C. Barack Obama',
				 'D. Martin Lawrence'],
	flags : [false, true, false, false],
	answer : 'B. Will Smith'
};

var q6 = {
	question : 'What is the hardest substance known to man??',
	possibleAnswers : ['A. Diamonds',
				 'B. Saphires',
				 'C. Steel',
				 'D. Copper'],
	flags : [true, false, false, false],
	answer : 'A. Diamonds'
};

var q7 = {
	question : 'Which Steven Spielberg film won seven Oscars in March 1994?',
	possibleAnswers : ['A. Raiders of the Lost Ark',
				 'B. Saving Private Ryan',
				 'C. Schindlers List',
				 'D. Jaws'],
	flags : [false, false, true, false],
	answer : 'C. Schindlers List'
};

var q8 = {
	question : 'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',
	possibleAnswers : ['A. Typhoon Lagoon',
				 'B. Pleasure Island',
				 'C. Both A & B',
				 'D. None of the above'],
	flags : [false, true, false, false],
	answer : 'B. Pleasure Island'
};

var q9 = {
	question : 'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',
	possibleAnswers : ['A. The Night Before Christmas',
				 'B. Three Little Pigs',
				 'C. The Old Mill',
				 'D. The Gallopin\' Gaucho'],
	flags : [false, false, false, true],
	answer : 'D. The Gallopin\' Gaucho'
};

var q10 = {
	question : 'What is the collective name for a group of trout?',
	possibleAnswers : ['A. School',
				  'B. Hover',
				  'C. Herd',
				  'D. Flock'],
	flags : [false, true, false, false],
	answer : 'B. Hover'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


//	$('#start').click(countdownTimer.start);
});