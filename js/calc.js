var remaining;
function remainingBalance() {
    //grab interest rate
    var r = document.getElementById("interest-input").value;
    r = (r / 100) / 12;
    //grab loan amount
    var loan = document.getElementById("loan-input").value;
    //grab number of payments
    var payments = document.getElementById("payments-input").value;
    //grab monthly payment
    var monthly = document.getElementById("month-input").value;

    var q = (1+r)** payments;
    remaining = q * loan - ( (q-1) / r ) * monthly;

    document.getElementById("remaining-amount").textContent = remaining.toFixed(2);
	return false;
}
$("#loan-form").submit(function(e) {
	e.preventDefault();
});
