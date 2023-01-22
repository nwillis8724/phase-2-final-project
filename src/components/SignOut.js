import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

    function SignOut({handleSignOut}){
        return (
            <button onClick={() => handleSignOut()} className="signout_button">SignOut</button>
        )
    }

export default SignOut