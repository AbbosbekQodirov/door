import React, { useState } from 'react'
import "./AdminProduct.css"
import { GoPencil } from "react-icons/go";
import { PiTrash } from "react-icons/pi";
import { IoMdAdd } from "react-icons/io";

function AdminProduct() {
  const [showAddModal, setShowAddModal]=useState(false)
  return (
    <div className="adminProducts">
      <span onClick={()=>{
        setShowAddModal(!showAddModal)
      }} className="admin_addProductBtn">
        <IoMdAdd />
      </span>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
        return (
          <div className="adminProduct">
            <span className="admin_edit">
              <GoPencil />
            </span>
            <span className="admin_delete">
              <PiTrash />
            </span>
            <div className="admin_productimg">
              <img src="/imgs/photos/orderimg1.png" alt="" />
            </div>
            <div>
              <h3>MDF Eshiklar</h3>
              <p>
                Rangi: <span>Jigarrang</span>{" "}
              </p>
              <p>
                O‘lchami: <span>120x200 sm</span>{" "}
              </p>
              <p>
                Brend: <span>MDF</span>{" "}
              </p>
              <h3>1 000 000 so‘m</h3>
            </div>
          </div>
        );
      })}

      <div className={showAddModal ? "addModal active" : "addModal"}>
        <form action="">
          <h2>Mahsulot qo‘shish</h2>
          <label htmlFor="">
            Mahsulot nomi
            <input type="text" placeholder="Mahsulot nomini kiriting" />
          </label>
          <label htmlFor="">
            Mahsulot nomi
            <input type="text" placeholder="Brand turini yozing" />
          </label>
          <label htmlFor="">
            Mahsulot nomi
            <select name="" id="">
              <option value="">Variant1</option>
              <option value="">Variant1</option>
              <option value="">Variant1</option>
            </select>
          </label>
          <label htmlFor="">
            Mahsulot nomi
            <input type="text" placeholder="Mahsulot turini tanlang" />
          </label>
          <label htmlFor="">
            Mahsulot nomi
            <input type="text" />
          </label>
          <label htmlFor="">
            Rasm qo'shish
            <input type="text" />
          </label>
          <button  >Qo’shish</button>
        </form>
      </div>
    </div>
  );
}

export default AdminProduct