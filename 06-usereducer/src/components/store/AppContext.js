import React, { useState } from "react";


const AppContext = createContext({
    isLoggeedIn:false
})

export const AppContextProvider=(props)=>{
    const[isLoggedIn , setIsLoggedIn] = useState(false);

    const logoutHandler=()=>{
        setIsLoggedIn(false);
    }
    const loginHandler=()=>{
        setIsLoggedIn(true);;
    }

    const value ={
        isLoggedIn:isLoggedIn,
        onLogout:logoutHandler,
        onLogin:loginHandler
    }


    return <AppContext.Provider  value={value}>{props.children}</AppContext.Provider>
}


export default AppContext;