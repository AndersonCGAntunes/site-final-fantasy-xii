import './App.css';
import { eliteMarks } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Elite() {
    
    return <>
        {MetodoBestiario(eliteMarks, "Elite Marks", "Elite Mark", "Local")}
    </>
}

export default Elite;
