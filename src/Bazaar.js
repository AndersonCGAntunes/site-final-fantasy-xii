import './App.css';
import { bazaar } from './Database';

function Bazaar() {
    let contador = 0;
    return(
        <div className="Container-equipamento">
            <h1 className='titulo'>Bazaar</h1>
            <section>
                <header className='cabecalho'>
                    <div className='col'>Recipe's name</div>
                    <div className='col'>Contents</div>
                    <div className='col'>Como adquirir</div>
                </header>
                {bazaar.map((element, index, index1, index3) => {
                    let myRegex = /:/;
                    return(
                        <div key={index} className='row'>
                            <div key={index1} className='col esquerda'>
                                <span className='destaque nomeador'>{element.Item}</span>
                            </div>
                            <div key={index3} className='col italico'>
                                {element.Contents}
                            </div>
                            <div key={index3} className='col direita'>
                                {Object.keys(element).map((loot, index4) => {
                                    if (index4 == 2) {
                                        return element.Ingredients.map((item, cont, novaKey) => {
                                            let nome = "";
                                            let descricao = "";
                                            contador++;
                                            if (cont % 2 == 0) {
                                                nome = item;
                                                return <span key={novaKey + contador} className='destaque'>{nome}</span>
                                            } else {
                                                descricao = item;
                                                return <div key={cont + contador} className='emLinha'>{descricao}<br/></div>
                                            }
                                        })
                                    }
                                })}
                            </div>
                        </div>
                    );
                })}
            </section>
        </div>
    );
}

export default Bazaar;
