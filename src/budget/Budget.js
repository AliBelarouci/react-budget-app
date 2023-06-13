import React, { useContext, useRef } from 'react'
import { AppContext } from './AppContext'

export const Budget = () => {
    const {budget,dispatch} =useContext(AppContext)
    const extraBudget=useRef()

    const handelAdd2Budget =()=>{
      dispatch({
          type:"Add_To_BUDGET",
          payload:extraBudget.current.value
      })
      extraBudget.current.value=0
  }
  return (
    <div>
        <div className='alert alert-secondary' >
<span>Budget : $ {budget}</span>
<input type="number" ref={extraBudget} />
<button onClick={handelAdd2Budget}>Add to budget</button>
        </div>
    </div>
  )
}
