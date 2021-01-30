//function for updating ticket number and their corresponding price
function updateField(idName, isIncreasing) {
	const inputField = document.getElementById(idName + 'ticket');
	var ticket = parseInt(inputField.value);

	if (isIncreasing == true) {
		inputField.value = ticket + 1;
    }
    else {
		if (ticket > 0) {
			inputField.value = ticket - 1;
		}
	}
    updateTotal();
}

function totalFare() {
    var firstClassTicket = parseInt(document.getElementById('first-class-ticket').value);
    var firstClassFare = 150 * firstClassTicket;
    var economyTicket = parseInt(document.getElementById('economy-ticket').value);
    var economyFare = 100 * economyTicket;
    return firstClassFare + economyFare;
}

function updateTotal()
{
    var fare = totalFare();
    document.getElementById('total').innerText = '$' + fare;
    var vat = Math.round(fare * 0.1);
    document.getElementById('vat').innerText = '$' + vat;
    var grandTotal = fare + vat;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

updateTotal();

var firstClassPlus = document.getElementById('first-class-plus');
firstClassPlus.addEventListener('click', function() {
	updateField('first-class-', true);
});

var firstClassMinus = document.getElementById('first-class-minus');
firstClassMinus.addEventListener('click', function() {
	updateField('first-class-', false);
});


var economyPlus = document.getElementById('economy-plus');
economyPlus.addEventListener('click', function() {
	updateField('economy-', true);
});

var firstClassMinus = document.getElementById('economy-minus');
firstClassMinus.addEventListener('click', function() {
	updateField('economy-', false);
});
