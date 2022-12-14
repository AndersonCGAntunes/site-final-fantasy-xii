import { Outlet, Link } from "react-router-dom";
import './App.css'

const Layout = () => {
  return (
    <>
      <nav>
      <h3 className="subtitulo">Equipamentos</h3>
        <div className="containerMenu">
          <div className="listaMenu">
            <Link to="/">Home</Link>
          </div>
          <div className="listaMenu">
            <Link to="/Weapon">Weapons</Link>
          </div>
          <div className="listaMenu">
            <Link to="/Armor">Armors</Link>
          </div>
          <div className="listaMenu">
            <Link to="/Accessories">Accessories</Link>
          </div>
          <div className="listaMenu">
            <Link to="/Bazaar">Bazaar</Link>
          </div>
          <div className="listaMenu">
            <Link to="/Monographs">Monographs</Link>
          </div>
        </div>
      </nav>
      <h3 className="subtitulo">Bestiário</h3>
      <section className="containerSubMenu">
        <div className="listaMenu">
          <Link to="/Comuns">Comuns</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Marks">Marks</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Elite">Elite</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Espers">Espers</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Bosses">Bosses</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Rare">Rare</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Humanoids">Humanoids</Link>
        </div>
        <div className="listaMenu">
          <Link to="/Archadians">Archadians</Link>
        </div>
      </section>
      <Outlet />
    </>
  )
};

export default Layout;
