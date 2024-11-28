import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className="product">
      <div className="product_img">
        <div className="like">
          <img src="/imgs/icons/like2.svg" alt="" />
        </div>
        <Link to={`/product/${product?.id}`}>
          <img
            className="product_main_img"
            src={`https://easemarket.pythonanywhere.com/${product?.images[0]?.photo?.replace(
              "/media",
              ""
            )}`}
            alt=""
          />
        </Link>
      </div>
      <div className="product_info">
        <div className="desc">
          <div>
            <h3>{product?.name}</h3>
            <p>{product?.sizes} - 1 qanotli</p>
          </div>
          <div>
            <img src="/imgs/icons/stars.svg" alt="" />
            <p className="comments">{product?.comments_count} komment</p>
          </div>
        </div>
        <span className="type">{product?.brand}</span>
        <div className="buy">
          <h2>
            {product?.price} so‘m{" "}
            {product?.discount_price && <span>1 200 000 so‘m</span>}
          </h2>
          <button>
            <img src="/imgs/icons/cart2.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product