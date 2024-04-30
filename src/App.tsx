import React from "react"
import Botao from "./components/Botao"
import Formulario from "./components/Forms"
import Lista from "./components/Lista"

export default function App() {
    return (
        <>
            <div className="App">
                <Formulario />
                <Lista />
            </div>
        </>
    )
}