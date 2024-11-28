import React, { useEffect, useState } from 'react'
import "./Home.css"
import Title from '../../components/title/Title';
import Filter from '../../components/filter/Filter';
import Customers from '../../components/customers/Customers';
import OneProduct from '../product/OneProduct';
import Product from '../../components/product/Product';

function Home({ allProduct, setProductLink }) {
  const [collections, setCollections] = useState([]);
  const [comments, setComments] = useState([]);
  const getCollection = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`/api/v1/collections/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setCollections(result);
      })
      .catch((error) => console.error(error));
  };

  const getComments = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`/api/v1/comments/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setComments(result.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getCollection();
    getComments();
  }, []);

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
              {collections?.map((item, index) => {
                return (
                  <div className={`col${index + 1}`}>
                    <img src={item.photo} alt="" />
                    <div className="col_info">{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Title title={"Mahsulotlar"} />
            <Filter setProductLink={setProductLink} />
            <div className="products">
              {allProduct.map((product) => {
                return <Product product={product} />;
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
            <Customers comments={comments} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home