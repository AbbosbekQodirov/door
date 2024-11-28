import React, { useEffect, useState } from "react";
import Filter from "../../components/filter/Filter";
import "./OneProduct.css";
import Title from "../../components/title/Title";
import Product from "../../components/product/Product";
import Customers from "../../components/customers/Customers";
import { useParams } from "react-router-dom";

function OneProduct() {
  const [oneOroduct, setOneProduct] = useState(null);
  const [productComments, setProductComments] = useState([])

  const { id } = useParams();


  const getInfo = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`/api/v1/commodities/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setOneProduct(result);
      })
      .catch((error) => console.error(error));
  };

   const getProductComments = () => {
     const requestOptions = {
       method: "GET",
       redirect: "follow",
     };

     fetch(
       `/api/v1/commodities/0af3f90b-c364-4784-a1b3-8a936febaf6b/comments/`,
       requestOptions
     )
       .then((response) => response.json())
       .then((result) => {
         setProductComments(result);
       })
       .catch((error) => console.error(error));
   };

   



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    getInfo();
    getProductComments();
  }, [id]);
  return (
    <div className="one_product ">
      {oneOroduct && (
        <div className="container">
          <Filter />
          <p>Bosh sahifa • Eshiklar • MDF eshiklar • 1 qanotli MDF eshik</p>
          <div className="about_product">
            <div className="about_imgs">
              <div className="main_img">
                <img
                  src={`https://easemarket.pythonanywhere.com/${oneOroduct?.images[0]?.photo?.replace(
                    "/media",
                    ""
                  )}`}
                  alt=""
                />
              </div>
              <div className="main_imgs">
                {oneOroduct?.images?.map(() => {
                  return <img src="/imgs/photos/infoImg1.png" alt="" />;
                })}
              </div>
            </div>
            <div className="about_info">
              <div className="about_title">
                <h1>{oneOroduct.name}</h1>
                <p>⭐⭐⭐⭐ {oneOroduct.comments_count} komment</p>
                <div className="about_like">
                  <img src="/imgs/icons/infos_like.svg" alt="" />
                </div>
              </div>
              <div>
                <h1>{oneOroduct.price} so‘m</h1>
              </div>

              <div>
                <p>Rang</p>
                <div className="colors">
                  <span style={{ backgroundColor: "#5D412A" }}></span>
                  <span style={{ backgroundColor: "#E3B90F" }}></span>
                  <span></span>
                </div>
              </div>

              <div>
                <p>O‘lchamlar</p>
                <div className="sizes">
                  {oneOroduct.sizes.map((item) => {
                    return (
                      <span className={item.active ? "active" : ""}>
                        {item.dimension}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div>
                <p>Brendlar</p>
                <div className="brands">
                  <span>Akfa</span>
                  <span className="active">MDF</span>
                  <span>Rasulov</span>
                </div>
              </div>
              <div className="about_btns">
                <button>
                  {" "}
                  <img src="/imgs/icons/infocart.svg" alt="" /> Savatga qo‘shish
                </button>
                <button>Sotib olish</button>
              </div>
            </div>
          </div>
          <Title title="Tavsiyalar" />
          <div className="products">
            {oneOroduct.similiar_commodities.map((product) => {
              return <Product product={product} />;
            })}
          </div>
          <div className="read_more">
            <a href="">Ko‘proq ko‘rish</a>
          </div>
          <Title title="Mijozlar fikri" />
          <Customers comments={productComments} />
        </div>
      )}
    </div>
  );
}

export default OneProduct;
