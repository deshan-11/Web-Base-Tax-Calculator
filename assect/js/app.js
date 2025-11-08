console.log("tax");

document.addEventListener("DOMContentLoaded", function () {
    //withholding tax
    const calc = document.querySelector(".card button");
    const amount = document.getElementById("withholdingAmount");
    const result = document.getElementById("withholdingTax");

    const rent = document.getElementById("rent-Tax");
    const bank = document.getElementById("bank-Tax");
    const divid = document.getElementById("divid-Tax");

    calc.addEventListener("click", function () {
        const TaxAmount = parseFloat(amount.value);
        let tax = 0;
        let taxType = "";

        if (isNaN(TaxAmount) || TaxAmount <= 0) {
            result.innerText = "! Invalid amount";
            result.classList.remove("text-success");
            result.classList.add("text-danger");
            return;
        }

        if (rent.checked) {
            taxType = "Rent Tax";
            if (TaxAmount > 100000) {
                tax = TaxAmount * 0.10;
            }
        } else if (bank.checked) {
            taxType = "Bank Tax";
            if (TaxAmount > 0) {
                tax = TaxAmount * 0.05;
            }
        } else if (divid.checked) {
            taxType = "Dividend Tax";
            if (TaxAmount > 100000) {
                tax = TaxAmount * 0.14;
            }
        } else {
            result.innerText = "Please select a tax type";
            result.classList.remove("text-success");
            result.classList.add("text-danger");
            return;
        }

        //Display Resalt
        if (tax === 0) {
            result.innerText = ` ${taxType} : No tax Amount to low `;
            result.classList.remove("text-warning");
        } else {
            result.innerText = ` ${taxType} : Rs .${tax.toFixed(2)}`;
            result.classList.remove("text-danger", "text-warning");
            result.classList.add("text-success");
        }
        result.style.transition = "0.3s";
        result.style.transform = "scale(1.1)";
        setTimeout(() => (result.style.transform = "scale(1)"), 300);

    });
});

function paybleTax() {

    let amount = document.getElementById("payble-tax");
    let result = document.getElementById("paybleTax");
    let salary = parseFloat(amount.value);
    let taxType = "Payble Tax"

    if (isNaN(salary) || salary <= 0) {
        result.innerText = "! Invalid Salary";
        result.classList.remove("text-success");
        result.classList.add("text-danger");
        return;
    }

    let tax = 0;
    if (salary > 308333) {
        tax += (salary - 308333) * 0.36;
        salary = 308333;
    }
    if (salary > 266667) {
        tax += (salary - 266667) * 0.30;
        salary = 266667;
    }
    if (salary > 225000) {
        tax += (salary - 225000) * 0.24;
        salary = 225000;
    }
    if (salary > 183333) {
        tax += (salary - 183333) * 0.18;
        salary = 183333;
    }
    if (salary > 141667) {
        tax += (salary - 141667) * 0.12;
        salary = 141667;
    }
    if (salary > 100000) {
        tax += (salary - 100000) * 0.06;
        salary = 100000;
    }

    if (tax === 0) {
        result.innerText = ` ${taxType} : No tax Amount to low `;
        result.classList.remove("text-warning");
    } else {
        result.innerText = ` ${taxType} : Rs .${tax.toFixed(2)}`;
        result.classList.remove("text-danger", "text-warning");
        result.classList.add("text-success");
    }
    result.style.transition = "0.3s";
    result.style.transform = "scale(1.1)";
    setTimeout(() => (result.style.transform = "scale(1)"), 300);
}

function incomTax() {

    let amount = document.getElementById("income-tax");
    let result = document.getElementById("incomeTax");
    let salary = parseFloat(amount.value);
    let taxType = "Payble Tax"

    if (isNaN(salary) || salary <= 0) {
        result.innerText = "! Invalid Salary";
        result.classList.remove("text-success");
        result.classList.add("text-danger");
        return;
    }

    let tax = 0;
    if (salary > 3700000) {
        tax += (salary - 3700000) * 0.36;
        salary = 3700000;
    }
    if (salary > 3200000) {
        tax += (salary - 3200000) * 0.30;
        salary = 3200000;
    }
    if (salary > 2700000) {
        tax += (salary - 2700000) * 0.24;
        salary = 2700000;
    }
    if (salary > 2200000) {
        tax += (salary - 2200000) * 0.18;
        salary = 2200000;
    }
    if (salary > 1700000) {
        tax += (salary - 1700000) * 0.12;
        salary = 1700000;
    }
    if (salary > 1200000) {
        tax += (salary - 1200000) * 0.06;
        salary = 1200000;
    }

    if (tax === 0) {
        result.innerText = ` ${taxType} : No tax Amount to low `;
        result.classList.remove("text-warning");
    } else {
        result.innerText = ` ${taxType} : Rs .${tax.toFixed(2)}`;
        result.classList.remove("text-danger", "text-warning");
        result.classList.add("text-success");
    }
    result.style.transition = "0.3s";
    result.style.transform = "scale(1.1)";
    setTimeout(() => (result.style.transform = "scale(1)"), 300);
}

