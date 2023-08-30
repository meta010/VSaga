import React, { useEffect, useState } from 'react'
import "./category2.css" 
import { Link } from 'react-router-dom'
import {useSearchParams} from "react-router-dom"

const Categories2 = () => {
  const [searchParams,setSearchParams]=useSearchParams()
  const cityname=searchParams.get("city")
  const [city,setCity]=useState(cityname || "delhi")
  useEffect(()=>{
    let params={
      city
    }
    setSearchParams(params)
  },[city])
    let cards=[
        {category:"Balloons & Bouquet",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Balloons+%26+Bouquet.png"},
        {category:"bacholorette decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/bacholorette+decoration.png"},
        {category:"Baby welcome decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Baby+welcome+decoration.png"},
        {category:"anniversary Decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/anniversary+Decoration.png"},
        {category:"Baby shower",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Baby+shower.png"},
        {category:"Car booth decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Car+booth+decoration.png"},
        {category:"Stage decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Stage+decoration.png"},
        {category:"Naming celebration decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/Naming+celebration+decoration.png"},
        {category:"personalized gifts",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/personalized+gifts.png"},
        {category:"first night decoration",img:"https://valentinesagaassets.s3.ap-south-1.amazonaws.com/first+night+decoration.png"}
    ]



  return (
    <div className='category-cont'>
{cards.map((el)=>{

      return <div>
        <Link to={`products?city=${cityname}&category=${el.category}`}>
        <img className='cat2-img' src={el.img} alt="" />
        </Link>
      </div>
})}
     
    </div>
  )
}

export default Categories2
