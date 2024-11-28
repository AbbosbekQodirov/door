import React from 'react'
import "./Admin.css"


function Admin() {
  return (
    <div className="adminOrders">
      <p>
        Sizda <span>6</span> ta buyurtma bor
      </p>
      <div className="orders">
        <p>Bugun</p>
        {[1, 2, 3].map(() => {
          return (
            <div className="order">
              <div className="order_info">
                <div className="order_img">
                  <img src="/imgs/photos/orderimg1.png" alt="" />
                </div>
                <div>
                  <h3>
                    MDF eshiklar uchun buyurtma <span>1 soat oldin</span>
                  </h3>
                  <h4>Sarvarbek Nabiyev • +998999999999</h4>
                  <p>
                    120x200 sm • 1 qanotlik • MDF • Jigarrang • 1 200 000 so‘m
                  </p>
                </div>
              </div>
              <a href="">To‘liq ko‘rish</a>
            </div>
          );
        })}

        <p>Kecha</p>
        {[1, 2, 3].map(() => {
          return (
            <div className="order">
              <div className="order_info">
                <div className="order_img">
                  <img src="/imgs/photos/orderimg1.png" alt="" />
                </div>
                <div>
                  <h3>
                    MDF eshiklar uchun buyurtma <span>1 soat oldin</span>
                  </h3>
                  <h4>Sarvarbek Nabiyev • +998999999999</h4>
                  <p>
                    120x200 sm • 1 qanotlik • MDF • Jigarrang • 1 200 000 so‘m
                  </p>
                </div>
              </div>
              <a href="">To‘liq ko‘rish</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Admin