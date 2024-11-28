import React, { useEffect, useState } from 'react'
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Admin from '../pages/admin/Admin';
import Login from '../pages/login/Login';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import OneProduct from '../pages/product/OneProduct';
import Basket from '../pages/basket/Basket';
import Profile from "../pages/profile/Profile";
import Footer from '../components/footer/Footer';
import AdminProduct from '../pages/adminProduct/AdminProduct';

import AdminMenu from '../components/adminMenu/AdminMenu';
import AdminNavbar from '../components/adminNavbar/AdminNavbar';



function Routers() {
    const navigate = useNavigate();
    // const currentLocation = window.location.pathname;


    const [productLink, setProductLink] = useState("/api/v1/commodities/");
    const [allProduct, setAllProduct] = useState([])

    const getProduct = async ()=>{
      const req = await fetch(productLink);

      const data = await req.json()
      setAllProduct(data.results);
    }


    useEffect(() => {
      if (!window.localStorage.getItem("token")) {
        navigate("/");
        //  setLogin("landing");
        getProduct();
      }
    }, [productLink]);

  return (
    <div>
      {window.localStorage.getItem("token") ? (
        <div className="container admin_page">
          <AdminMenu />
          <div className="adminInfo">
            <AdminNavbar />
            <Routes>
              <Route path="/" element={<Admin />} />
              <Route path="/adminproduct" element={<AdminProduct />} />
            </Routes>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <Home allProduct={allProduct} setProductLink={setProductLink} />
              }
            />
            <Route path="/product/:id" element={<OneProduct />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Routers