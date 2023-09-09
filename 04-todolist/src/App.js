import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UsersList from './components/UsersList';


function App() {
  const[inputList , setInputList] = useState([])
  function saveHandler(uname , uage){
    setInputList((prev)=>{
      return [
        ...prev , {name:uname, age:uage , id:Math.random().toString()}
      ]
    })

  }
  
  return (
    <div>
    <AddUser onAdd={saveHandler}/>
    <UsersList users={inputList}/>

    </div>
  );
}

export default App;
