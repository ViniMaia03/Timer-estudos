import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Forms";
import Lista from "../components/Lista";
import style from './App.module.scss';
import Cronometro from '../components/Cronometro'

export default function App() {
    return (
        <>
            <div className={style.AppStyle}>
                <Formulario />
                <Lista />
                <Cronometro />
            </div>
        </>
    )
}