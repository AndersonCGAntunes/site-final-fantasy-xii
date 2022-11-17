import './App.css';
import React, {useState} from 'react';

function ShowHide() {
    const [show, setShow]=useState(true);

    return(
        <>
            <button className='interruptor' onClick={() => setShow(!show)}>Menu</button>
            {
                show ? null : <div className='menu'></div>
            }
        </>
    );
}

export default ShowHide;
