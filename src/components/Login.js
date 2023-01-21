import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


function Login({ setCurrentUser, currentUser, handleUser }) {
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault(e)
        history.push("/uploadform")
    }
    return (
      <div>
        <h1>Login</h1>
        <form id="login_form" onSubmit={handleSubmit}>
          <div>
            <input className="login_input" type="text" name="username" placeholder="Username" onChange={handleUser} />
          </div>
          <div>
            <input className="password_input" type="password" name="password" placeholder="Password" />
          </div>
          <input className="login_submit" type="submit" value="Login" />
        </form>
      </div>
    );
  }

export default Login