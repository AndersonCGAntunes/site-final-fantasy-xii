import './App.css';
import { bosses } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Bosses() {
    
    return <>
        {MetodoBestiario(bosses, "Bosses", "Boss", "Local")}
    </>
}

export default Bosses;
