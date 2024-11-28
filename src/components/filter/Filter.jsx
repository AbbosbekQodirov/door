import React, { useEffect, useState } from "react";
import "./Filter.css";

function Filter({ setProductLink }) {
  const [brands, setBrands] = useState(null);

  const getBrands = async () => {
    const req = await fetch("/api/v1/brands/");
    const data = await req.json();
    setBrands(data.results);
  };

  useEffect(() => {
    getBrands();
  }, []);

  return (
    <div className="filter">
      <ul>
        <li className="active">Eshiklar</li>
        <li>Ko’p sotilgan</li>
        <li
          onClick={() => {
            console.log("salom");
            setProductLink("/api/v1/discounts/");
          }}
        >
          Chegirma
        </li>
        <li>
          Brendlar
          {brands &&
             <div className="filter_brands">
              {brands.map((item)=>{
                return <span onClick={()=>{
                  setProductLink(`/api/v1/commodities/?search=${item.name}`);
                }} >{item.name}</span>;
              })}
             </div>
          }
        </li>
      </ul>
      <button>
        <img src="./imgs/icons/filter.svg" alt="" />
        Filter
      </button>
    </div>
  );
}

export default Filter;
