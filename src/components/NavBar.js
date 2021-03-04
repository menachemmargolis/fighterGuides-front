import React,{useState} from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import Profile from "./Profile"

function NavBar(){
    return(
       <header>

            <h1>
               <span> FighterGuidez </span>
            </h1> 
            <nav>
                <NavLink exact className="button" to="/profile" >Profile</NavLink><br></br>
                <NavLink exact className="button" to="/characters">Characters</NavLink><br></br>
                <NavLink exact className="button" to="/guides">Guides</NavLink><br></br>
                <NavLink exact className="button" to="/">Home</NavLink>
            </nav>

        </header> 
    )
}

export default NavBar;