import React from 'react'
import "./Customers.css"

function Customers() {
  return (
    <div>
      <div className="container">
        <div className="customers">
          <div className="cusInfo">
            <div className="custom">
              <p>
                “Just wanted to drop a note to say how impressed I was with your
                customer service team. They solved my issue in no time and made
                sure I was happy every step!”
              </p>
              <div>
                <img src="/imgs/photos/custom1.png" alt="" />
                <div>
                  <h3>Alisher Valiyev</h3>
                  <span>Usta</span>
                </div>
              </div>
            </div>
            <div className="custom active">
              <p>
                “Just wanted to drop a note to say how impressed I was with your
                customer service team. They solved my issue in no time and made
                sure I was happy every step!”
              </p>
              <div>
                <img src="/imgs/icons/user1.svg" alt="" />
                <div>
                  <h3>Alisher Valiyev</h3>
                  <span>Usta</span>
                </div>
              </div>
            </div>
            <div className="custom">
              <p>
                “Just wanted to drop a note to say how impressed I was with your
                customer service team. They solved my issue in no time and made
                sure I was happy every step!”
              </p>
              <div>
                <img src="/imgs/photos/custom1.png" alt="" />
                <div>
                  <h3>Alisher Valiyev</h3>
                  <span>Usta</span>
                </div>
              </div>
            </div>
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