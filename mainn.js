$(document).ready(function () {

	var coup = 1;
	var joue = true;

	$("#board tr td").click(function () {
		if ($(this).text() == "" && joue) {
			if ((coup % 2) == 1) {
				$(this).append("X");
				$(this).css('color', "#61892f");
				
			} else {
				$(this).append("O");
				$(this).css('color', "#e85a4f");
			}
			coup++;
			if (checkForWinner() != -1 && checkForWinner() != "") {
				if (checkForWinner() == "X") {
					$('body').append('<div class="winner"><span>Winner</span>X</div>');
					$('.winner').css('background-color', '#61892f');
				} else {
					$('body').append('<div class="winner"><span>Winner</span>O</div>');
					$('.winner').css('background-color', '#e85a4f');

				}
				joue = false;
			}
		}
    });
    

    
	function checkForWinner() {
		var cellule1 = $("#board tr:nth-child(1) td:nth-child(1)").text();
		var cellule2 = $("#board tr:nth-child(1) td:nth-child(2)").text();
		var cellule3 = $("#board tr:nth-child(1) td:nth-child(3)").text();
		var cellule4 = $("#board tr:nth-child(2) td:nth-child(1)").text();
		var cellule5 = $("#board tr:nth-child(2) td:nth-child(2)").text();
		var cellule6 = $("#board tr:nth-child(2) td:nth-child(3)").text();
		var cellule7 = $("#board tr:nth-child(3) td:nth-child(1)").text();
		var cellule8 = $("#board tr:nth-child(3) td:nth-child(2)").text();
		var cellule9 = $("#board tr:nth-child(3) td:nth-child(3)").text();
		// check rows
		if ((cellule1 == cellule2) && (cellule2 == cellule3)) {
			return cellule3;
		} else if ((cellule4 == cellule5) && (cellule5 == cellule6)) {
			return cellule6;
		} else if ((cellule7 == cellule8) && (cellule8 == cellule9)) {
			return cellule9;
		}
		// check columns
		else if ((cellule1 == cellule4) && (cellule4 == cellule7)) {
			return cellule7;
		} else if ((cellule2 == cellule5) && (cellule5 == cellule8)) {
			return cellule8;
		} else if ((cellule3 == cellule6) && (cellule6 == cellule9)) {
			return cellule9;
		}
		// check diagonals
		else if ((cellule1 == cellule5) && (cellule5 == cellule9)) {
			return cellule9;
		} else if ((cellule3 == cellule5) && (cellule5 == cellule7)) {
			return cellule7;
		}
		// no winner
		return -1;
	}

});