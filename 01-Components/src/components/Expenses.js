import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpensesFilter from './ExpenseFilter'

const Expenses = ({ items }) => {
    const [filterData, setFilterData] = useState("2020")

    function FilterSelectedYear(selectedYear) {
        setFilterData(selectedYear);

    }
    return (
        <div className='expenses'>
            <ExpensesFilter
                selected={filterData}
                onChangeFilterData={FilterSelectedYear}

            />
            {
                items.map((expense) => {
                    return <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
                })
            }

        </div>
    )
}

export default Expenses;
