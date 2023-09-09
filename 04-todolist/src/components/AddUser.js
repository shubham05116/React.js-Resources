import React, { useState } from 'react'
import Card from '../Card';

const AddUser = ({onAdd}) => {

    const[enteredUsername , setEntereredUsername] = useState('')
    const[enteredAge , setEntereredAge] = useState('')


    function addUserHandler(e) {
        e.preventDefault();
        if(enteredAge<1 || enteredAge==="" ||enteredUsername==="")
        {
            console.log("not valid")
        }
        // console.log(enteredAge,enteredUsername)
        onAdd(enteredUsername , enteredAge)
        setEntereredAge("")
        setEntereredUsername("")


    }

    function UserchangeHandler(e){
        setEntereredUsername(e.target.value)

    }

    function AgechangeHandler(e){
setEntereredAge(e.target.value)
    }

    

    return (
        <div>
            <Card>
                <form action="" onSubmit={addUserHandler} >
                    <label htmlFor="username">Username</label>
                    <br />

                    <input type="text" id="username" value={enteredUsername} onChange={UserchangeHandler} />
                    <br /><br />

                    <label htmlFor="age">Age</label>
                    <br />

                    <input type="number" value={enteredAge} id="age"  onChange={AgechangeHandler}/>
                    <br /><br />

                    <button type='submit'>Add User</button>
                </form>
            </Card>
        </div>
    )
}

export default AddUser
