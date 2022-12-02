import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Weapon from "./Weapon";
import Armor from "./Armor";
import NoPage from "./NoPage";
import Accessories from './Accessories';
import Bazaar from './Bazaar';

export default function App() {
  return (
    <React.StrictMode>
        <header className="App-header">
          <h1>Final Fantasy XII - THE ZODIAC AGE</h1>
        </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="weapon" element={<Weapon />} />
            <Route path="armor" element={<Armor />} />
            <Route path='accessories' element={<Accessories />} />
            <Route path='bazaar' element={<Bazaar />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
