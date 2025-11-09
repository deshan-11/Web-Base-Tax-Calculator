 document.addEventListener("DOMContentLoaded", function () {
            // Withholding tax calculation
            const calcButton = document.getElementById("calculateWithholding");
            const amount = document.getElementById("withholdingAmount");
            const result = document.getElementById("withholdingTax");

            const rent = document.getElementById("rent-Tax");
            const bank = document.getElementById("bank-Tax");
            const divid = document.getElementById("divid-Tax");

            calcButton.addEventListener("click", function () {
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

                // Display Result
                if (tax === 0) {
                    result.innerText = `${taxType}: No tax (Amount too low)`;
                    result.classList.remove("text-success");
                    result.classList.add("text-warning");
                } else {
                    result.innerText = `${taxType}: Rs. ${tax.toFixed(2)}`;
                    result.classList.remove("text-danger", "text-warning");
                    result.classList.add("text-success");
                }
                
                result.style.transition = "0.3s";
                result.style.transform = "scale(1.1)";
                setTimeout(() => (result.style.transform = "scale(1)"), 300);
            });

            // Navigation highlighting
            document.querySelectorAll(".sidebar .nav-link").forEach(link => {
                link.addEventListener("click", () => {
                    document.querySelectorAll(".sidebar .nav-link").forEach(e => e.classList.remove("active"));
                    link.classList.add("active");
                });
            });
        });

        function paybleTax() {
            let amount = document.getElementById("payble-tax");
            let result = document.getElementById("paybleTax");
            let salary = parseFloat(amount.value);
            let taxType = "Payable Tax";

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
                result.innerText = `${taxType}: No tax (Amount too low)`;
                result.classList.remove("text-success");
                result.classList.add("text-warning");
            } else {
                result.innerText = `${taxType}: Rs. ${tax.toFixed(2)}`;
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
            let taxType = "Income Tax";

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
                result.innerText = `${taxType}: No tax (Amount too low)`;
                result.classList.remove("text-success");
                result.classList.add("text-warning");
            } else {
                result.innerText = `${taxType}: Rs. ${tax.toFixed(2)}`;
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
            let taxType = "SSCL Tax";

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
                sale.innerText = `Rs. ${saleTax.toFixed(2)}`;
            }
            if (saleAmount) {
                saleAmount.innerText = `Rs. ${afterSaleTax.toFixed(2)}`;
            }
            if (vat) {
                vat.innerText = `Rs. ${Vat.toFixed(2)}`;
            }

            result.innerText = `${taxType}: Rs. ${SSCL.toFixed(2)}`;
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

            let installment = parseFloat(MonthyInstallment.value);
            let year = parseInt(yearInput.value);
            let rate = parseFloat(rateInput.value);
            let taxType = "Leasing Calculation";

            if (isNaN(installment) || installment <= 0 || isNaN(year) || year <= 0 || isNaN(rate) || rate <= 0) {
                result.innerText = "! Invalid Input";
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
            
            let i = (rate/100);
            let n = year * 12;
            
            let loanAmount = installment * ((1 - Math.pow(1 + i, -n)) / i);

            result.innerText = `${taxType}: Rs. ${loanAmount.toFixed(2)}`;
            result.classList.remove("text-danger", "text-warning");
            result.classList.add("text-success");

            result.style.transition = "0.3s";
            result.style.transform = "scale(1.1)";
            setTimeout(() => (result.style.transform = "scale(1)"), 300);
        }

        function clearForm(){
            // Withholding Tax
            document.getElementById("withholdingAmount").value = "";
            document.getElementById("withholdingTax").innerText = "Rs. 0.00";
            document.getElementById("withholdingTax").classList.remove("text-success", "text-danger", "text-warning");

            // Payable Tax
            document.getElementById("payble-tax").value = "";
            document.getElementById("paybleTax").innerText = "Rs. 0.00";
            document.getElementById("paybleTax").classList.remove("text-success", "text-danger", "text-warning");

            // Income tax
            document.getElementById("income-tax").value = "";
            document.getElementById("incomeTax").innerText = "Rs. 0.00";
            document.getElementById("incomeTax").classList.remove("text-success", "text-danger", "text-warning");

            // SSCL Tax
            document.getElementById("sscl-tax").value = "";
            document.getElementById("sale-tax").innerText = "Rs. 0.00";
            document.getElementById("after-sale-amount").innerText = "Rs. 0.00";
            document.getElementById("vat-tax").innerText = "Rs. 0.00";
            document.getElementById("ssclTax").innerText = "Rs. 0.00";
            document.getElementById("ssclTax").classList.remove("text-success", "text-danger", "text-warning");

            // Leasing Calculation
            document.getElementById("leasing-tax").value = "";
            document.getElementById("year-leasing").value = "";
            document.getElementById("Monthly-rate").value = "";
            document.getElementById("leasingTax").innerText = "Rs. 0.00";
            document.getElementById("leasingTax").classList.remove("text-success", "text-danger", "text-warning");
        }
