import style from './Cronometro.module.scss'
import Botao from '../Botao'
import Relogio from './Relogio'

export default function Cronometro() {
    return(
        <>
            <div className={style.cronometro}>
                <p className={style.titulo}> Escolha um card e inicie o cronometro! </p>

                <div className={style.relogioWrapper}>
                    <Relogio />
                </div>

                <Botao texto='Iniciar'/>
            </div>
        </>
    )
}