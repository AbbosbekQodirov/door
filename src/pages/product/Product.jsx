import React, { useEffect } from 'react'
import Filter from '../../components/filter/Filter'
import "./Product.css"

function Product() {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, []);
  return (
    <div className="one_product ">
      <div className="container">
        <Filter />
        <p>Bosh sahifa • Eshiklar • MDF eshiklar • 1 qanotli MDF eshik</p>
        <div className="about_product">
          <div className="about_imgs">
            <div className="main_img">
              <img src="/imgs/photos/mainImg1.png" alt="" />
            </div>
            <div className="main_imgs">
              <img src="/imgs/photos/infoImg1.png" alt="" />
              <img src="/imgs/photos/infoImg2.png" alt="" />
              <img src="/imgs/photos/infoImg3.png" alt="" />
              <img src="/imgs/photos/infoImg4.png" alt="" />
              <img src="/imgs/photos/infoImg5.png" alt="" />
            </div>
          </div>
          <div className="about_info">
            <div className="about_title">
              <h1>MDF Eshiklar</h1>
              <p>⭐⭐⭐⭐ 40 komment</p>
              <div className="about_like">
                <img src="/imgs/icons/infos_like.svg" alt="" />
              </div>
            </div>
            <div>
              <h1>1 200 000 so‘m</h1>
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
                <span className="active">120x200 sm</span>
                <span>120x200 sm</span>
                <span>120x200 sm</span>
                <span>120x200 sm</span>
                <span>120x200 sm</span>
                <span>120x200 sm</span>
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
      </div>
    </div>
  );
}

export default Product