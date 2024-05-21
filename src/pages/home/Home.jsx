import React, { useState } from 'react'
import "./Home.css"
import Title from '../../components/title/Title';
import Filter from '../../components/filter/Filter';
import Customers from '../../components/customers/Customers';
import OneProduct from '../product/OneProduct';
import Product from '../../components/product/Product';

function Home() {
  const [products, setProducts] = useState([1,2,3,4,5,6])
  return (
    <div className="home">
      <div className="hero">
        <div className="container">
          <div className="sale">Chegirma</div>
          <div className="hero_info">
            <h1>Katta chegirma</h1>
            <p>
              MDF eshiklarini 40% chegirma narxda sotib olishga ulgurib qoling
            </p>
            <button>Sotib olish</button>
          </div>
          <div className="hero_img">
            <img src="./imgs/hero_img.png" alt="" />
          </div>
        </div>
      </div>
      <main>
        <section>
          <div className="container">
            <Title title={"Kolleksiyalar"} />
            <div className="collections">
              <div className="col1">
                <img src="./imgs/photos/col1.png" alt="" />
                <div className="col_info">Oshxona uchun</div>
              </div>
              <div className="col2">
                <img src="./imgs/photos/col2.png" alt="" />
                <div className="col_info">Oshxona uchun</div>
              </div>
              <div className="col3">
                <img src="./imgs/photos/col3.png" alt="" />
                <div className="col_info">Oshxona uchun</div>
              </div>
              <div className="col4">
                <img src="./imgs/photos/col4.png" alt="" />
                <div className="col_info">Oshxona uchun</div>
              </div>
              <div className="col5">
                <img src="./imgs/photos/col5.png" alt="" />
                <div className="col_info">+30 Ko’proq ko’rish</div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Title title={"Mahsulotlar"} />
            <Filter />
            <div className="products">
              {products.map(() => {
                return <Product/>
              })}
            </div>
            <div className="read_more">
              <a href="">Ko‘proq ko‘rish</a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Title title="Mijozlar fikri" />
            <Customers/>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home