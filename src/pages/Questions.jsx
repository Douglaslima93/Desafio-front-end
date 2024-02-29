import React, {useState, useEffect, useContext} from "react";
import './Questions.css';
import NavBar from "../components/NavBar";
import axios from 'axios';
import { UserNameContext } from "../contexts/userNameContext";
import { useNavigate } from "react-router-dom";


const Questions = () => {

    const {acertos, handleSetacertos} = useContext(UserNameContext)
    const Navigate = useNavigate()
    const [data, setData] = useState();
    const [perguntaNumero, setPerguntaNumero] = useState(0)

    function embaralharArray() {
        let arr = [1,2,3]
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]]; // Troca os elementos
        }
        return arr;
    }

    function handleNext(certa) {
        if(perguntaNumero < 4) {
            setPerguntaNumero((prev) => prev + 1)
        }
        if(certa) {
            handleSetacertos()
            console.log('acertou: ' + acertos)
        }
         if(perguntaNumero === 4) {
            Navigate('/score')
        }
    }

    const order = embaralharArray()
    useEffect(() => {
        axios.get('https://be-teste-tec-b5dc1a90bbd0.herokuapp.com/api/atividades/list')
        .then(response => setData(response.data)) 
    }, [acertos]); 


    return (
        <section className="secao-perguntas">
            <NavBar/>
            <div className="quadro">
            <div className="quadro-perguntas">
                <p className="perguntas">{data?.data[perguntaNumero]?.pergunta}</p>
                <button onClick={() => handleNext(true)} style={{order: order[0]}}>{data?.data[perguntaNumero]?.resposta_correta}</button>
                <button onClick={() => handleNext(false)} style={{order: order[1]}}>{data?.data[perguntaNumero]?.resposta_errada1}</button>
                <button onClick={() => handleNext(false)} style={{order: order[2]}}>{data?.data[perguntaNumero]?.resposta_errada2}</button>
            </div>
            </div>
        </section>
    )
}

export default Questions;