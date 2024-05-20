import React from 'react'
import Filter from '../../components/filter/Filter'

function Product() {
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
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>
          <div className="about_info">
            <div>
              <h1>MDF Eshiklar</h1>
              <p>⭐⭐⭐⭐ 40 komment</p>
              <h1>1 200 000 so‘m</h1>
            </div>

            <div>
              <p>Rang</p>
              <div className="colors">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div>
              <p>O‘lchamlar</p>
              <span>120x200 sm</span>
              <span>120x200 sm</span>
              <span>120x200 sm</span>
              <span>120x200 sm</span>
              <span>120x200 sm</span>
              <span>120x200 sm</span>
            </div>

            <div>
              <p>Brendlar</p>
              <span>Akfa</span>
              <span>MDF</span>
              <span>Rasulov</span>
            </div>
            <div className="about_btns">
              <button>Savatga qo‘shish</button>
              <button>Sotib olish</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product