import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
import ExpensesFilter from './ExpenseFilter'

const Expenses = ({ items }) => {
    const [filterData, setFilterData] = useState("2020")

    function FilterSelectedYear(selectedYear) {
        setFilterData(selectedYear);

    }


    const filteredExpenses = items.filter((expense) => {
        return new Date(expense.date).getFullYear().toString() === filterData;
    })

    return (
        <div className='expenses'>
            <ExpensesFilter
                selected={filterData}
                onChangeFilterData={FilterSelectedYear}

            />
            {
                filteredExpenses.length === 0 ? (<p>No data found</p>
                ) :
                    (filteredExpenses.map((expense) => {
                        return (
                            <div key={items.id}> <ExpenseItem title={expense.title} date={expense.date} amount={expense.amount} />
                            </div>)
                    }))
            }

        </div>
    )
}

export default Expenses;