function ssclTax() {

    let amount = document.getElementById("sscl-tax");
    let sale = document.getElementById("sale-tax");
    let saleAmount = document.getElementById("after-sale-amount");
    let vat = document.getElementById("vat-tax");
    let result = document.getElementById("ssclTax");
    let salary = parseFloat(amount.value);
    let taxType = "SSCL Tax"

    if (isNaN(salary) || salary <= 0) {
        result.innerText = "! Invalid Salary";
        result.classList.remove("text-success");
        result.classList.add("text-danger");
        return;
    }



    let saleTax = salary * 0.025;
    let afterSaleTax = salary + saleTax;
    let Vat = afterSaleTax * 0.15;
    let SSCL = saleTax + Vat;

    if (sale) {
        sale.innerText = ` Rs .${saleTax.toFixed(2)}`;
    }
    if (saleAmount) {
        saleAmount.innerText = ` Rs .${afterSaleTax.toFixed(2)}`;
    }
    if (vat) {
        vat.innerText = ` Rs .${Vat.toFixed(2)}`;
    }

    result.innerText = ` ${taxType} : Rs .${SSCL.toFixed(2)}`;
    result.classList.remove("text-danger", "text-warning");
    result.classList.add("text-success");

    result.style.transition = "0.3s";
    result.style.transform = "scale(1.1)";
    setTimeout(() => (result.style.transform = "scale(1)"), 300);
}

function LeasingCalculation() {
    const MonthyInstallment = document.getElementById("leasing-tax");
    const yearInput = document.getElementById("year-leasing");
    const rateInput = document.getElementById("Monthly-rate");
    const result = document.getElementById("leasingTax");

    let salary = parseFloat(MonthyInstallment.value);
    let year = parseInt(yearInput.value);
    let rate = parseFloat(rateInput.value);
    let taxType = "Leasing Calculation";

    if (isNaN(salary) || salary <= 0 || isNaN(year) || year <= 0 || isNaN(rate) || rate <= 0) {
        result.innerText = "! Invalid Salary";
        result.classList.remove("text-success");
        result.classList.add("text-danger");
        return;
    }

    if(year > 5){
        result.innerText = "! Year must be <= 5";
        result.classList.remove("text-success");
        result.classList.add("text-danger");
        return;
    }
    
    let i;
    let n;
    if(year === 1){
         i = (rate/100) * 12;
        n = year *12;
    }else if(year === 2){
         i = (rate/100) * 12;
        n = year *12;
    }else if(year === 3){
         i = (rate/100) * 12;
        n = year *12;
    }else if(year === 4){
         i = (rate/100) * 12;
        n = year *12;
    }else if(year === 5){
         i = (rate/100) * 12;
        n = year *12;
    }
    
    let loanAmount = salary * (1 - (1 / Math.pow(1 + i, n))) / i;
    

    result.innerText = ` ${taxType} : Rs .${loanAmount.toFixed(2)}`;
    result.classList.remove("text-danger", "text-warning");
    result.classList.add("text-success");

    result.style.transition = "0.3s";
    result.style.transform = "scale(1.1)";
    setTimeout(() => (result.style.transform = "scale(1)"), 300);

}
document.addEventListener("click", paybleTax());
document.addEventListener("click", incomTax());
document.addEventListener("click", ssclTax());
document.addEventListener("click", LeasingCalculation());

function Clear(){
    //Withhollding Tax
    document.getElementById("withholdingAmount").value = "Enter Amount";
    document.getElementById("withholdingTax").innerText = " ";

    document.getElementById("rent-Tax").checked = "True";
    document.getElementById("bank-Tax").checked = "false";
    document.getElementById("divid-Tax").checked = "false";


    //Payble Tax
    document.getElementById("payble-tax").value = "Enter Amount";
    document.getElementById("paybleTax").innerText = " ";

    //Income tax
    document.getElementById("income-tax").value = "Enter Amount";
    document.getElementById("incomeTax").innerText = " ";

    //SSCL Tax
    document.getElementById("sscl-tax").value = "Enter Amount";
    document.getElementById("sale-tax").innerText = " ";
    document.getElementById("after-sale-amount").innerText = " ";
    document.getElementById("vat-tax").innerText = " ";
    document.getElementById("ssclTax").innerText = " ";

    //Leasing Calculation
     document.getElementById("leasing-tax").value =  "Enter Amount";
     document.getElementById("year-leasing").value = "Enter Year";
     document.getElementById("Monthly-rate").value = "Enter Interest";
     document.getElementById("leasingTax").innerText = "";
}

 document.querySelectorAll(".sidebar .nav-link").forEach(card =>{
    card.addEventListener("click" , () =>{
        document.querySelectorAll(".sidebar .nav-link").forEach(e => e.classList.remove("active"));
        card.classList.add("active");
    });
 });


