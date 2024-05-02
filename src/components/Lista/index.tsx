import React from "react";
import style from './Lista.module.scss';

function Lista() {

    const tarefas = [{
    tarefa: 'HTML',
    tempo: '01:30:00'
}, {
    tarefa: 'React',
    tempo: '03:00:00'
}, {
    tarefa: 'Next.js',
    tempo: '02:30:00'
}]

    return(
        <>
            <aside className={style.listaTarefas}>
                <h2> Estudos do Dia: </h2>
                <ul>
                    {tarefas.map((item, index) => (
                        <li className={style.item} key={index}>
                            <h3> {item.tarefa} </h3>
                            <span> {item.tempo} </span>
                        </li>
                    ))}
                </ul>
            </aside>
        </>
    )
}

export default Lista;