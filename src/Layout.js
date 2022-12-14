import { Outlet, Link } from "react-router-dom";
import './App.css'

const Layout = () => {
  return (
    <>
      <nav>
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
          Elite
        </div>
        <div className="listaMenu">
          Espers
        </div>
        <div className="listaMenu">
          Bosses
        </div>
        <div className="listaMenu">
          Rare
        </div>
        <div className="listaMenu">
          Humanoids
        </div>
        <div className="listaMenu">
          Archadians
        </div>
      </section>
      <Outlet />
    </>
  )
};

export default Layout;
