import React, { useEffect, useState } from 'react'
import './links.css'
import { useDispatch, useSelector } from "react-redux";
import { handlegetfilterproducts, handlegetproducts } from '../../Redux/action';
import { Link } from 'react-router-dom';
import {useSearchParams} from "react-router-dom"

const Links = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
  const [searchParams,setSearchParams]=useSearchParams()
  const cityname=searchParams.get("city")
  // const [prodData,setProdData]=useState([])
  const { loading, error, allproducts } = store;
  useEffect(() => {
    dispatch(handlegetproducts())
  }, [cityname])
  const TruncatedString = ( inputString) => {
    const words = inputString.split(' ');
    const truncatedWords = words.slice(0, 3);
    const truncatedString = truncatedWords.join(' ');
    return <p>{truncatedString}{words.length > 3 ? '...' : ''}</p>;
  };
  return (
    <div id='links-cont'>
      <div>
        <h1>LATEST</h1>
        <div>
          {allproducts?.map((link, index) => (
            index <= 3 && <Link to={`/products?city=${cityname}&category=${link.category}`}><div key={index} className='items'>
              <img src={link.image[0]} alt={link.name}/>
              <div>
                <a href='/'>{TruncatedString(link.name)}</a>
                <h3>₹ {link.price}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div >
        <h1>BEST SELLING</h1>
        <div >
          {allproducts?.map((link, index) => (
            index > 3 && index <= 7 && <Link to={`/products?city=${cityname}&category=${link.category}`}><div key={index} className='items'>
              <img src={link.image[0]} alt={link.name} />
              <div>

                <a href='/'>{TruncatedString(link.name)}</a>
                <h3>₹ {link.price}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h1>TOP RATED</h1>
        <div>
          {allproducts?.map((link, index) => (
            index > 7 && index <= 11 && <Link to={`/products?city=${cityname}&category=${link.category}`} key={index}> <div className='items'>
              <img src={link.image[1]} alt={link.name}/>
              <div>
                <a href='/'>{TruncatedString(link.name)}</a>
                <h3>₹ {link.price}</h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Links