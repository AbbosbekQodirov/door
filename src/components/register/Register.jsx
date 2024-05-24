import React, { useState } from "react";
import "./Register.css";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Register({ setShowRegister }) {
    const [filled, setFilled] = useState(false)
    const postInfo = (e)=>{
        e.preventDefault()
        setFilled(true)
    }
  return (
    <div className="register">
      <div className="container">
        {filled ? (
          <div className="signUp">
            <div
              onClick={() => {
                setShowRegister(false);
              }}
              className="close"
            >
              <IoIosCloseCircleOutline />
            </div>
            <h2>+998999999999</h2>
            <p>
              Telefon raqamiga yuborilgan <br /> <b>SMS kod</b>ni kiriting
            </p>
            <form  action="">
              <input
                className="registerInfo"
                type="text"
                placeholder="kodni kiriting..."
                required
              />
              
              <button>Keyingi</button>
            </form>
          </div>
        ) : (
          <div className="signUp">
            <div
              onClick={() => {
                setShowRegister(false);
              }}
              className="close"
            >
              <IoIosCloseCircleOutline />
            </div>
            <h1>Ro‘yxatdan o‘tish</h1>
            <p>Iltimos quyidagi ma’lumotlarni kiriting</p>
            <form onSubmit={postInfo} action="">
              <label htmlFor="">F.I.SH</label>
              <input
                className="registerInfo"
                type="text"
                placeholder="F.I.SH kiriting"
                required
              />
              <label htmlFor="">Yashash manzil</label>
              <input
                className="registerInfo"
                type="text"
                placeholder="Yashash manzilingizni kiriting"
                required
              />
              <label htmlFor="">Telefon raqam</label>
              <div className="registerInfo">
                <div>+998</div>
                <input className="" type="text" placeholder="" required />
              </div>
              <div className="consent">
                <input type="checkbox" name="" id="consent" required />
                <label htmlFor="consent">Ommaviy oferta</label>
              </div>
              <button>Keyingi</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
