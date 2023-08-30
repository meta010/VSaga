import React, { useState } from "react";
import "./productcard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  image,
  name,
  description,
  price,
  ratings,
  booked_dates,
  category,
  addons,
  multiple_price,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    // Logic for sharing
  };
  const handlepage =()=>{
    window.scrollTo(0, 0);
  }

  return (
    <div className="card">
      <div className="card-header">
        <Link to={`/products/${id}`} onClick={handlepage}>
          <img src={image[0]} alt={name} />
        </Link>


        {/* <div className={`heart ${isLiked ? "liked" : ""}`} onClick={handleLike}>
          <img  src="https://img.icons8.com/?size=1x&id=87&format=png" alt="" />
        </div> */}

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`heart ${isLiked ? 'liked' : ""}`} onClick={handleLike}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>




      </div>
      <Link to={`/products/${id}`} onClick={handlepage} style={{ textDecoration: "none" }} preventScrollReset={false}>
        <div className="card-body">
          <h4 className="card-description">{category.toUpperCase()}</h4>
          <p className="card-title">{name.slice(0,15).toUpperCase()}...</p>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="card-footer"
          >
            <div className="card-price">
              <div>
                <p style={{fontSize:"15px",textAlign:"start"}}>
                  {multiple_price.length ? "" : "₹"}
                  {price}
                </p>
              </div>
              <div id="card-ratings">
                <div>
                  <h5 style={{color:"black"}}>{ratings}-Reviews 8</h5>
                </div>
                {/* <div>
                 
                    <img 
                    className="share"
                    onClick={handleShare}
                      style={{ width: "10%", height: "10%" }}
                      src="https://img.icons8.com/?size=1x&id=98959&format=png"
                      alt=""
                    />
                
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
