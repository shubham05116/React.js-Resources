import React from 'react'
import meals from "../assets/meals.jpg"

const Header = () => {
    return (
        <>

            <header>
                <h1>FoodyHub</h1>
                <button>Cart</button>
            </header>
            <div>
            <img src={meals} alt="" />

            </div>

        </>
    )
}

export default Header
