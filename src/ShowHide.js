import './App.css';
import React, {useState} from 'react';

function ShowHide() {
    const [show, setShow]=useState(true);
    const nomeLinks = ["Swords", "Daggers", "Axes", "Hammers", "Maces", "Measures", "Greatswords", "Katanas", "Ninja Swords", "Spears", "Poles", "Rods", "Staves", "Bows", "Crossbows", "Guns", "HandBombs"];
    const identificadores = ['h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', '10', '11'];

    return(
        <>
            <button className='interruptor' onClick={() => setShow(!show)}>Menu</button>
            {
                show ? null : <div className='menu'>{
                    <div className="lista">
                        <h3>Weapons</h3>
                        <ul>
                            {
                                identificadores.map((elem, i) => {
                                    return <li key={i}>
                                        <a href={'#arma:r'+elem+':'}>{nomeLinks[i]}</a>
                                    </li>
                                })
                            }
                        </ul>
                        
                    </div>
                }</div>
            }
        </>
    );
}

export default ShowHide;
