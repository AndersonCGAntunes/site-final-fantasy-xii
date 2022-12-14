import './App.css';

function MetodoBestiario(conjunto, tipo, cabecalhoUm, cabecalhoDois) {
    return(
        <div className="Container-equipamento">
        <h1 className='titulo'>{tipo}</h1>
        <section>
            <header className='cabecalho'>
                <div className='col'>{cabecalhoUm}</div>
                <div className='col'>{cabecalhoDois}</div>
            </header>
            {conjunto.map((element, index1, index2, index3) => {
                return(
                    <div key={index1} className='row'>
                        <div key={index2} className='col esquerda'>
                            <span className='destaque nomeador'>{element.DadoUm}</span>
                        </div>
                        <div key={index3} className='col'>
                            <span>{element.DadoDois}</span>
                        </div>
                    </div>
                )
            })}
        </section>
    </div>
    );
}

export default MetodoBestiario;
