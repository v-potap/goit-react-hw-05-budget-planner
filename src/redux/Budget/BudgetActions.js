export const Type = {
  BUDGET_CHANGE: 'BUDGET_CHANGE',
  EXPENSE_ADD: 'EXPENSE_ADD',
  EXPENSE_DELETE: 'EXPENSE_DELETE',
};

export const changeBudget = amount => ({
  type: Type.BUDGET_CHANGE,
  payload: { amount },
});

export const addExpense = expense => ({
  type: Type.EXPENSE_ADD,
  payload: { expense },
});

export const deleteExpense = id => ({
  type: Type.EXPENSE_DELETE,
  payload: { id },
});
