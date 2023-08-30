import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './slider.css'
import { useSearchParams } from "react-router-dom"
// import candle from './candlelight.jpg'
import { Link } from 'react-router-dom';
import { handle_getestimonials_Image_by_admin, handle_getsliders_Image_by_admin } from '../../Redux/action';
import { useDispatch } from 'react-redux';
const Slider = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [images, setimages] =useState([])
  const cityname = searchParams.get("city")
  const [city, setCity] = useState(cityname || "delhi")
  const dispatch = useDispatch()
  useEffect(() => {
    let params = {
      city
    }
    setSearchParams(params)
  }, [city])



  useEffect(() => {
    dispatch(handle_getsliders_Image_by_admin()).then((res) => {
      setimages(res?.data?.data)
    })
  }, []);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1384, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };



  return (<Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    autoPlay={true}
    infinite={true}
    containerClass="carousel-container carousel-container-2"
  // containerClass="carousel-container"
  >



      {
        images?.map((item) => {
          return <div className='slider-container'>
           <Link to={`products?city=${cityname}&category=${item?.category}`}>
            <img className='slider' src={item?.images} alt="" />
          </Link>
    </div>
        })
      }


  </Carousel>
  )
}

export default Slider