// imrs
import React, { useState } from 'react';
import Login from './Login/Login'
import Signup from './Signup/Signup'

// sfc
const Auth = () => {

    const [showLogin, setShowLogin] = useState(true);

    function handleToggle(){
        
    //     if(showLogin ===true){
    //         setShowLogin(false)    //<----LONG WAY
    //     } else {
    //         setShowLogin(true)
    //     }
    // }

    setShowLogin(!showLogin)         // SHORT WAY
    }
    return ( 
    <div>
        {showLogin === true ? <Login/> : <Signup/> }

        <button onClick= {handleToggle}>Click To Toggle</button>
    </div> 
    );
};
 
export default Auth;

