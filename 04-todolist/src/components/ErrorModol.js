import React from 'react'

const ErrorModol = ({title,message}) => {
    return (
        <div>
            <header>
                <h2>
{title}
                </h2>
            </header>
            <div>
                <p>
{message}
                </p>
            </div>
            <footer>
<button>Okay</button>
            </footer>
        </div>
    )
}

export default ErrorModol
