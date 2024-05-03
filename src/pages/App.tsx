import React from "react";
import Formulario from "../components/Forms";
import Lista from "../components/Lista";
import style from './App.module.scss';
import Cronometro from '../components/Cronometro'
import { useState } from "react";
import { ITarefa } from "../types/tarefa";

export default function App() {

    const [tarefas, setTarefas] = useState<ITarefa[]>([]);

    return (
        <>
            <div className={style.AppStyle}>
                <Formulario setTarefas={setTarefas} />
                <Lista tarefas={tarefas} />
                <Cronometro />
            </div>
        </>
    )
}