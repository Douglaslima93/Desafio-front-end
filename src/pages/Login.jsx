import React, { useContext } from "react";
import './Login.css';
import { Link } from "react-router-dom";  
import { UserNameContext } from "../contexts/userNameContext";

const Login = () => {
    /*const [nomeUsuario, setNomeUsuario] = useState('');
    const handleChange = (event) => {
        setNomeUsuario(event.target.value);
        
    };*/

    const {name,handleSetname} = useContext(UserNameContext)

  
    return (
        <div className="login">
        <h1>Nome</h1>
        <input type="text" value={name} onChange={(e) => handleSetname(e.target.value)} placeholder="Digite o seu nome:"/>
        <Link to={'questions/:id'}><input className="acessar" type="submit" value="Acessar"/></Link>
        </div>
    )
}

export default Login;