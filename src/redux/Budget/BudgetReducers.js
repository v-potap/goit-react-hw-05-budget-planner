import { Type } from './BudgetActions';

export const budgetReducer = (prevState = 0, action) => {
  switch (action.type) {
    case Type.BUDGET_CHANGE:
      return action.payload.amount;

    default:
      return prevState;
  }
};

export const expensesReducer = (prevState = [], action) => {
  switch (action.type) {
    case Type.EXPENSE_ADD:
      return [...prevState, action.payload.expense];

    case Type.EXPENSE_DELETE:
      return prevState.filter(item => item.id !== action.payload.id);

    default:
      return prevState;
  }
};
