import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="navbar">
        <div className="container">
          <div className="location">
            <img src="./imgs/mark.svg" alt="" />
            Toshkent
          </div>
          <div className="contact">
            <select name="" id="">
              <option value="">Uzb</option>
              <option value="">Uzb</option>
              <option value="">Uzb</option>
            </select>
            <Link>
              <img src="./imgs/phone.svg" alt="" />
              +998999999999
            </Link>
          </div>
        </div>
      </div>
      <div className="nav_bar">
        <div className="container">
          <h2>Eshik deraza</h2>
          <form action="">
            <input placeholder="Nomi va turi bo’yicha qidiruv" type="text" />
            <img src="./imgs/search.svg" alt="" />
          </form>
          <div className="user_info">
            <div>
              <img src="./imgs/cart.svg" alt="" />
              <span>2</span>
            </div>
            <div>
              <img src="./imgs/like.svg" alt="" />
            </div>
            <div>
              <img src="./imgs/man.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar