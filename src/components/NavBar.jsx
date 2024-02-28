import React from "react";
import './NavBar.css';
import { UserNameContext } from "../contexts/userNameContext"; 
import { useContext } from 'react'

const NavBar = () => {

    const {name} = useContext(UserNameContext)
    
    return (
        
        <nav>
            <p>Nome:{name}</p>
        </nav>
    )
}

export default NavBar;