import React from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Forms"
import Lista from "../components/Lista"
import './style.scss';

export default function App() {
    return (
        <>
            <div className="AppStyle">
                <Formulario />
                <Lista />
            </div>
        </>
    )
}