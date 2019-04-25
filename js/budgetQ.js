window.onload = function() {
	var salaryForm = document.getElementById("salary");
	var loanForm = document.getElementById("loan");
	var money = document.getElementById("money_tracking");
	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");
	var option4 = document.getElementById("option4");
	var question = document.getElementById("question");
	var bubble = document.getElementById("container");
	var thought = document.getElementById("thought");
	var option1box = document.getElementById("box1");
	var option2box = document.getElementById("box2");
	var option3box = document.getElementById("box3");
	var option4box = document.getElementById("box4");
	var W2form = document.getElementById("W2");
	var form1040 = document.getElementById("1040form");
	var progress = document.getElementById("progressbar");
	var copyright = document.getElementById("iconrights");
	var spendingButton = document.getElementById("spendings");
	var moveButton = document.getElementById("move");
	var marriageButton = document.getElementById("marriage");
	var jobButton = document.getElementById("jobStatus");
	var retireButton = document.getElementById("retire");
	var carButton = document.getElementById("car");
	var fwdYear = document.getElementById("yearProgression");
	var spendingTbl = document.getElementById("spendingTableModal");
	var closeSpending = document.getElementById("closeSpTbl");
	var year = 0;
	var sideBar = document.getElementById("sideBar");

	moveButton.style.display = "none";
	marriageButton.style.display = "none";
	jobButton.style.display = "none";
	retireButton.style.display = "none";
	carButton.style.display = "none";
	fwdYear.style.display = "none";
	progress.style.display = "none";
	bubble.style.display = "none";
	salaryForm.style.display = "none";
	loanForm.style.display = "none";
	money.style.display = "none";
	option2box.style.display = "none";
	option3box.style.display = "none";
	option4box.style.display = "none";
	form1040.style.display = "none";
	W2form.style.display = "none";

	spendingButton.onclick = function() {
		spendingTbl.style.display = "block";
	};

	closeSpending.onclick = function() {
		spendingTbl.style.display = "none";
	};

	// When the user clicks anywhere outside of a modal, close it
	window.onclick = function(event) {
		if (event.target == spendingTbl) {
	    spendingTbl.style.display = "none";
	  }
	};

	moveButton.onclick = function() {
		if (confirm("Are you ready to move?")){
			housingLocation();
		}
	};

	var couple;
	marriageButton.onclick = function() {
		if (confirm("Are you ready to get married?")){
			couple = 1;
			x = x*2;
		}
	};

	jobButton.onclick = function() {
		if (confirm("Are you ready to change jobs?")){
			income();
			if (couple == 1) {
				x = x*2;
			}
		}
	};

	retireButton.onclick = function() {
		if (confirm("Are you ready to retire?")) {
			x = 0;
		}
	};

	carButton.onclick = function() {
		if (confirm("Do you need to change your vehicle situation?")){
			vehicle();
		}
	};

	fwdYear.onclick = function() {
		if (confirm("Ready for another year?")) {
			if (year >= 95) {
				alert ("You lived a happy life! Review how your savings and spendings added up");
			}
			else {
				year = year + 10;
				updateYear();
			}
		}
	};

	option1box.onclick = function() {
		education();
	};
	function education() {
		question.style.display = "block";
		window.year = 18;
		option2box.style.display = "block";
		progress.style.display = "block";
		progress.style.width = year + '%';
		progress.textContent =  year + " yrs old";
		question.textContent = "What is (or will be) your highest level of education?";
		option1.textContent = "High School";
		option2.textContent = "College";
		option1box.setAttribute("onClick", "hsGraduate()");
		option2box.setAttribute("onClick", "collegeGraduate()");
		bubble.style.display = "block";
		thought.textContent = "Those with college degrees get paid more on average than those without but also have to spend more on education";
	};

function hsGraduate() {
	question.textContent = "Will you go to Trade School or get a job?";
	option1.textContent = "Trade School";
	option2.textContent = "Job";
	option1box.addEventListener("click", tradeSchool);
	option2box.addEventListener("click", income);
	thought.textContent = "Those with trade skills often make more than those who don't have any higher education.";

};

function tradeSchool() {
	window.year = 20;
	updateBar();
	income();
};

function collegeGraduate() {
	console.log("college Graduate b4 update: " + year);
	thought.textContent = "Going to grad school could pay off for some majors; Others may want to consider if spending the extra money and time is worthwhile!";
	option3box.style.display = "none";
	window.year = 22;
	updateBar();
	console.log("college graduate after update: " + year);
	question.textContent = "Will you continue on with school or start your career?";
	option1.textContent = "Graduate School";
	option2.textContent = "Career";
	option1box.addEventListener("click", gradSchool);
	option2box.addEventListener("click", loan);
};
function gradSchool() {
	thought.textContent = "Although a Masters may take less time, some careers require a Doctorate to be taken seriously!";
	window.year = 22;
	updateBar();
	question.textContent = "What kind of degree are you getting?";
	option1.textContent = "Doctorate";
	option2.textContent = "Masters";
	option3box.style.display = "none";
	option1box.addEventListener("click", doctorate);
	option2box.addEventListener("click", masters);	
};

function doctorate() {
	window.year = 26;
	updateBar();
	loan();
};

function masters() {
	window.year = 24;
	updateBar();
	loan();
};

function loan() {
	console.log("loan before update: " + year);
	bubble.style.display = "block";
	loanForm.style.display = "block";
	thought.textContent = "Filling out your FAFSA each year can help you get low interest loans! You'll end up paying less in interest than with private loans.";
	updateBar();
	console.log("loan after update: " + year);
	salaryForm.style.display = "none";
	option1box.style.display = "none";
	option2box.style.display = "none";
	option3box.style.display = "none";
	option4box.style.display = "none";
	question.textContent = "How much will you have in loans?";
};

var loanPymt; //global variable of loan payment
var loanLength; //global variable of loan length
function validateForm2() {
	loanPymt = document.forms["loan"]["monthly_loan"].value;
	loanLength = document.forms["loan"]["loan_length"].value;
	if (loanPymt == "") {
		alert("Loan payment must be filled out");
	}
	else if (isNaN(loanPymt)){
		alert("Loan payment can only contain numbers");
	}
	else { 
		if (loanLength == "") {
			alert("Loan length must be filled out");
		}
		else if (isNaN(loanLength)) {
			alert("Loan length can only contain numbers");
		}
		else {
			income();
		}
	}
};

function income() {
	bubble.style.display = "block";
	loanForm.style.display = "none";
	thought.textContent = "Depending on your education choices, some careers (and salaries) may be out of reach";
	updateBar();
	salaryForm.style.display = "block";
	option1box.style.display = "none";
	option2box.style.display = "none";
	option3box.style.display = "none";
	option4box.style.display = "none";
	question.textContent = "Income";
};

var x; //global variable of salary
function validateForm() {
	x = document.forms["salary"]["yearly_salary"].value;
	if (x == "") {
		alert("Salary must be filled out");
	}
	else if (isNaN(x)){
		alert("Salary can only contain numbers");
	}
	else {
		if (confirm("Ready to get started?")) {
			taxes();
		}
	}
};

function taxes() {
	money.style.display = "none";
	progress.style.display = "none";
	copyright.style.display = "none";
	bubble.style.display = "none";
	option1box.style.display = "none";
	option2box.style.display = "none";
	option3box.style.display = "none";
	option4box.style.display = "none";
	salaryForm.style.display = "none";
	question.textContent = "Tax forms";
	option1.textContent = "Click to continue";
	option1box.addEventListener("click", retirement);
	W2form.style.display = "block";
	form1040.style.display = "block";	
};

var retirementSavings;
var retirementPercent;
var bank;
function retirement() {
	money.style.display = "block";
	money.textContent = "$" + x;
	bank = x;
	loanForm.style.display = "none";
	bubble.style.display = "block";
	copyright.style.display = "block";
	progress.style.display = "block";
	W2form.style.display = "none";
	form1040.style.display = "none";
	salaryForm.style.display = "none";
	question.textContent = "What percent of your salary are you putting into a 401K?"
	option1box.style.display = "block";
	option2box.style.display = "block";
	option3box.style.display = "block";
	option4box.style.display = "block";
	option1.textContent = "0%";
	option2.textContent = "5%";
	option3.textContent = "10%";
	option4.textContent = "20%";
	option1box.addEventListener("click", retire0);
	option2box.addEventListener("click", retire5);
	option3box.addEventListener("click", retire10);
	option4box.addEventListener("click", retire20);
};

function retire0() {
	loanForm.style.display = "none";
	retirementPercent = 0;
	retirementFund();
	housingLocation();
};

function retire5() {
	loanForm.style.display = "none";
	retirementPercent = 0.05;
	retirementFund();
	housingLocation();
};

function retire10() {
	loanForm.style.display = "none";
	retirementPercent = .1;
	retirementFund();
	housingLocation();
};

function retire20() {
	loanForm.style.display = "none";
	retirementPercent = .2;
	retirementFund();
	housingLocation();
};

var retirementSavings;
function retirementFund() {
	window.retirementSavings = retirementPercent*x;
	window.bank = bank - retirementSavings;
	money.textContent = "$" + bank;
};

var housingMultiplier;
function housingLocation() {
	loanForm.style.display = "none";
	thought.textContent = "Be aware that in some cities (NYC, Chicago, LA), rent will be much more expensive, while cheaper in others (Cincinnati). Also consider your commute to work!"
	option3box.style.display = "none";
	option4box.style.display = "none";
	form1040.style.display = "none";
	W2form.style.display = "none";
	salaryForm.style.display = "none";
	option1box.style.display = "block";
	option2box.style.display = "block";
	question.textContent = "Where will you live (location)?";
	option1.textContent = "City";
	option2.textContent = "Suburbs";
	option1box.addEventListener("click", city);
	option2box.addEventListener("click", suburbs);
};

function city() {
	housingMultiplier = 2;
	housingType();
};

function suburbs() {
	housingMultiplier = 1;
	housingType();
};

var rent;
function housingType() {
	bubble.style.display = "none";
	loanForm.style.display = "none";
	salaryForm.style.display = "none";
	question.textContent = "Where will you live?";
	option1box.style.display = "block";
	option2box.style.display = "block";
	option3box.style.display = "block";
	option4box.style.display = "none";
	option1.textContent = "High-End Apartment";
	option2.textContent = "Cheap Apartment";
	option3.textContent = "House";
	option1box.addEventListener("click", highEndApt);
	option2box.addEventListener("click", cheapApt);
	option3box.addEventListener("click", house);
};

function highEndApt() {
	/*option1box.removeEventListener("click", highEndApt);
	option2box.removeEventListener("click", cheapApt);
	option3box.removeEventListener("click", house);*/
	rent = 8400;
	/*bank = bank - rent;
	money.textContent = "$" + bank;*/
	roommate();
};

function cheapApt() {
	/*option1box.removeEventListener("click", highEndApt);
	option2box.removeEventListener("click", cheapApt);
	option3box.removeEventListener("click", house);*/
	rent = 6600;
	/*bank = bank - rent;
	money.textContent = "$" + bank;*/
	roommate();
};

function house() {
	/*option1box.removeEventListener("click", highEndApt);
	option2box.removeEventListener("click", cheapApt);
	option3box.removeEventListener("click", house);*/
	rent = 10000;
	/*bank = bank - rent;
	money.textContent = "$" + bank;*/
	roommate();
};

var roommateMultiplier;
function roommate() {
	bubble.style.display = "block";
	thought.textContent = "Having a roommate may make your living situation more cost efficient!";
	salaryForm.style.display = "none";
	loanForm.style.display = "none";
	option1box.style.display = "block";
	option2box.style.display = "block";
	option3box.style.display = "none";
	question.textContent = "Will you have a roommate?";
	option1.textContent = "Yes";
	option2.textContent = "No";
	option1box.addEventListener("click", shareLiving);
	option2box.addEventListener("click", dontShareLiving);
};

function shareLiving() {
	roommateMultiplier = 0.5;
	housingUpdate()
};

function dontShareLiving() {
	roommateMultiplier = 1;
	housingUpdate();
};

var yearlyRent;
function housingUpdate(){
	yearlyRent = roommateMultiplier*rent*housingMultiplier;
	moveButton.style.display = "block";
	console.log("yearly rent: " + yearlyRent);
	console.log("bank before rent: " + bank);
	bank = bank - yearlyRent;
	console.log("bank after rent: " + bank);
	money.textContent = "$" + bank;
	vehicle();
};

function vehicle() {
	question.textContent = "Do you need a vehicle? (drive to work etc.)";
	salaryForm.style.display="none";
	option1box.style.display = "block";
	option2box.style.display = "block";
	option1.textContent = "Yes";
	option2.textContent = "No";
	option3box.style.display = "none";
	option1box.addEventListener("click", vehicleCost);
	option2box.addEventListener("click", healthIns);
};

var carCost;
function vehicleCost() {
	question.textContent = "What are your car payments like?";
	option1box.style.display = "block";
	option2box.style.display = "block";
	option3box.style.display = "block";
	option1.textContent = "Car already paid off (no insurance/parents pay)";
	option2.textContent = "Car paid off but insurance being paid";
	option3.textContent = "Car payment and insurance";
	bubble.style.display = "none";
	option3box.style.display = "car and insurance payments monthly";
	option1box.addEventListener("click", nocarpymt);
	option2box.addEventListener("click", carIns);
	option3box.addEventListener("click", carInsPymt);
	carButton.style.display = "block";
};

function nocarpymt() {
	carCost = 0;
	carUpdate();
};

function carIns() {
	carCost = 120;
	carUpdate();
};

function carInsPymt() {
	carCost = 400;
	carUpdate();
};

function carUpdate() {
	bank = bank - carCost;
	money.textContent = "$" + bank;
	healthInsurance();
};

var healthInsCost;
function healthInsurance() {
	question.textContent = "Do you have health insurance?";
	option3box.style.display = "block";
	option4box.style.display = "block";
	option1.textContent = "Yes, provided through my job";
	option2.textContent = "Yes, still apart of my parents";
	option3.textContent = "Yes, paid for by self";
	option4.textContent = "No";
	option1box.addEventListener("click", jobIns);
	option2box.addEventListener("click", parIns);
	option3box.addEventListener("click", selfIns);
	option4box.addEventListener("click", noIns);
};

function jobIns() {
	healthInsCost = 1100;
	InsUpdate();
};

function parIns() {
	healthInsCost = 0;
	InsUpdate();
};

function selfIns() {
	healthInsCost = 6200;
	InsUpdate();
};

function noIns() {
	healthInsCost = 0;
	InsUpdate();
};

function InsUpdate() {
	bank = bank - healthInsCost;
	money.textContent = "$" + bank;
	summary();
};

function summary() {
	bubble.style.display = "none";
	question.textContent = "From this point on, your life events occur when you want them to. Use the side buttons to continue your life.";
	option1box.style.display = "block";
	option1.textContent = "Exit";
	option1box.style.display = "none";
	option2box.style.display = "none";
	option3box.style.display = "none";
	moveButton.style.display = "block";
	marriageButton.style.display = "block";
	retireButton.style.display = "block";
	carButton.style.display = "block";
	fwdYear.style.display = "block";
};

function marriage() {
	question.textContent = "Do you want to get married?";
	option1box.style.display = "block";
	option2box.style.display = "block";
	option3box.style.display = "none";
	option4box.style.display = "none";
	option1.textContent = "Yes";
	option2.textContent = "No";
	option1box.addEventListener("click", children);
	option2box.addEventListener("click", children);
};

function updateBar() {
	progress.style.width = year + "%";
	progress.textContent = year + " yrs old";
};
/*
when (year>65) {

};
*/

$("#salary").submit(function(e) {
	e.preventDefault();
});	
$("#loan").submit(function(e) {
	e.preventDefault();
});
};
