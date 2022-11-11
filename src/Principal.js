import './App.css';
import {daggers, swords} from './Database';

function Principal() {
    const vetor = ["Shop: "];
    return(
        <div className="Container-equipamento">
            <div className="Tipo-equipamento">
                <div className="Equipamento">Weapon</div>
                <div className="Descricao">Como adquirir</div>
                <div className='Equipamento' >{swords[0].Nome}</div>
                <div className="Descricao">{vetor[0]}</div>
            </div>
        </div>
    );
}

export default Principal;