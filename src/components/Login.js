import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";


function Login({ handleUser, handleInput }) {
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault(e)
        history.push("/uploadform")
        handleUser()
    }
    return (
      <div>
        <h1>Login</h1>
        <form id="login_form" onSubmit={handleSubmit}>
          <div>
            <input className="login_input" type="text" name="username" placeholder="Username" onChange={handleInput} />
          </div>
          <div>
            <input className="password_input" type="password" name="password" placeholder="Password(doesn't matter)" />
          </div>
          <input className="login_submit" type="submit" value="Login" />
        </form>
      </div>
    );
  }

export default Login