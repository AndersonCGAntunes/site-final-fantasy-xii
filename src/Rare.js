import './App.css';
import { rareGames } from './Database';
import MetodoBestiario from './MetodoBestiario';

function Rare() {
    
    return <>
        {MetodoBestiario(rareGames, "Rare Games", "Rare Game", "Local")}
    </>
}

export default Rare;
