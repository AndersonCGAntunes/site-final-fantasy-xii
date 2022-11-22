import './App.css';
import React, {useState} from 'react';

function ShowHide() {
    const [show, setShow]=useState(true);
    const nomeLinks = ["Swords", "Daggers", "Axes", "Hammers", "Maces", "Measures", "Greatswords", "Katanas", "Ninja Swords", "Spears", "Poles", "Rods", "Staves", "Bows", "Crossbows", "Guns", "HandBombs"];
    const idWeapons = ['4p', '4q', '4r', '4s', '4t', '4u', '4v', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59'];

    return(
        <>
            <div className='botoes'>
                <button className='interruptor' onClick={() => setShow(!show)}>Menu</button>
            </div>
            {
                show ? null : <div className='menu'>{
                    <div className="lista">
                        <h3>Weapons</h3>
                        <ul>
                            {
                                idWeapons.map((elem, i) => {
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
