import './App.css';

function MetodoUniversal(conjunto, tipo) {
    
    return(
        <div className="Container-equipamento">
        <h1 className='titulo'>{tipo}</h1>
        <section>
            <header className='cabecalho'>
                <div className='col'>Equipamento</div>
                <div className='col'>Como adquirir</div>
            </header>
            {conjunto.map((element, index1, index2, index3) => {
                return(
                    <div key={index1} className='row'>
                        <div key={index2} className='col esquerda'>
                            <span className='destaque nomeador'>{element.Nome}</span>
                        </div>
                        <div key={index3} className='col'>
                            {Object.keys(element).map((arma, index) => {
                                return element[arma] !== "" ? 
                                index !== 0 ? <div key={index}><span className='destaque'>{arma}:</span> {element[arma]}</div> : "" : "";
                            })}
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
    );
}

export default MetodoUniversal;
