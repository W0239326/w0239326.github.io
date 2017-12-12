/**
 * Created by w0239326 on 11/30/2017.
 *
 * var readlineSync = require('readline-sync');

 //Variables and input

 //var net_salary = 1000;
 var net_salary = parseInt(readlineSync.question('Enter your total weekly salary $'));
 //var dependents = 2;
 var dependents = parseInt(readlineSync.question('How many dependents do you have? '));
 var provincial_tax_rate = .06;
 var federal_tax_rate = .25;
 var dependent_deduction_rate = .02;
 var provincial_tax_withheld = 0;
 var federal_tax_withheld = 0;
 var dependent_tax_credit = 0;
 var total_tax = 0;
 var take_home_pay = 0;

 // processing

 provincial_tax_withheld = (net_salary * provincial_tax_rate);
 federal_tax_withheld = (net_salary * federal_tax_rate);
 dependent_tax_credit = dependents * (net_salary * dependent_deduction_rate);
 total_tax = provincial_tax_withheld + (federal_tax_withheld - dependent_tax_credit);
 take_home_pay = (net_salary - total_tax);

 //print results

 console.log(`Provincial tax withheld: $${provincial_tax_withheld.toFixed(2)}`);
 console.log(`Federal tax withheld: $${federal_tax_withheld.toFixed(2)}`);
 console.log(`Dependent deductions for ${dependents} dependents: $${dependent_tax_credit.toFixed(2)}`);
 console.log(`Total pay withheld: $${total_tax.toFixed(2)}`);
 console.log(`Total Take-home pay: $${take_home_pay.toFixed(2)}`);
 */

"use strict";

function GetTaxPayment()
{
    //get target html element
    var target_element = document.getElementById('outputbox');

    var net_salary = parseFloat(document.getElementById('weeklysalary').value);
    var dependents = parseInt(document.getElementById('numberofdependents').value);

    if (isNaN(net_salary) || isNaN(dependents)){

        target_element.value= "Please enter a valid number in both fields";

    }

    else {


        var provincial_tax_rate = .06;
        var federal_tax_rate = .25;
        var dependent_deduction_rate = .02;
        var provincial_tax_withheld = 0;
        var federal_tax_withheld = 0;
        var dependent_tax_credit = 0;
        var total_tax = 0;
        var take_home_pay = 0;


        provincial_tax_withheld = (net_salary * provincial_tax_rate);
        federal_tax_withheld = (net_salary * federal_tax_rate);
        dependent_tax_credit = dependents * (net_salary * dependent_deduction_rate);
        total_tax = provincial_tax_withheld + (federal_tax_withheld - dependent_tax_credit);
        take_home_pay = (net_salary - total_tax);


        target_element.value = `your federal tax is $${federal_tax_withheld.toFixed(2)}\n` +
            `your provincial tax is $${provincial_tax_withheld.toFixed(2)}\n` +
            `your dependents tax deduction is $${dependent_tax_credit.toFixed(2)}\n` +
            `your total pay is $${take_home_pay.toFixed(2)}`;

    }

}


document.getElementById('calculate').addEventListener("click", GetTaxPayment);