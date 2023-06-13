import React, { useContext, useState } from 'react'
import { AppContext } from './AppContext'
import { v4 as uuidv4 } from 'uuid';
export const AddExpenseForm = () => {
    const [name,setName]=useState('')
    const [cost,setCost]=useState('')
    const {dispatch} =useContext(AppContext)
    const onSubmit =(e)=>{
        if(name=='' || cost =='') {
            alert("Enter Name or Cost")
            return
        }
        e.preventDefault()
        const expense={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost)
        }
        dispatch(
            {
                type:"ADD_EXPENSE",
                payload:expense
            }
        )
        setName('')
        setCost('')
    }
  return (
    <div>
        <form>
    <div className="row">
        <div className="col-sm">
            <label for="name" >Name</label>
            <input name={name} onChange={(event)=>setName(event.target.value)} required="required" type="text" id="name" className="form-controle"/>
        </div>
        <div className="col-sm">
            <label for="cost" >Cost</label>
            <input value={cost} onChange={(event)=>setCost(event.target.value)} required="required" type="text" id="cost" className="form-controle"/>
        </div>
        <div className='col-sm' >
            <button onClick={onSubmit} type='submit' className='btn btn-primary' >
                Save
            </button>
        </div>
    </div>
</form>
    </div>
  )
}
