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
function difficulty(event) {
	output = event;
	if (flag === 0) {
    	if (event === "easy") {
      		document.getElementById(event).style.display = "flex";
			flag++;
    	} else if (event === "medium") {
      		document.getElementById(event).style.display = "flex";
			flag++;
    	} else {
      		document.getElementById(event).style.display = "flex";
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
function succes() {
		firstCard.removeEventListener("click", flip);
		secondCard.removeEventListener( "click", flip);
		
	    if (output === "easy") {
            easyCount += 1;
        	if (easyCount === 2) {
          		console.log("count2", easyCount);
          		document.getElementById("outputDisplay").style.display = "block";
				document.body.style.backgroundImage  = "url('congrads5.jpeg')";
				document.body.style.backgroundSize = "cover";
        	}
      	} else if(output === "medium") {
			mediumCount += 1;
        	if (mediumCount === 4) {
          		console.log("count2", mediumCount);
          		document.getElementById("outputDisplay").style.display = "block";
				document.body.style.backgroundImage  = "url('congrads5.jpeg')";
				document.body.style.backgroundSize = "cover";
        	}
		} else {
			hardCount += 1;
        	if (hardCount === 8) {
          		console.log("count2", hardCount);
          		document.getElementById("outputDisplay").style.display = "block";
				document.body.style.backgroundImage  = "url('congrads5.jpeg')";
				document.body.style.backgroundSize = "cover";
        	}

		}
  		reset();
		
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
