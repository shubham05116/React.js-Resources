import React, { useState } from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = ({expenseData}) => {

const[isAdd , setIsAdd] = useState(false);
  function SaveExpenseData(enterData) {

    const addexpense = {
      ...enterData,
      id: Math.random().toString(),
    }
    // console.log(addexpense)
    expenseData(addexpense);


  }

  function addExpenseHandler(){
    setIsAdd(true);
  }

  function stopAddHandler(){
    setIsAdd(false)
  }

  return (
    <div className='new-expense'>

    {
      !isAdd && <button onClick={addExpenseHandler}>Add New Expense</button>
    }
    {
      isAdd &&<ExpenseForm
      onCancel={stopAddHandler}
       onSaveData={SaveExpenseData} />

    }

    </div>
  )
}

export default NewExpense
