const cards = document.querySelectorAll(".memoryCard");
document.getElementById("outputDisplay").style.display = "none";
var isFlipped = false;
var firstCard, secondCard;
var lock = false;
var flag = 0;
var easyCount = 0;
var mediumCount = 0;
var hardCount = 0;
var output;
const soundEffect = document.createElement('audio');
soundEffect.src = './con.mp3';
function difficulty(event) {
	document.getElementById('instruction').style.display = "none";
	output = event;
	if (flag === 0) {
		document.getElementById('timer').style.display = "flex";
    	if (event === "easy") {
      		document.getElementById(event).style.display = "flex";
			startTimer();
			flag++;
    	} else if (event === "medium") {
      		document.getElementById(event).style.display = "flex";
			startTimer();
			flag++;
    	} else {
      		document.getElementById(event).style.display = "flex";
			startTimer();
			flag++;
    	}
    }
	
}

cards.forEach(card => card.addEventListener("click", flip));
function flip() {
	    if (lock) return;
		if (this === firstCard) return;
		this.classList.add("flip");
		if (!isFlipped) {
			isFlipped = true;
			firstCard = this;
			return;
		}
		secondCard = this;
		check();
}
function check() {
		var isMatch = firstCard.dataset.image === secondCard.dataset.image;
		isMatch ? succes() : fail();
}


var second = 0, minute = 0;
var timer = document.getElementById('timer');
var interval;
clearInterval(interval);
function startTimer(){

    interval = setInterval(function(){
        timer.innerHTML = "Timer :"+second;
        second ++;
		if(output == 'easy') {
        	if(second == 10){
				clearInterval(interval);
				displayContentFail();
			
            	second = 0;
        	}
	 	} else if(output == 'medium') {
			if(second == 20){
				clearInterval(interval);
				displayContentFail();
			
            	second = 0;
        	}
		} else {
			if(second == 30){
				clearInterval(interval);
				displayContentFail();
			
            	second = 0;
        	}
		}
    },1000);

}

function succes() {
		firstCard.removeEventListener("click", flip);
		secondCard.removeEventListener( "click", flip);
		
	    if (output === "easy") {
            easyCount += 1;
        	if (easyCount === 2) {
          		console.log("count2", easyCount);
				 displayContent();
        	}
      	} else if(output === "medium") {
			mediumCount += 1;
        	if (mediumCount === 4) {
          		console.log("count2", mediumCount);
				displayContent();
        	}
		} else {
			hardCount += 1;
        	if (hardCount === 8) {
          		console.log("count2", hardCount);
				displayContent();
        	}

		}
  		reset();
		
}
function displayContent() {
	        document.getElementById("outputDisplay").style.display = "block";
			document.getElementById(output).style.display = "none";
			document.body.style.backgroundImage  = "url('congrads5.jpeg')";
			document.body.style.backgroundSize = "cover";
			soundEffect.play();
}
function displayContentFail() {
	document.getElementById(output).style.display = "none";
	document.getElementById('outputDisplayFail').style.display = 'flex';
	document.getElementById('clickButton').style.display = "none";
	document.getElementById('level').style.display = "none";
}
function fail() {
		lock = true;
		setTimeout(() => {
				firstCard.classList.remove("flip");
				secondCard.classList.remove ("flip");
				reset();
		}, 1000);
}
function reset() {
		[isFlipped, lock] = [false, false];
		[firstCard, secondCard] = [null, null];
}

(function suffle() {
		cards.forEach( card => {
				var position = Math.floor(Math.random() * 16);
				card.style.order = position;
		});
})();
