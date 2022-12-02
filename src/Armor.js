import './App.css';
import { heavyArmor, lightArmor, mysticArmor, shields } from './Database';
import MetodoUniversal from './MetodoUniversal';

function Armor() {
    return <>
        {MetodoUniversal(shields, "Shields")}
        {MetodoUniversal(lightArmor, "Light Armor")}
        {MetodoUniversal(heavyArmor, "Heavy Armor")}
        {MetodoUniversal(mysticArmor, "Mystic Armor")}
    </>
}

export default Armor;
