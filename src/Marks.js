import './App.css';
import { marks } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Marks() {
    
    return <>
        {MetodoBestiario(marks, "Marks", "Mark", "Local")}
    </>
}

export default Marks;
