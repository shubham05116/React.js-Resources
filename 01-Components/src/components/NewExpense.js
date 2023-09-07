import React from 'react'
import "./NewExpense.css"
import ExpenseForm from './ExpenseForm'

const NewExpense = ({expenseData}) => {

  function SaveExpenseData(enterData) {

    const addexpense = {
      ...enterData,
      id: Math.random().toString(),
    }
    // console.log(addexpense)
    expenseData(addexpense);


  }

  return (
    <div className='new-expense'>
    
      <ExpenseForm onSaveData={SaveExpenseData} />
    </div>
  )
}

export default NewExpense
