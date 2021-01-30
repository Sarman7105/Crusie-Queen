//function for updating ticket number and their corresponding price
function updateField(idName, isIncreasing, price) {
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
	newTicket = parseInt(inputField.value);
    document.getElementById(idName + 'price').innerText = newTicket * price;
    updateTotal();
}

function totalFare() {
    var firstClassFare = parseInt(document.getElementById('first-class-price').innerText);
    var economyFare = parseInt(document.getElementById('economy-price').innerText);
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

var firstClassPlus = document.getElementById('first-class-plus');
firstClassPlus.addEventListener('click', function() {
	updateField('first-class-', true, 150);
});

var firstClassMinus = document.getElementById('first-class-minus');
firstClassMinus.addEventListener('click', function() {
	updateField('first-class-', false, 150);
});


var economyPlus = document.getElementById('economy-plus');
economyPlus.addEventListener('click', function() {
	updateField('economy-', true, 100);
});

var firstClassMinus = document.getElementById('economy-minus');
firstClassMinus.addEventListener('click', function() {
	updateField('economy-', false, 100);
});
