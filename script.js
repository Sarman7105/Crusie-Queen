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

document.getElementById('order-submit').addEventListener('click', function () {
    var firstClassTicket = parseInt(document.getElementById('first-class-ticket').value);
    var economyTicket = parseInt(document.getElementById('economy-ticket').value);
    if (firstClassTicket == 0 && economyTicket == 0) {
        alert('you have to buy at least one ticket');
    }
    
    else {
    var mainContent = document.getElementById('booking-section');
    mainContent.style.display = "none";
    document.body.style.backgroundImage = "none";
    document.getElementById("navigation").style.display = "none";
    document.getElementById("conformation-section").style.display = "block";
    }
});

document.getElementById('back-btn').addEventListener("click", function () {
    var mainContent = document.getElementById('booking-section');
    document.getElementById("navigation").style.display = "block";
    document.getElementById("conformation-section").style.display = "none";
    mainContent.style.display = "block";
    document.body.style.backgroundImage = "url('images/ship.png')"
});
