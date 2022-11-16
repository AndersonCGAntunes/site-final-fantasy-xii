import './App.css';
import { swords } from './Database';
import React from "react";

function Principal() {
    return Reusa(swords, "Swords");
}

function Reusa(conjunto, tipo) {
    return(
        <div className="Container-equipamento">
        <h1>{tipo}</h1>
        <section>
            <header className='cabecalho'>
                <div className='col'>Equipamento</div>
                <div className='col'>Como adquirir</div>
            </header>
            {conjunto.map((element, index0) => {
                return(
                    <div key={index0} className='row'>
                        <div className='col'>
                            <span className='destaque nomeador'>{element.Nome}</span>
                        </div>
                        <div className='col'>
                            {Object.keys(element).map((espada, index) => {
                                return element[espada] !== "" ? 
                                index !== 0 ? <div key={index}><span className='destaque'>{espada}:</span> {element[espada]}</div> : "" : "";
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
