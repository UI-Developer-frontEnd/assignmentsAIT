function taxCalculator(){
    let taxPayerName = document.getElementById("userName").value;
    let taxPayerSalary = document.getElementById("userSal").value;
    
    if(taxPayerSalary <= 300000){
       document.getElementById("noTax").innerHTML =`<h4>${taxPayerName} you are tax free Employee</h4>`;
       document.getElementById("tenPercent").value = 0;
       document.getElementById("twentyPercent").value = 0;
    }else if(taxPayerSalary <= 600000){debugger;
        let deductionTen = (taxPayerSalary-300000)*0.1;
        document.getElementById("tenPercent").value = deductionTen;
       document.getElementById("twentyPercent").value = 0;
       document.getElementById("totTax").value = deductionTen;
       document.getElementById("noTax").innerHTML =`<h4>${taxPayerName} you are taxable Employee</h4>`;
    }else if(taxPayerSalary > 600000){debugger;
        let deduction1 = 30000;
        let deduction2 = (taxPayerSalary - 600000)*0.2;
       document.getElementById("twentyPercent").value = deduction2;
       document.getElementById("tenPercent").value =deduction1;
        let totalTax = deduction1+deduction2;
        console.log(totalTax);
        document.getElementById("totTax").value = totalTax
    }
}
function dark() {
    document.getElementById("boddy").classList.add("dark-mode")
}
function lite() {
    document.getElementById("boddy").classList.add("lite-mode")
}