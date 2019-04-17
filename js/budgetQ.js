var salaryForm = document.getElementById("salary");
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
var year = 0;
progress.style.display = "none";
bubble.style.display = "none";
salaryForm.style.display = "none";
money.style.display = "none";
option2box.style.display = "none";
option3box.style.display = "none";
option4box.style.display = "none";
form1040.style.display = "none";
W2form.style.display = "none";
			
function education() {
  question.style.display = "block";
  year = 18;
  option2box.style.display = "block";
  progress.style.display = "block";
  progress.style.width = year + '%';
  progress.textContent =  year + " yrs old";
  question.textContent = "What is (or will be) your highest level of education?";
  option1.textContent = "High School";
  option2.textContent = "College";
  option1box.addEventListener("click", hsGraduate);
  option2box.addEventListener("click", collegeGraduate);
  bubble.style.display = "block";
  thought.textContent = "You will have the option for grad school later.";
};
function hsGraduate() {
  bubble.style.display = "none";
  question.textContent = "Will you go to Trade School or get a job?";
  option1.textContent = "Trade School";
  option2.textContent = "Job";
  option1box.addEventListener("click", income);
  option2box.addEventListener("click", income);
  option2box.addEventListener("click", year = 18);
  option1box.addEventListener("click", year = 20);
};
function collegeGraduate() {
  bubble.style.display = "none";
  option3box.style.display = "none";
  year = 22;
  updateBar();
  question.textContent = "Will you continue on with school or start your career?";
  option1.textContent = "Graduate School";
  option2.textContent = "Career";
  option1box.addEventListener("click", gradSchool);
  option2box.addEventListener("click", income);
};
function gradSchool() {
  year = 22;
  updateBar();
  question.textContent = "What kind of degree are you getting?";
  option1.textContent = "Doctorate";
  option2.textContent = "Masters";
  option3box.style.display = "none";
  option1box.addEventListener("click", income);
  option1box.addEventListener("click", year = 26);
  option2box.addEventListener("click", income);
  option2box.addEventListener("click", year = 24);
};
function income() {
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
      housingLocation();
    }
  }
};
var housingMultiplier;
function housingLocation() {
  money.style.display = "block";
  money.textContent = "$" + x;
  salaryForm.style.display = "none";
  option1box.style.display = "block";
  option2box.style.display = "block";
  question.textContent = "Where will you live (location)?";
  option1.textContent = "City";
  option2.textContent = "Suburbs";
  option1box.addEventListener("click", housingType);
  option1box.addEventListener("click", housingMultiplier = 1);
  option2box.addEventListener("click", housingType);
  option2box.addEventListener("click", housingMultiplier = 2);

};
var rent;
function housingType() {
  salaryForm.style.display = "none";
  question.textContent = "Where will you live?";
  option1box.style.display = "block";
  option2box.style.display = "block";
  option3box.style.display = "block";
  option1.textContent = "High-End Apartment";
  option2.textContent = "Cheap Apartment";
  option3.textContent = "House";
  option1box.addEventListener("click", roommate);
  option1box.addEventListener("click", rent = 8400);
  option2box.addEventListener("click", roommate);
  option2box.addEventListener("click", rent = 6600);
  option3box.addEventListener("click", roommate);
  option3box.addEventListener("click", rent = 6600);
};
var roommateMultiplier;
function roommate() {
  option1box.style.display = "block";
  option2box.style.display = "block";
  option3box.style.display = "none";
  question.textContent = "Will you have a roommate?";
  option1.textContent = "Yes";
  option2.textContent = "No";
  option1box.addEventListener("click", vehicle);
  option1box.addEventListener("click", roommateMultiplier = 0.5);
  option2box.addEventListener("click", vehicle);
  option2box.addEventListener("click", roommateMultiplier = 1);
};
var bank;
function housingUpdate(){
  var yearlyRent = roommateMultiplier*rent*housingMultiplier;
  bank = x - yearlyRent;
  money.textContent = "$" + bank;
};
function vehicle() {
  housingUpdate();
  question.textContent = "Do you need a vehicle? (drive to work etc.)";
  salaryForm.style.display="none";
  option1box.style.display = "block";
  option2box.style.display = "block";
  option1.textContent = "Yes";
  option2.textContent = "No";
  option3box.style.display = "none";
  option1box.addEventListener("click", healthInsurance);
  option2box.addEventListener("click", healthInsurance);
};
function healthInsurance() {
  question.textContent = "Do you have health insurance?";
  option3box.style.display = "block";
  option4box.style.display = "block";
  option1.textContent = "Yes, provided through my job";
  option2.textContent = "Yes, still apart of my parents";
  option3.textContent = "Yes, paid for by self";
  option4.textContent = "No";
  option1box.addEventListener("click", taxes);
  option2box.addEventListener("click", taxes);
  option3box.addEventListener("click", taxes);
  option4box.addEventListener("click", taxes);

};
function taxes() {
  updateBar();
  option1box.style.display = "none";
  option2box.style.display = "none";
  option3box.style.display = "none";
  option4box.style.display = "none";
  salaryForm.style.display = "none";
  question.textContent = "Tax Time! W2 and 1040";	
  W2form.style.display = "block";
  form1040.style.display = "block";

};
function updateBar() {
  progress.style.width = year + "%";
  progress.textContent = year + " yrs old";
};

$("#salary").submit(function(e) {
  e.preventDefault();
});		
option1box.addEventListener("click", education);