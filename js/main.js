let fName = document.querySelector("input#fullName");
let hours = document.querySelector("input#hours");
let tax = document.querySelector("input#tax");
let degree = document.querySelector("select#degree");
let submit1 = document.querySelector("button#submit");
let salaryPure;
let taxSalary;
let salaryF;

submit1.addEventListener("click", function () {
  if (degree.value == 0) {
    salaryPure = Number(hours.value) * 50000;
    taxSalary = (salaryPure * Number(tax.value)) / 100;
    salaryF = salaryPure - taxSalary;
  } else if (degree.value == 1) {
    salaryPure = Number(hours.value) * 60000;
    taxSalary = (salaryPure * Number(tax.value)) / 100;
    salaryF = salaryPure - taxSalary;
  } else if (degree.value == 2) {
    salaryPure = Number(hours.value) * 70000;
    taxSalary = (salaryPure * Number(tax.value)) / 100;
    salaryF = salaryPure - taxSalary;
  } else if (degree.value == 3) {
    salaryPure = Number(hours.value) * 90000;
    taxSalary = (salaryPure * Number(tax.value)) / 100;
    salaryF = salaryPure - taxSalary;
  } else if (degree.value == 4) {
    salaryPure = Number(hours.value) * 100000;
    taxSalary = (salaryPure * Number(tax.value)) / 100;
    salaryF = salaryPure - taxSalary;
  } else {
    alert("invalid information");
  }
  document.querySelector("h1#name").innerHTML = fName.value;
  document.querySelector("h1#salary").innerHTML = salaryF;
});
