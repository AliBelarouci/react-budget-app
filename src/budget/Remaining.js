import React from 'react'
import { useContext } from 'react'
import { AppContext } from './AppContext'

export const Remaining = () => {
    const {expenses,budget} =useContext(AppContext)
    const TotalExpenses=expenses.reduce((total,item)=>{
        return (total=total+item.cost)
    }
    ,0)
    const alertType = TotalExpenses > budget ? 'alert-danger' : 'alert-success'
  return (
    <div>
        
        <div className={`alert ${alertType}`}>
            <span>Remaining :${budget-TotalExpenses}</span>
        </div>
    </div>
  )
}
