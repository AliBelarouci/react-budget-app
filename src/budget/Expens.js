import React, { useContext } from 'react'
import { AppContext } from './AppContext'

export const ExpenseTotal = () => {
    const {expenses} =useContext(AppContext)
    const TotalExpenses =expenses.reduce((total,item)=>{
        return (total=total+item.cost)
    },0)
  return (
    <div className='alert alert-primary'>
        <span>Spent so far :${TotalExpenses}</span>
    </div>
  )
}
