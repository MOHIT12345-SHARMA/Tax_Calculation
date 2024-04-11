# Tax Calculator

This is a web application that allows users to calculate their taxes based on their income, deductions, and age group.

## Features

- Input fields for gross annual income, extra income, age group, and deductions.
- Tax calculation based on specified rules.
- Error handling for invalid inputs.
- Display of tax calculation results in a modal window.
- ...

## Technologies Used

- HTML
- CSS
- JavaScript

## How to Run

1. Clone this repository to your local machine.
2. Open the project directory in your code editor.
3. Open `index.html` in your web browser to view the application.

## Tests

Example values:

Gross Annual Income: ₹12,00,000 (12 Lakhs)
Extra Income: ₹2,50,000 (2.5 Lakhs)
Age Group: ≥ 40 & < 60
Total Applicable Deductions: ₹1,80,000 (1.8 Lakhs)

Now, let's calculate the expected overall income after deducting taxes based on the provided tax calculation rules:
Taxable Income = Gross Annual Income + Extra Income - Deductions

Taxable Income = ₹12,00,000 + ₹2,50,000 - ₹1,80,000 = ₹12,70,000
Since the taxable income is greater than 8 Lakhs, we need to calculate the tax amount based on the age group:

For age ≥ 40 but < 60, the tax rate is 40%.

Tax Amount = (Taxable Income - 8,00,000) * Tax Rate
           = (₹12,70,000 - ₹8,00,000) * 0.4
           = ₹4,70,000 * 0.4
           = ₹1,88,000
           
Overall Income = Taxable Income - Tax Amount

Overall Income = ₹12,70,000 - ₹1,88,000
               = ₹10,82,000

![Screenshot](Users/mohit/Download/tax_modal.png)

## Hosted Web App

You can access the hosted web app [here](link_to_hosted_web_app).

