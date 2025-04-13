// src/redux/expenseSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
  id: string;
  title: string;
  amount: number;
  date: string;
}

const initialState: Expense[] = [];

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.push(action.payload);
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
