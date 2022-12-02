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
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;