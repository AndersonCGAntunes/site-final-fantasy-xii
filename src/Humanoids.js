import './App.css';
import { humanoids } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Humanoids() {
    
    return <>
        {MetodoBestiario(humanoids, "Humanoids", "Humanoid", "Local")}
    </>
}

export default Humanoids;
