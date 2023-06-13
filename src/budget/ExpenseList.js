import React, { useContext } from 'react'
import { ExpensItem } from './ExpensItem'
import { AppContext } from './AppContext'
export const ExpenseList = () => {
    const {expenses}=useContext(AppContext)
  return (
    <div>
        <ul>
            {expenses.map((item)=>
                (<ExpensItem id={item.id} name={item.name} cost={item.cost} />)
            )}
        </ul>
    </div>
  )
}
