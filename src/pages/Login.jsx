import React, { useContext } from "react";
import './Login.css';
import { Link } from "react-router-dom";  
import { UserNameContext } from "../contexts/userNameContext";

const Login = () => {

    const {name,handleSetname} = useContext(UserNameContext)
    return (
        <section className="secao-login">

        <div className="login">
        <h1>Nome</h1>
        <input type="text" value={name} onChange={(e) => handleSetname(e.target.value)} placeholder="Digite o seu nome:"/>
        <Link to={'questions/:id'}><input className="acessar" type="submit" value="Acessar"/></Link>
        </div>

        </section>
    )
}

export default Login;