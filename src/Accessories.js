import './App.css';
import { accessories } from './Database';
import MetodoUniversal from './MetodoUniversal';

function Accessories() {
    return <>
        {MetodoUniversal(accessories, "Accessories")};
    </>
}

export default Accessories;
