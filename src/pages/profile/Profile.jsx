import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <p>Bosh sahifa • Profile</p>
        <h1 className="name">Sarvarbek</h1>
        <form className="settings">
          <h4>Sozlamalar</h4>
          <div className="settings_info">
            <div>
              <h3>Ma’lumotlarim</h3>
              <div className="fish">
                <div>
                  <label htmlFor="">Ism</label>
                  <input value={"Sarvarbek"} type="text" />
                </div>
                <div>
                  <label htmlFor="">Familiya</label>
                  <input value={"Nabiyev"} type="text" />
                </div>
                <div>
                  <label htmlFor="">Otasining ismi</label>
                  <input value={"Abdurasulbek o’g’li"} type="text" />
                </div>
              </div>
            </div>
            <div>
              <div className="fish">
                <div>
                  <label htmlFor="">Yashash manzil</label>
                  <input value={"Marg‘ilon"} type="text" />
                </div>
                <div>
                  <label htmlFor="">Telefon raqam</label>
                  <input value={"+998999999999"} type="text" />
                </div>
              </div>
            <button>Saqlash</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;
