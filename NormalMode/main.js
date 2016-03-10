confirm("Are you ready to play?");
name = prompt("What is your name?");
alert("You see a driver pull up next to you at a stoplight. He bets you $500 that he could beat you to the city.");
var enter = prompt("You are about 30min outside of the city and traffic seems light. Do you wish to accept?");
	
	if (enter === "yes") {
		alert("You accept and the light turns green. The race starts out even but, he begins to pull ahead. You end up on a 2 lane street and are force to pull behind him in the left lane.");
		var pass = prompt("You notice a couple of cars in the right lane and a shoulder lane on your left. left or right?");
		if (pass === "right") {
			alert("You move to the right lane and speed up to attempt to pass. The racer speeds up to match your acceleration, making you unable to pass. With no place to pass you end up rear ending the slower cars in front of you causing you to crash. THE END");
		} else {
			alert("You move into the shoulder, but before you can speed up he move to the left and blocks your way. You then move back into your lane");
			alert("You continue straight, following closely behind him. You both turn onto a 3 lane freeway with little to no traffic.");
			var lane = prompt("You and the other driver travel on the freeway at speeds just under 100mph. You notice traffic getting heavy up ahead. There is also a gap in the median to get on the opposite side of the freeway on your left. Turn left into oncoming traffic or continue straight?");
			if (lane === "left") {
				alert("As the other driver slows down towards traffic you speed up and move into oncoming traffic. You stick close to the shoulder and narrowly miss cars.");
				var turn = prompt ("The other driver moves to his shoulder to try to keep up but you are still ahead. You notice a large, wide turn up ahead. The opposing traffic side has a much smaller turn making it the faster route but there is another gap in the median allowing you to move make to the normal side of the freeway making it safer but longer. left or right?");
				if (turn === "left") {
					alert("You stay in opposing traffic. As you take the turn a opposing car turns wide and crashes right into you, causing you to lose the race. THE END");
				} else {
					alert("You move back into the flow of traffic still ahead of the other driver. You both move into the inside lane and take the turn.");
					var speed = "You approach the final straight away with no cars ahead of you. the other driver moves beside you and begins to speed up. How fast should you go in mph?";
        			var mph = prompt(speed);
        			mph = Number(mph);

        			if (mph < 100) {
            		alert("The other driver pulls ahead and you lose. THE END");
        			} else if (mph > 120) {
            		alert("You car speeds ahead but you are going too fast. You begin to lose control of your car and crash into the dirt road. THE END");
        			} else {
        			alert("You pull ahead and keep control of your car while entering the city. YOU WIN!!")
        			}
			}
				} else {
					alert("You and the other driver slow down and move to the shoulder to pass the block of traffic.");
					var turn1 = prompt ("You notice a large, wide turn up ahead. The opposing traffic side has a much smaller turn making it the faster route but there is another gap in the median allowing you to move make to the normal side of the freeway making it safer but longer. left or right?");
					if (turn1 === "left") {
					alert("You turn into opposing traffic. As you take the turn a opposing car turns wide and crashes right into you, causing you to lose the race. THE END");
					} else {
					alert("You stay in the flow of traffic still ahead of the other driver. You both move into the inside lane and take the turn.");
					var speed1 = "You approach the final straight away with no cars ahead of you. the other driver moves beside you and begins to speed up. How fast should you go in mph?";
        			var mph1 = prompt(speed1);
        			mph1 = Number(mph1);

        			if (mph1 < 100) {
            		alert("The other driver pulls ahead and you lose. THE END");
        			} else if (mph1 > 120) {
            		alert("You car speeds ahead but you are going too fast. You begin to lose control of your car and crash into the dirt road. THE END");
        			} else {
        			alert("You pull ahead and keep control of your car while entering the city. YOU WIN!!")
        			}
			}
		} 
	}
	} else {
		alert("The driver drives off and you continue the rest of your day. THE END");
	}