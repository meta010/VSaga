import React, { useEffect, useState } from 'react'
import BookehCard from './BookehCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { handlegetfilterproducts, handlegetproducts } from '../../Redux/action';
import { Hearts } from 'react-loader-spinner';
import {useSearchParams} from "react-router-dom"


const Bookeh = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const cityname=searchParams.get("city")
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1124 },
          items: 5,
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
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 660, min: 0 },
          items: 2,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

const store = useSelector(store=>store)
const {error,products,loading} = store
const [bookeh ,setbookeh] = useState([])
const dispatch = useDispatch()
useEffect(()=>{

dispatch(handlegetfilterproducts(cityname)).then((res)=>{
  if(res.status=200 || res.status==201){

    let filterdata = res?.data?.data?.filter((el)=>{
      return el.category==="flowers"
  
    })
    setbookeh(filterdata)
  }else{
    setbookeh([])
  }
})

},[cityname])

    let heading="ELEGANT FLOWERS AND BOUQUETS"
  return (
    <div>
        <h1 style={{marginBottom:"30px",marginTop:"30px"}}>{heading}</h1>
     <Carousel
    swipeable={false}
    draggable={false}
    // showDots={true}
    // customRightArrow={<CustomRightArrow />}
    responsive={responsive}
    // autoPlay={true}
    infinite={true}
    // centerMode={true}
    autoPlaySpeed={3000}
    containerClass="carousel-container"
    >
    {loading==false?bookeh?.map((e)=>{

        return <BookehCard id={e._id} heading={heading} img={e.image[0]} multiple_price={e.multiple_price} name={e.name} desc={e.category.toUpperCase()} price={e.price} />
    }):error?<div>Error</div>:<div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Hearts
    height="80"
    width="80"
    color="red"
    ariaLabel="hearts-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    />
      </div>}
  </Carousel>
    </div>
  )
}

export default Bookeh