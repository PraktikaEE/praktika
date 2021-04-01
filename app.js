// Sumbit button calculates final values
document.getElementById("loan-form").addEventListener("submit", computeResults);


// Calculate necessary values to find final payment
function computeResults(e) {

    // Get values from index.html file by id
    const UIamount = document.getElementById("rs-range-line").value;
    const UIinterest = document.getElementById("interestInput").value;
    const UIyears = document.getElementById("years").value;
    const UIdownPayment = document.getElementById("downPayment").value;
    const UIcontractFee = document.getElementById("contractInput").value;
    const UImanagementFee = document.getElementById("managementInput").value;

    // Calculate loan amount with one time contract fee and monthly management fee
    const UIadditionalFee = parseFloat(UIcontractFee) + parseFloat(UImanagementFee) * 12;

    // Calculate final loan amount and interest
    const principal = parseFloat(UIamount) + UIadditionalFee;
    const CalculateInterest = parseFloat(UIinterest) / 100 / 12;
    const calculatedPayments = parseFloat(UIyears);
    
    // Calculate real loan amount after down payment
    const UIrealPayment = principal - UIdownPayment;

    // Calculate monthly payments
    const x = Math.pow(1 + CalculateInterest, calculatedPayments);
    const monthly = (UIrealPayment * x * CalculateInterest) / (x - 1);
    const monthlyPayment = monthly.toFixed(2);

    // Show results in HTML
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment + " €";

    e.preventDefault();

}

// Get values from index.html file by id
var rangeSlider = document.getElementById("rs-range-line");
var rangeBullet = document.getElementById("rs-bullet");

rangeSlider.addEventListener("input", showSliderValue, false);

// Show slider value when moving the slider
function showSliderValue() {

  // Assign slider value to the span which is moving above it
  rangeBullet.innerHTML = rangeSlider.value;

  // Set position for moving span
  var bulletPosition = (rangeSlider.value /rangeSlider.max);
  rangeBullet.style.left = (bulletPosition * 490) + "px";
}

// Show period (months) in table next to the slider
function showPeriod() {

    // Get period input value
    var e = document.getElementById("years");
    var result = e.options[e.selectedIndex].value;

    // Show input value in HTML
    document.getElementById("period").innerHTML = result + " kuud";
}

// Calculate project payment after downpayment
function projectPayment() {

    // Get values for loan amount, contract fee and monthly management fee
    const amount = document.getElementById("rs-range-line").value;
    const UIcontractFee = document.getElementById("contractInput").value;
    const UImanagementFee = document.getElementById("managementInput").value;

    // Calculate loan amount with one time contract fee and monthly management fee
    const UIadditionalFee = parseFloat(UIcontractFee) + parseFloat(UImanagementFee) * 12;
    const UIrealPayment = parseFloat(amount) + UIadditionalFee;

    // Get down payment value from input field
    var c = document.getElementById("downPayment").value;

    // Show project payment in HTML
    document.getElementById("project").innerHTML = UIrealPayment - c + " €";
}