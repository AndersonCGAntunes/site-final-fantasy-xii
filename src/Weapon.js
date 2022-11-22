import './App.css';
import { axes, bows, crossbows, daggers, greatswords, guns, hammers, handBombs, katanas, maces, measures, ninjaSwords, poles, rods, spears, staves, swords } from './Database';
import MetodoUniversal from './MetodoUniversal';
import ShowHide from './ShowHide';

function Weapon() {
    
    return <>
        <div className='container'>
            <ShowHide />
        </div>
        {MetodoUniversal(swords, "Swords")}
        {MetodoUniversal(daggers, "Daggers")}
        {MetodoUniversal(axes, "Axes")}
        {MetodoUniversal(hammers, "Hammers")}
        {MetodoUniversal(maces, "Maces")}
        {MetodoUniversal(measures, "Measures")}
        {MetodoUniversal(greatswords, "Greatswords")}
        {MetodoUniversal(katanas, "Katanas")}
        {MetodoUniversal(ninjaSwords, "Ninja Swords")}
        {MetodoUniversal(spears, "Spears")}
        {MetodoUniversal(poles, "Poles")}
        {MetodoUniversal(rods, "Rods")}
        {MetodoUniversal(staves, "Staves")}
        {MetodoUniversal(bows, "Bows")}
        {MetodoUniversal(crossbows, "Crossbows")}
        {MetodoUniversal(guns, "Guns")}
        {MetodoUniversal(handBombs, "Hand Bombs")}
    </>
}

export default Weapon;
