import './App.css';
import { espers } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Espers() {
    
    return <>
        {MetodoBestiario(espers, "Espers", "Esper", "Local")}
    </>
}

export default Espers;
