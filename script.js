// Function to handle form submission
document.getElementById('incomeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Retrieve form inputs
    const grossIncome = parseFloat(document.getElementById('gross-income').value);
    const extraIncome = parseFloat(document.getElementById('extra-income').value || 0); // Handle empty input
    const ageGroup = document.getElementById('age').value;
    const deductions = parseFloat(document.getElementById('deductions').value || 0); // Handle empty input

    // Validate age input
    if (ageGroup === "") {
        alert("Please select an age group.");
        return;
    }

    // Calculate taxable income
    const taxableIncome = grossIncome + extraIncome - deductions;

    // Calculate tax based on age group
    let taxRate = 0;
    if (taxableIncome > 800000) {
        switch(ageGroup) {
            case '<40':
                taxRate = 0.3;
                break;
            case '>=40&<60':
                taxRate = 0.4;
                break;
            case '>=60':
                taxRate = 0.1;
                break;
        }
    }

    // Calculate tax amount
    const taxAmount = taxableIncome > 800000 ? (taxableIncome - 800000) * taxRate : 0;

    // Calculate overall income after deducting taxes
    const overallIncome = taxableIncome - taxAmount;

   // Format numbers with commas
   const formattedOverallIncome = overallIncome.toLocaleString();
   const formattedTaxableIncome = taxableIncome.toLocaleString();
   const formattedTaxAmount = taxAmount.toLocaleString();

   // Display tax calculation result in modal
   const modalContent = document.querySelector('.modal-content');

modalContent.innerHTML = `
                              <h1>Your overall income will be</h1>
                              <p>${formattedOverallIncome}</p>
                             <p>after tax deductions</p>
                             <button class="close">Close</button>`;

    // Show modal
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
});

// Close modal when close button is clicked
document.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target.classList.contains('close')) {
        modal.style.display = 'none';
    }
});
