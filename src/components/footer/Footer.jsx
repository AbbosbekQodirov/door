import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <h2>Eshik deraza</h2>
          <li>
            <p>
              Qo’llab quvvatlash <br /> <b>+998999999999</b>
            </p>
          </li>
          <li>
            <img src="/imgs/icons/mark2.svg" alt="" /> Olmazor, Toshkent
          </li>
          <li>
            <img src="/imgs/icons/email.svg" alt="" /> Eshikrom@gmail.com
          </li>
        </ul>
        <ul>
          <h2>Ma’lumotlar</h2>
          <li>Biz haqimizda</li>
          <li>To’lov va yetkazib berish</li>
          <li>Blog</li>
          <li>To‘lovni qaytarish va tovarlarni almashtirish</li>
        </ul>
        <ul>
          <h2>
            {" "}
            <br />{" "}
          </h2>
          <li>Eco-friendly</li>
          <li>Bonus va aksiyalar</li>
          <li>Servis markazlari</li>
          <li>Ommaviy oferta</li>
        </ul>
      </div>
      <div className="container container_two ">
        <p>© 2024. ООО "Eshikrom store"</p>
        <p>Ommaviy oferta</p>
        <p>Maxfiylik siyosati</p>
        <p className='social'>
          <a href="">
            <img src="/imgs/icons/telegram.svg" alt="" />
          </a>
          <a href="">
            <img src="/imgs/icons/facebook.svg" alt="" />
          </a>
          <a href="">
            <img src="/imgs/icons/instagram.svg" alt="" />
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer