
const budget = document.querySelector('#budget');
const budgetButton = document.querySelector('#budget-button');
const budgetSubmission = document.querySelector('#budgetNumber');

const expenseDescription = document.querySelector('#expense-description');
const expense = document.querySelector('#expense-amount');
const expenseSubmit = document.querySelector('#expense-submit');
const expenseItem = document.querySelector('#expense-items');
const expenseAmount = document.querySelector('#expense-item-amounts');

const totalBalance = document.querySelector('#total-balance');
const totalExpenses = document.querySelector('#total-expenses');

const totalBudget = {
    budget: 0,
    expense: 0,
    balance: 0
}

const budgetSubmit = () => {
    budgetSubmission.innerText = `$${budget.value}`;
    totalBudget.budget = Number(budget.value);
    totalBudget.balance = totalBudget.budget - totalBudget.expense;
    totalBalance.innerHTML = totalBudget.balance;
    budget.value = null;
    console.log(totalBudget);
}

const addExpense = () => {
    //Expense Description
    let newExpense = document.createElement('li');
    newExpense.innerHTML = `- ${expenseDescription.value}`.toUpperCase();
    expenseItem.appendChild(newExpense);

    //Expense Amount
    let newExpenseAmount = document.createElement('li');
    newExpenseAmount.innerHTML = `$${expense.value}`;
    totalBudget.expense += Number(expense.value);
    expenseAmount.appendChild(newExpenseAmount);

    //Total Expenses
    totalExpenses.innerHTML = `$${totalBudget.expense}`;
    
    //Leftover Balance
    totalBudget.balance = totalBudget.budget - totalBudget.expense;
    totalBalance.innerHTML = `$${totalBudget.balance}`;

    expenseDescription.value = null;
    expense.value = null;
    console.log(totalBudget);
}

budgetButton.addEventListener('click', budgetSubmit);
expenseSubmit.addEventListener('click', addExpense);

