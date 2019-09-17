import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm/BudgetForm';
import ExpenseForm from './ExpenseForm/ExpenseForm';
import ExpensesTable from './ExpensesTable/ExpensesTable';
import Values from './Values/Values';

import * as budgetSelectors from '../redux/Budget/BudgetSelectors';
import * as budgetActions from '../redux/Budget/BudgetActions';

const Container = styled.div`
  display: grid;
  grid-template-columns: 340px 1fr;
  align-items: flex-start;
  grid-gap: 24px;
  max-width: 960px;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
`;

const App = ({
  expenses,
  budget,
  balance,
  totalExpenses,
  saveBudget,
  addExpense,
  deleteExpense,
}) => (
  <Container>
    <BudgetForm onSave={saveBudget} />
    <Values budget={budget} expenses={totalExpenses} balance={balance} />
    <ExpenseForm onSave={addExpense} />
    {expenses.length > 0 && (
      <ExpensesTable items={expenses} onRemove={deleteExpense} />
    )}
  </Container>
);

const mapStateToProps = store => ({
  expenses: budgetSelectors.getExpenses(store),
  budget: budgetSelectors.getBudget(store),
  balance: budgetSelectors.getBalance(store),
  totalExpenses: budgetSelectors.getExpensesTotal(store),
});

const mapDispatchToProps = dispatch => ({
  saveBudget: budget => dispatch(budgetActions.changeBudget(budget)),
  addExpense: expense => dispatch(budgetActions.addExpense(expense)),
  deleteExpense: id => dispatch(budgetActions.deleteExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
