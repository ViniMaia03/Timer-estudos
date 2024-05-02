import React from "react";
import Botao from "../Botao";
import style from './Forms.module.scss';

class Formulario extends React.Component {
    render() {
        return(
            <>
                <form className={ style.novaTarefa }>
                    <div className={ style.inputContainer }>
                        <label htmlFor="tarefa"> Adicione seu novo estudo: </label>
                        <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required />
                    </div>

                    <div className={ style.inputContainer }>
                        <label htmlFor="tempo"> Tempo: </label>
                        <input type="time" name="tempo" step="1" id="tempo" min="00:00:00" max="99:59:59" required />
                    </div>
                    <Botao texto="Adicionar" />
                </form>
            </>
        )
    }
}

export default Formulario;