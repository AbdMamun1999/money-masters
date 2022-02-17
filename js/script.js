// get input field value
function getValueOfinputField(inputFieldId){
    const inputField = document.getElementById(inputFieldId)
    const inputFieldText = inputField.value;
    let inputFieldNumber = parseInt(inputFieldText)
    return inputFieldNumber;    
}
// calculate input field value and handle some error
function calculate(){
    const totalIncome = getValueOfinputField('income-field')
    const foodExpense = getValueOfinputField('food-field')
    const rentExpense = getValueOfinputField('rent-field')
    const clothesExpense = getValueOfinputField('clothes-field');
    // total expense id
    const totalExpenseField = document.getElementById('totalEexpense-field')
    // balance id
    const balancedField = document.getElementById('balanced-field');
//    update total Expense and balance
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    totalExpenseField.innerText = totalExpense;
    const balance = totalIncome - totalExpense;
    balancedField.innerText = balance;
// error handle for total expense is not more than income
    const errorMassageThree = document.getElementById('error-massageThree')
    if(totalExpense>totalIncome) {
        errorMassageThree.style.display = 'block'
        balancedField.innerText = 'Balance-empty';
    }
}
// calculate savings part
function calculateSavingsAndRemaining(){
    const totalIncome = getValueOfinputField('income-field')
    const foodExpense = getValueOfinputField('food-field')
    const rentExpense = getValueOfinputField('rent-field')
    const clothesExpense = getValueOfinputField('clothes-field')
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    const balance = totalIncome - totalExpense;
    // percent field 
    const percentField = document.getElementById('percent-field');
    const percentFieldNumber = parseInt(percentField.value)
    // calculate savings
    const savings = (totalIncome * percentFieldNumber)/100;
    console.log(savings);
      // update savings field
    const savingsAmountField = document.getElementById('savingAmount-field')
    // error massage for savings amount
    const errorMassageFour = document.getElementById('error-massageFour')
    const remainingBalance = document.getElementById('remainingBalance-field')
    if(savings>balance){
        errorMassageFour.style.display = 'block';
        savingsAmountField.innerText = '0'
        remainingBalance.innerText = '0'
        
    }
    // update remaining balance
    else{
        savingsAmountField.innerText = savings;
         remainingBalance.innerText = balance - savings;
    }

    
}

document.getElementById('calculate-button').addEventListener('click',function(){
    const totalIncome = getValueOfinputField('income-field')
    const foodExpense = getValueOfinputField('food-field')
    const rentExpense = getValueOfinputField('rent-field')
    const clothesExpense = getValueOfinputField('clothes-field')
    // error massage for input
    const errorMassageOne = document.getElementById('error-massageOne')
    const errorMassageTwo = document.getElementById('error-massageTwo')
    console.log(errorMassageOne)
    if(totalIncome > 0){
        if(foodExpense>0){
            if(rentExpense>0){
                if(clothesExpense>0){
                    calculate()
                }else{
                    if(clothesExpense < 0){
                        errorMassageOne.style.display = 'block'
                    }else if(isNaN(clothesExpense)){
                        errorMassageTwo.style.display = 'block'
                    }
                }
            }else{
                if(rentExpense < 0){
                    errorMassageOne.style.display = 'block'
                }else if(isNaN(rentExpense)){
                    errorMassageTwo.style.display = 'block'
                }
            }
        }else{
            if(foodExpense < 0){
                errorMassageOne.style.display = 'block'
            }else if(isNaN(foodExpense)){
                errorMassageTwo.style.display = 'block'
            }
        }
    }
    else{
        if(totalIncome < 0){
            errorMassageOne.style.display = 'block'
        }else if(isNaN(totalIncome)){
            errorMassageTwo.style.display = 'block'
        }
    }
    
    
    
})
document.getElementById('save-button').addEventListener('click',function(){
    calculateSavingsAndRemaining()
})