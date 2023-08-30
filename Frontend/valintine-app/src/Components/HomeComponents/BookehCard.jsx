import React from 'react'
import './bookeh.css'
import { Link } from 'react-router-dom';
const BookehCard = ({ id, img, name, desc, price, heading }) => {
  // console.log(multiple_price);
  const handlepage = () => {
    window.scrollTo(0, 0);
  }
  return (
    <Link to={`/products/${id}`} style={{ textDecoration: "none" }} onClick={handlepage}>

      <div id='bookeh-card'>
        <div>

          <img className='card-image' width={"100%"} src={img} alt="" />
        </div>
        <div>
          <span style={{ color: "gray", textAlign: "start" }}>{desc}</span>
          <p style={{ color: "black", textAlign: "start", fontFamily: "sans-serif" }} >{name?.slice(0, 23)}</p>
          <p style={{ color: "black" }} >₹{price}</p>
          {/* {multiple_price.length>0 && <h4>{price}</h4>} */}
        </div>
      </div>
    </Link>

  )
}

export default BookehCard