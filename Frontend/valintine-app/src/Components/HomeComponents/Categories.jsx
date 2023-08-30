import React, { useEffect, useState } from 'react'
import './categories.css'
import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom"
const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const cityname = searchParams.get("city")
  const [city, setCity] = useState(cityname || "delhi")
  useEffect(() => {
    let params = {
      city
    }
    setSearchParams(params)
  }, [city])
  return (
    <div className='cont-cat'>
        <div>
        <Link to={`products?city=${cityname}&category=decorations`}>

            <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/birthdayent.jpg" alt="" />
        </Link>
        </div>
        <div>
        <Link to={`products?city=${cityname}&category=candlelight dinner`}>
            <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/candleight.jpg" alt="" />
        </Link>
        </div>
        <div className='cont-cat-3'>
        <Link to={`products?city=${cityname}&category=decorations`}>
            <img src="https://valentinesagaassets.s3.ap-south-1.amazonaws.com/HomePage+Categories/premium+decor.jpg" alt="" />
        </Link>
        </div>
    </div>
  )
}

export default Categories
