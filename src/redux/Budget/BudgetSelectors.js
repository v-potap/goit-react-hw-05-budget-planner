export const getBudget = state => state.budget;

export const getExpenses = state => state.expenses;

export const getExpensesTotal = store =>
  getExpenses(store).reduce(
    (total, expense) => total + Number(expense.amount),
    0,
  );

export const getBalance = store => getBudget(store) - getExpensesTotal(store);
