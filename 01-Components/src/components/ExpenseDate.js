import React from 'react'
import "./ExpenseDate.css"


const ExpenseDate = ({ date }) => {
   

   const month = new Date(date)?.toLocaleString ('en-us', { month: 'long' });
    // console.log (month);

const day = new Date(date)?.toLocaleString ('en-us', {"day":"numeric"} );
const year = new Date(date)?.toLocaleString ('en-us', {"year":"numeric"} );



    return (
        <div className='expense-date'>

            <div className='expense-date__month'>
                {day}
            </div>

            <div className='expense-date__year'>
                {month}
            </div>

            <div className='expense-date__day'>
                {year}
            </div>

        </div>
    )
}

export default ExpenseDate
