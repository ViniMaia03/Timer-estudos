import React from "react";
import Botao from "../Botao";

class Formulario extends React.Component {
    render() {
        return(
            <>
                <form action="">
                    <div>
                        <label htmlFor="tarefa"> Adicione seu novo estudo: </label>
                        <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar?" required />
                    </div>

                    <div>
                        <label htmlFor="tempo"> Tempo: </label>
                        <input type="time" name="tempo" step="1" id="tempo" min="00:00:00" max="01:30:00" required />
                    </div>
                    <Botao/>
                </form>
            </>
        )
    }
}

export default Formulario;