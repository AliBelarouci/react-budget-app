import React from 'react'
import { AddExpenseForm } from './AddExpenseForm';
import { AppProvider } from './AppContext';
import { Budget } from './Budget'
import { ExpenseTotal } from './Expens';
import { ExpenseList } from './ExpenseList';
import { Remaining } from './Remaining'

export const AppBudget = () => {
  return (
    <AppProvider>
    <div className="container">
      <div className="mt-3">
        <h1>Budget Management App</h1>
        <div className="row ">
          <div className="col-md-6">
            <Budget />
          </div>
          <div className="col-md-3">
            <Remaining />
          </div>
          <div className="col-md-3">
            <ExpenseTotal />
          </div>
          <h3 className='mt-3'>Expenses</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
                <ExpenseList/>
            </div>
          </div>
          <h3 className='mt-3'>Add Expense</h3>
          <div className='col-sm'>
            <AddExpenseForm/>
          </div>
        </div>
      </div>
    </div>
    </AppProvider>
  );
}
