import React from 'react'
import { FiSearch } from "react-icons/fi";
import { RiNotificationLine } from "react-icons/ri";
import "./AdminNavbar.css"
function AdminNavbar() {
  return (
    <div className="adminNavbar">
      <div className="AdminLogo">
        <h3>Buyurtmalar</h3>
      </div>
      <div >
        <div className="AdminSearch">
          <div className="">
            <FiSearch />
          </div>
          <input type="text" placeholder="Qidiruv" />
        </div>
        <div className="notification">
          <RiNotificationLine />
        </div>
        <div className="adminBio">
          <div className="adminAvatar">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNL_ZnOTpXSvhf1UaK7beHey2BX42U6solRA&s"
              alt=""
            />
          </div>
          <div className='adminName' >
            <h3>Stiv Jobs</h3>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminNavbar