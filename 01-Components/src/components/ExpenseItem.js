import React, { useState } from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ title, date, amount }) => {

   
  
    return (
        <div className='expense-item'>
            <div>
              <ExpenseDate date={date} />
            </div>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
          


        </div>
    )
}

export default ExpenseItem
