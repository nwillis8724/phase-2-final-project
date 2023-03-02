import React from "react"

    function SignOut({handleSignOut}){
        return (
            <button onClick={() => handleSignOut()} className="signout_button">SignOut</button>
        )
    }

export default SignOut