import React from 'react'
import "./Filter.css"

function Filter() {
  return (
    <div className="filter">
      <ul>
        <li className='active'>Eshiklar</li>
        <li>Derazalar</li>
        <li>Ko’p sotilgan</li>
        <li>Chegirma</li>
        <li>Brendlar</li>
      </ul>
      <button>
        <img src="./imgs/icons/filter.svg" alt="" />
        Filter
      </button>
    </div>
  );
}

export default Filter