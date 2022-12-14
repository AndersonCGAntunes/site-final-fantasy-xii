import './App.css';
import { comuns } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Comuns() {
    
    return <>
        {MetodoBestiario(comuns, "Monstros Comuns", "Local", "Monstros")}
    </>
}

export default Comuns;
