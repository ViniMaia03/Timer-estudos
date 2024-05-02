import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Forms";
import Lista from "../components/Lista";
import style from './App.module.scss';

export default function App() {
    return (
        <>
            <div className={style.AppStyle}>
                <Formulario />
                <Lista />
            </div>
        </>
    )
}