import React, { useEffect, useState } from 'react'
import "./Customers.css"

function Customers({ comments }) {

  return (
    <div>
      <div className="container">
        <div className="customers">
          <div className="cusInfo">
            {comments?.slice(0, 4).map((item) => {
              return (
                <div className="custom">
                  <p>“{item.comment}”</p>
                  <div>
                    <img src="/imgs/photos/custom1.png" alt="" />
                    <div>
                      <h3>{item.username}</h3>
                      <span>Usta</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cusImg">
            <img src="/imgs/photos/customImg1.png" alt="" />
          </div>
        </div>
        <div className="aboutMe">
          <h1>Uyingizga mos bo’lgan uslubni biz bilan yarating</h1>
          <p>
            Uslubni yaratishda bizning maxsus xodimlarimiz sizga yordam
            berishadi
          </p>
          <button>Buyurtma qilish</button>
        </div>
      </div>
    </div>
  );
}

export default Customers