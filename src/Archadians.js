import './App.css';
import { archadianEmpires } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Archadians() {
    
    return <>
        {MetodoBestiario(archadianEmpires, "Archadian Empires", "Archadian", "Local")}
    </>
}

export default Archadians;
