import React, { useContext } from "react";
import './Score.css';
import { UserNameContext } from "../contexts/userNameContext";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Score = () => {
    const {acertos, name, erros} = useContext(UserNameContext)
    return (

        <section>
        <NavBar/>
        <div className="score">
            <h1>Score</h1>

            <div className="card-score">
            <p> Acertos <span>{acertos}</span></p>
            <p>Erros <span>{erros}</span></p>
            <p>Porcentagem  <span>{(acertos * 1)*20 }%</span></p>
            </div>

        </div>
        </section>
    )
}
//<progress value={(acertos * .1)} max="5">Porcentagem</progress>
export default Score;