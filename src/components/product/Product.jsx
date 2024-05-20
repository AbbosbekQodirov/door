import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom';

function Product() {
  return (
    <div className="product">
      <div className="product_img">
        <div className="like">
          <img src="./imgs/icons/like2.svg" alt="" />
        </div>
        <Link to={"/product/1"}>
          <img src="./imgs/photos/product1.png" alt="" />
        </Link>
      </div>
      <div className="product_info">
        <div className="desc">
          <div>
            <h3>MDF Eshiklar</h3>
            <p>120x200 sm - 1 qanotli</p>
          </div>
          <div>
            <img src="./imgs/icons/stars.svg" alt="" />
            <p className="comments">40 komment</p>
          </div>
        </div>
        <span className="type">MDF</span>
        <div className="buy">
          <h2>
            1 000 000 so‘m <span>1 200 000 so‘m</span>
          </h2>
          <button>
            <img src="./imgs/icons/cart2.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product