import React, { useState } from 'react'

const Form = (props) => {

    const [inputHandler, setInputHandler] = useState({
        "current-savings": 22345,
        "yearly-contribution": 8,
        "expected-return": 8,
        duration: 45


    })

    function submitHandler(e) {
        e.preventDefault()
        // console.log(inputHandler)
        props.onCalculate(inputHandler)

    }

    function ResetHandler() {
        // console.log("reset")
        setInputHandler({
            "current-savings": 22345,
            "yearly-contribution": 8,
            "expected-return": 8,
            duration: 45
        })

    }

    function changeHandler(input, value) {
        setInputHandler((prev) => {
            return {
                ...prev,
                [input]: value
            }
        })

    }

    return (
        <div>

            <form className="form" onSubmit={submitHandler} >
                <div className="input-group">
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input
                            type="number"
                            id="current-savings"
                            onChange={(e) => changeHandler("current-savings", e.target.value)}
                            value={inputHandler["current-savings"]}
                        />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input
                            type="number"
                            id="yearly-contribution"
                            onChange={(e) => changeHandler("yearly-contribution", e.target.value)}
                            value={inputHandler["yearly-contribution"]}


                        />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number"
                            id="expected-return"
                            onChange={(e) => changeHandler("expected-return", e.target.value)}
                            value={inputHandler["expected-return"]}


                        />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number"
                            id="duration"
                            onChange={(e) => changeHandler("duration", e.target.value)}
                            value={inputHandler["duration"]}


                        />
                    </p>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt"
                        onClick={ResetHandler}>
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>

        </div>
    )
}

export default Form
