import React from "react";
import Botao from "../Botao";
import style from './Forms.module.scss';

class Formulario extends React.Component {

    state = {
        tarefa: "",
        tempo: "00:00"
    }

    addTarefa(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    render() {
        return(
            <>
                <form className={ style.novaTarefa } onSubmit={this.addTarefa.bind(this)}>
                    <div className={ style.inputContainer }>
                        <label htmlFor="tarefa"> Adicione seu novo estudo: </label>
                        <input type="text" name="tarefa" id="tarefa" value={this.state.tarefa} onChange={e=> this.setState({...this.state, tarefa: e.target.value})} placeholder="O que você quer estudar?" required />
                    </div>

                    <div className={ style.inputContainer }>
                        <label htmlFor="tempo"> Tempo: </label>
                        <input type="time" name="tempo" step="1" id="tempo" min="00:00:00" value={this.state.tempo} onChange={e=> this.setState({...this.state, tempo: e.target.value})} max="99:59:59" required />
                    </div>
                    <Botao texto="Adicionar" />
                </form>
            </>
        )
    }
}

export default Formulario;