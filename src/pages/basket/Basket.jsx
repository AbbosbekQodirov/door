import React from "react";
import Filter from "../../components/filter/Filter";
import Title from "../../components/title/Title";
import Product from "../../components/product/Product";
import Customers from "../../components/customers/Customers";

function Basket() {
  return (
    <div>
      <div className="one_product ">
        <div className="container">
          <Filter />
          <p>Bosh sahifa • Savatcha</p>
          <Title title={"Savatcha"} />
          <div className="BusketList">
            <h1>
              Hozircha Dasturchi boshqa ish qilyapti🫡😶‍🌫️
            </h1>
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
