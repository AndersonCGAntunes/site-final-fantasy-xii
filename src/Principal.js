import { useId } from 'react';
import './App.css';
import { axes, bows, crossbows, daggers, greatswords, guns, hammers, handBombs, katanas, maces, measures, ninjaSwords, poles, rods, spears, staves, swords } from './Database';
import ShowHide from './ShowHide';

function Principal() {
    
    return <>
        <div className='container'>
            <ShowHide />
        </div>
        {Reusa(swords, "Swords")}
        {Reusa(daggers, "Daggers")}
        {Reusa(axes, "Axes")}
        {Reusa(hammers, "Hammers")}
        {Reusa(maces, "Maces")}
        {Reusa(measures, "Measures")}
        {Reusa(greatswords, "Greatswords")}
        {Reusa(katanas, "Katanas")}
        {Reusa(ninjaSwords, "Ninja Swords")}
        {Reusa(spears, "Spears")}
        {Reusa(poles, "Poles")}
        {Reusa(rods, "Rods")}
        {Reusa(staves, "Staves")}
        {Reusa(bows, "Bows")}
        {Reusa(crossbows, "Crossbows")}
        {Reusa(guns, "Guns")}
        {Reusa(handBombs, "Hand Bombs")}
    </>
}

function Reusa(conjunto, tipo) {
    let idTipoArma = useId();
    return(
        <div className="Container-equipamento">
        <h1 id={'arma' + idTipoArma} className='titulo'>{tipo}</h1>
        <section>
            <header className='cabecalho'>
                <div className='col'>Equipamento</div>
                <div className='col'>Como adquirir</div>
            </header>
            {conjunto.map((element, index1, index2, index3) => {
                return(
                    <div key={index1} className='row'>
                        <div key={index2} className='col esquerda'>
                            <span className='destaque nomeador'>{element.Nome}</span>
                        </div>
                        <div key={index3} className='col'>
                            {Object.keys(element).map((arma, index) => {
                                return element[arma] !== "" ? 
                                index !== 0 ? <div key={index}><span className='destaque'>{arma}:</span> {element[arma]}</div> : "" : "";
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
    );
}

export default Principal;
