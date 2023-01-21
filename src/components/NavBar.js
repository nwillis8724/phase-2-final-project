import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";

function NavBar({currentUser}){

    const linkStyles = {
        display: "inline-block",
        width: "5%",
        height: "1%",
        padding: ".75%",
        background: "black",
        textDecoration: "none",
        color: "white",
      };

    return (
        <div id="navBar">
            <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "aqua",
        }}
      >
        Home
      </NavLink>
      {currentUser === "" ? <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{
          background: "aqua",
        }}
      >
        Login
      </NavLink> : null}
      <NavLink
        to="/uploadform"
        exact
        style={linkStyles}
        activeStyle={{
          background: "aqua",
        }}
      >
        Upload
      </NavLink>
        <NavLink
          to="/displaypage"
          exact
          style={linkStyles}
          activeStyle={{
            background: "aqua",
          }}
        >
          Display
        </NavLink>
        </div>
    )
}

export default NavBar