import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
    const [addexpense, setAddExpense] = useState({
        title: "",
        amount: "",
        date: "",
    });

    function changeHandler(e) {
        setAddExpense((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    function submitHandler(e) {
        e.preventDefault();
        // console.log(addexpense);
        props.onSaveData(addexpense);
        setAddExpense({
            title: "",
            amount: "",
            date: "",
        });
    }





    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label htmlFor="">Title</label>
                        <input
                        required
                         type="text" name="title" value={addexpense.title} id="" onChange={changeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Amount</label>
                        <input 
                        required
                        type="number" name="amount" value={addexpense.amount} min="0.01" step={"0.01"} onChange={changeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label htmlFor="">Date</label>
                        <input
                        required
                         type="date" name="date" value={addexpense.date} min="2019-01-01" max="2022-12-31" onChange={changeHandler} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm
