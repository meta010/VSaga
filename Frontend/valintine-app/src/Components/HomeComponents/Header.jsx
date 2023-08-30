import React, { useEffect, useState } from 'react'
import "./headers.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import {useSearchParams} from "react-router-dom"

const Header = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1124 },
      items: 6,
      slidesToSlide: 1 ,
      // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1650, min: 1480 },
      items: 5,
      slidesToSlide: 1 ,
      // optional, default to 1.
    },
    desktop3: {
      breakpoint: { max: 1480, min: 1194 },
      items: 4,
      slidesToSlide: 1 ,
      // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1194, min: 864 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mid_tablet: {
      breakpoint: { max: 750, min: 460 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 660, min: 0 },
      items: 3,
      slidesToSlide: 1 ,
      arrows:false
      // optional, default to 1.
    }
  };
  let titles = [
    {
      image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/celebration-with-confetti-party-icon_51486-28.jpg",
      title: "Kids Celebrations",
      subtitles: [
        "Kids Birthday Decoration",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Activities",
        "Naming Ceremony Decorations",
        "Themed Birthday Cakes",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
      ],
    },
    {
        image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Slider_images/cd.webp",
      title: "Candlelight Dinner",
      subtitles: [
        "Candlelight Dinners in NCR",
        "Private Candlelight Dinners",
        "Lunch Specials",
        "Private Movie &amp; Dinners",
        "Cabana Dining Experience",
        "Dining at 5 Star Properties",
        "Outdoor Candlelight Dining",
        "Poolside Candlelight Dinners",
        "Pocket Friendly Candlelight Dinners",
      ],
    },
    {
        image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/balloon_decoration-removebg-preview-1.png",
      title: "Decorations",
      subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],
    },
    {image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/couple.png", title: "Anniversary Celebrations", subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],},
    { image:"https://cdn.togetherv.com/party-decoration-icon_1679913296.webp",title: "Birthday Surprises" ,subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],},
    { image: "https://cdn.togetherv.com/romantic-stays-icon_1682410730.webp",title: "Room Decorations" ,subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ],},
      {
        image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/cake_icon_1_-_Copy-removebg-preview.png",
        title: "Cakes",
        subtitles: [
          "Kids Birthday Decoration",
          "Welcome Baby Decorations",
          "Baby Shower Decorations",
          "Birthday Activities",
          "Naming Ceremony Decorations",
          "Themed Birthday Cakes",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
        ],
      },
      {
        image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/flower.jfif",
        title: "Flowers",
        subtitles: [
          "Kids Birthday Decoration",
          "Welcome Baby Decorations",
          "Baby Shower Decorations",
          "Birthday Activities",
          "Naming Ceremony Decorations",
          "Themed Birthday Cakes",
          "1st Birthday Decorations",
          "Balloon Bouquets",
          "Annaprashan Decorations",
        ],
      },
    { image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Menu/gifts_icon_1-removebg-preview.png",title: "Gifts And Surprises",subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ], },
      
    { image: "https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Please+(1).png",title: "Occasions",subtitles: [
        "Balloon Decorations",
        "Welcome Baby Decorations",
        "Baby Shower Decorations",
        "Birthday Decorations",
        "Naming Ceremony Decorations",
        "Car Boot Decorations",
        "1st Birthday Decorations",
        "Balloon Bouquets",
        "Annaprashan Decorations",
        "First Night Decorations",
        "Bachelorette Decorations",
        "Ganesh Chaturthi Decorations"
      ], },
  ];
  const [searchParams,setSearchParams]=useSearchParams()
  // const firstcity=sessionStorage.getItem("cityname")
  const cityname=searchParams.get("city")
  const initialCategory=searchParams.get("category")
  const [city,setCity]=useState(cityname || "delhi")
  const [category,setcategory]=useState(initialCategory || "")
  useEffect(()=>{
    let params={
      city
    }
    if (category) {
      params.category = category;
    }
    setSearchParams(params)
  },[city,category])

  const handleClick=(cat)=>{
    setcategory(cat)
  }
  return (
    <div id='header'>
      <Carousel
    swipeable={false}
    draggable={false}
    // showDots={true}
    responsive={responsive}
    // containerClass="carousel-container abc"
    // autoPlay={true}
    infinite={true}
    // autoPlaySpeed={3000}
    >
      {titles?.map((el)=>{
        return  <Link to={`products?city=${cityname}&category=${el.title}`} style={{textDecoration:"none",color:"black"}}>
    <div className='headers-div' onClick={()=>handleClick(el.title)} >
        <img style={{height:"50%",width:"30%",cursor:"pointer"}} src={el.image} alt="" />
        <p>{el.title}</p>
      </div>
    </Link>  
      })}
    </Carousel>
    </div>
  )
}

export default Header