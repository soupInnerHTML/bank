import React from 'react';
import { ExpensesTitle } from '@features/expenses-title/ui';
import { ExpensesHistory } from '@features/expenses-history/ui/expenses-history.tsx';

export const Expenses = () => {
  return (
    <>
      <ExpensesTitle />
      <ExpensesHistory />
    </>
  );
};
