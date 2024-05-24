import React, { useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';
import Register from '../register/Register';

function Navbar() {

  const [showRegister, setShowRegister] = useState(false)

  return (
    <nav>
      {showRegister && <Register setShowRegister={setShowRegister} /> }
      <div className="navbar">
        <div className="container">
          <div className="location">
            <img src="/imgs/icons/mark.svg" alt="" />
            Toshkent
          </div>
          <div className="contact">
            <select name="" id="">
              <option value="">Uzb</option>
              <option value="">Uzb</option>
              <option value="">Uzb</option>
            </select>
            <Link>
              <img src="/imgs/icons/phone.svg" alt="" />
              +998999999999
            </Link>
          </div>
        </div>
      </div>
      <div className="nav_bar">
        <div className="container">
          <h2>
            <Link to={"/"}>Eshik deraza</Link>
          </h2>
          <form action="">
            <input placeholder="Nomi va turi bo’yicha qidiruv" type="text" />
            <img src="/imgs/icons/search.svg" alt="" />
          </form>
          <div className="user_info">
            <div>
              <Link to={"/basket"}>
                <img src="/imgs/icons/cart.svg" alt="" />
                <span>2</span>
              </Link>
            </div>
            <div>
              <img src="/imgs/icons/like.svg" alt="" />
            </div>
            <div onClick={()=>{
              setShowRegister(true)
            }} className="profile">
              <img src="/imgs/man.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar