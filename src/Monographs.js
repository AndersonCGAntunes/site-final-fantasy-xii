import './App.css';
import { monographs } from './Database';
import MetodoUniversal from './MetodoUniversal';

function Monograph() {
    return <>
        {MetodoUniversal(monographs, "Monographs")}
    </>
}

export default Monograph
