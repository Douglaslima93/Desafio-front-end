import React, { useContext } from "react";
import './Score.css';
import { UserNameContext } from "../contexts/userNameContext";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

const Score = () => {
    const {acertos, name} = useContext(UserNameContext)
    let totalPerguntas = 5
    return (

        <section>
        <NavBar/>
        <div className="score">
            <h1>Score</h1>

            <div className="card-score">
            <p> Acertos <span>{acertos}</span></p>
            <p>Erros <span>{totalPerguntas - acertos}</span></p>
            <p>Porcentagem  <span>{(acertos * 1)*20 }%</span></p>
            <Link to={'/'}><button className="botao-inicio">Inicio</button></Link>
            </div>

        </div>
        
        </section>
    )
}
//<progress value={(acertos * .1)} max="5">Porcentagem</progress>
export default Score;