import React from "react";

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
            <aside>
                <h2> Estudos do Dia: </h2>
                <ul>
                    {tarefas.map((item, index) => (
                        <li>
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