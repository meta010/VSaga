import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Header from '../Components/HomeComponents/Header'
import Slider from '../Components/HomeComponents/Slider'
import Celebrate from '../Components/HomeComponents/Celebrate'
// import Celeb2 from '../Components/HomeComponents/Celeb2'
import Bookeh from '../Components/HomeComponents/Bookeh'
import Walls from '../Components/HomeComponents/Walls'
import Cakes from '../Components/HomeComponents/Cakes'
import Candlelight from '../Components/HomeComponents/CandleLight'
import Services from '../Components/HomeComponents/Services'
import Testimonials from '../Components/HomeComponents/testimonials'
import News from '../Components/HomeComponents/News'
import Links from '../Components/HomeComponents/Links'
import Footer from '../Components/HomeComponents/Footer'
import MenuBar from '../Components/HomeComponents/MenuBar'
import { useDispatch } from 'react-redux'
import { handle_erase_admin_token } from '../Redux/action'
import Whatsapp from '../Components/HomeComponents/Whatsapp'
import Categories from '../Components/HomeComponents/Categories'
import Categories2 from '../Components/HomeComponents/Categories2'
import { Navbardropdown } from '../Components/Dropdown/Navbardropdown'
const Cookies = require('js-cookie')

const Home = () => {
  let imgbig = [{ img: "https://i.ibb.co/LgQxrzP/cherishx-partystore-courier.gif", id: 1 }, { id: 2, img: "https://deowgxgt4vwfe.cloudfront.net/website_static/img/cherishx-custom-decorations.gif" }]
  // let smallimg = [{ id: 1, img: "https://valentinesaga.com/wp-content/uploads/2023/07/Candlelight-Diner-Banner-ValentineSaga.png" }, { id: 2, img: "https://valentinesaga.com/wp-content/uploads/2023/07/Flawers-Banner-With-Valentine-Saga-1.jpg" }, { id: 3, img: "https://valentinesaga.com/wp-content/uploads/2023/05/Flawers-and-Gift-Combo-Banner.png" }, { id: 4, img: "https://valentinesaga.com/wp-content/uploads/2023/05/Happy-Birthday-Banner-12321.png" }]
  // console.log(Cookies.get('token'))
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handle_erase_admin_token())
  }, [])
  return (
    <>
      <Navbardropdown />
      <div style={{ overflow: "hidden" }}>
        {/* <MenuBar/> */}

        <Header />
        <Slider />
        {/*  */}
        <div style={{ backgroundColor: "#f7f9fc" }}>
          <Categories />
          <Categories2 />
          <Celebrate img={imgbig} />
          {/* <Celeb2 img={smallimg} /> */}
          <Bookeh />
          <Walls />
          <Cakes />
          <Candlelight />
          <Services />
          <Testimonials />
          <News />
        </div>
        <Links />

      </div>
    </>
  )
}

export default Home