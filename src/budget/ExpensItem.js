import React, { useContext } from 'react'
import {TiDelete} from 'react-icons/ti'
import { AppContext } from './AppContext'
export const ExpensItem = ({id,name,cost}) => {
    const {dispatch}=useContext(AppContext)
    const handelOndelete =()=>{
        console.log('sdsd')
        dispatch({
            type:"DELETE_EXPENSE",
            payload:id
        })
    }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {
            name }
            <span  className='badge badge-primary badeg-pill mr-r'>
               $ {cost}
                </span>
               <TiDelete size='1.5em' onClick={handelOndelete}/>
           
       
    </li>
  )
}
