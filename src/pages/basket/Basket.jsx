import React from "react";
import Filter from "../../components/filter/Filter";
import Title from "../../components/title/Title";
import Product from "../../components/product/Product";
import Customers from "../../components/customers/Customers";
import "./Basket.css"

function Basket() {
  return (
    <div>
      <div>
        <div className="container">
          <Filter />
          <p>Bosh sahifa • Savatcha</p>
          <Title title={"Savatcha"} />
          <div className="busket">
            <div className="busket_list">
              <div className="allSelect">
                <input type="checkbox" id="allItem" />
                <label htmlFor="allItem">Barchasini belgilash</label>
              </div>
             {[1,2,3].map(()=>{
              return (
                <div className="busketItem">
                  <input type="checkbox" />
                  <div className="busketItemImg">
                    <img src="/imgs/photos/busketProduct1.png" alt="" />
                  </div>
                  <div className="doorInfo">
                    <h3>MDF Eshiklar</h3>
                    <p>
                      Rangi: &nbsp; &nbsp; <b> Jigarrang</b>
                    </p>
                    <p>
                      O‘lchami: &nbsp; &nbsp; <b> 120x200 sm</b>
                    </p>
                    <p>
                      Brend: &nbsp; &nbsp; <b> MDF</b>
                    </p>
                  </div>
                  <div className="itemCount">
                    <span className="countMinus">-</span>
                    <span>1</span>
                    <span className="countPlus">+</span>
                  </div>
                  <div className="nowPrice">
                    <span>1 200 000 so‘m</span>
                    <h3>1 000 000 so‘m</h3>
                  </div>
                </div>
              );
             })}
            </div>
            <div className="busketPrices">
              <p>Savatdagi mahsulotlar: 3</p>
              <p>
                Jami miqdor: <b>3 000 000 so‘m</b>
              </p>
              <button>Rasmiylashitirish</button>
            </div>
          </div>
          <Title title="Tavsiyalar" />
          <div className="products">
            {[1, 2, 3].map(() => {
              return <Product />;
            })}
          </div>
          <div className="read_more">
            <a href="">Ko‘proq ko‘rish</a>
          </div>
          <Title title="Mijozlar fikri" />
          <Customers />
        </div>
      </div>
    </div>
  );
}

export default Basket;
