import './App.css';
import { bazaar } from './Database';

function Bazaar() {
    return(
        <div className="Container-equipamento">
            <h1 className='titulo'>Bazaar</h1>
            <section>
                <header className='cabecalho'>
                    <div className='col'>Recipe's name</div>
                    <div className='col'>Contents</div>
                    <div className='col'>Como adquirir</div>
                </header>
                {
                    bazaar.map((obj, index) => {
                        return (
                        <div key={index} id='pai' className='row'>
                            <div className='col esquerda'>{obj.Item}</div>
                            <div className='col italico'>{obj.Contents}</div>
                            <div className='col direita'>
                                {
                                    obj.Ingredients.map((objFilho, chave) => {
                                        return <div key={chave}>
                                            <span className='destaque'>{objFilho.Ingrediente}</span><div>
                                                {
                                                    Object.keys(objFilho).map((outro, index) => {
                                                        return index > 0 && objFilho[outro] != "" ? <div key={index}><span className='negrito'>{outro}: </span>{objFilho[outro]}</div> : ""
                                                    })
                                                }
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                        );
                    })
                }
            </section>
        </div>
    );
}

export default Bazaar;
