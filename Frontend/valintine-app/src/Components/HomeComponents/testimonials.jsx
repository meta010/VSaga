import React, { useEffect, useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './testimonial.css'
import { Link } from 'react-router-dom';
import { handle_getestimonials_Image_by_admin } from '../../Redux/action';
import { useDispatch } from 'react-redux';

const Testimonials = () => {

  const [images ,setimages] = useState([])
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const dispatch = useDispatch()
useEffect(() => {
  dispatch(handle_getestimonials_Image_by_admin()).then((res) => {
    setimages(res?.data?.data)
  })
}, []);

  return ( 
  <>
<h1 style={{marginBottom:"30px",marginTop:"30px"}}>Customer Testimonials</h1>
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    autoPlay={true}
    containerClass="carousel-container"
    infinite={true}
    >
      {images?.map((el)=>{

   return  <div>
    <Link>
        <img className='slider' src={el?.images} alt="" />
    </Link>
    </div>
      })}
   

  </Carousel>
  </>
  )
}

export default Testimonials