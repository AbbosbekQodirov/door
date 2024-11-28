import React from "react";
import { RiNotificationLine } from "react-icons/ri";
import { SlSocialDropbox } from "react-icons/sl";
import { NavLink, useNavigate } from "react-router-dom";
import { IoExitOutline } from "react-icons/io5";

import "./AdminMenu.css";

function AdminMenu() {
  const navigate = useNavigate()
  return (
    <div className="admin_menu">
      <div className="admin_logo">
        <h2>ESHIK DERAZA</h2>
      </div>
      <ul className="admin_links">
        <div>
          <li>
            <NavLink to={"/"}>
              <RiNotificationLine /> Buyurtmalar
            </NavLink>
          </li>
          <li>
            <NavLink to={"/adminproduct"}>
              <SlSocialDropbox /> Maxsulotlar
            </NavLink>
          </li>
        </div>
        <div>
          <li onClick={()=>{
            localStorage.clear()
            navigate("/")
          }}  className="exit" >
            <IoExitOutline /> Chiqish
          </li>
        </div>
      </ul>
    </div>
  );
}

export default AdminMenu;
