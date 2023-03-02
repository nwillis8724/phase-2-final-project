import React from "react"

    function SignOut({handleSignOut}){
        console.log("sign out")
        return (
            <button onClick={() => handleSignOut()} className="signout_button">SignOut</button>
        )
    }

export default SignOut