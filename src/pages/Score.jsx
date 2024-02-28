import React, { useContext } from "react";
import './Score.css';
import { UserNameContext } from "../contexts/userNameContext";

const Score = () => {

    const {acertos, name} = useContext(UserNameContext)
    return (
        <div>
            <h1>Olá {name} seu score é: {acertos}</h1>
            <progress value={acertos} max="5">70 %</progress>
        </div>
    )
}

export default Score;