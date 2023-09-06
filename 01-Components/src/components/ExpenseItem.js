import React, { useState } from 'react'
import "./ExpenseItem.css"
import ExpenseDate from './ExpenseDate';

const ExpenseItem = ({ title, date, amount }) => {

    const [Title , setTitle] = useState(title)

    function clickHandler(){
        setTitle("Updated !!")
        console.log(Title)
    }

  
    return (
        <div className='expense-item'>
            <div>
              <ExpenseDate date={date} />
            </div>
            <div className='expense-item__description'>
                <h2>{Title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>


        </div>
    )
}

export default ExpenseItem
