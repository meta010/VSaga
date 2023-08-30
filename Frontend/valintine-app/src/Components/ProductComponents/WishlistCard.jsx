import React, { useState } from "react";
import "./productcard.css";
import { Link } from "react-router-dom";
import "./productcard.css"
const WishListCard = ({
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

  return (
    <div className="card">
      <div className="card-header">
        <Link to={`/products/${id}`}>
          <img className="card-image" src={image[0]} alt={name} />
        </Link>
        <div className={`heart ${isLiked ? "liked" : ""}`} onClick={handleLike}>
          <img src="https://img.icons8.com/?size=1x&id=87&format=png" alt="" />
        </div>
      </div>
      <Link to={`/products/${id}`} style={{ textDecoration: "none" }}>
        <div className="card-body">
          <h4 className="card-description">{description[0].slice(0,20)}...</h4>
          <h5 className="card-title">{name.slice(0,15)}...</h5>
          <div
            style={{ display: "flex", flexWrap: "wrap" }}
            className="card-footer"
          >
            <div className="card-price">
              <div>
                <h3 style={{fontSize:"15px",textAlign:"start"}}>
                  {multiple_price.length ? "" : "₹"}
                  {price}
                </h3>
              </div>
              <div id="card-ratings">
                <div>
                  <h5 style={{color:"black"}}>{ratings}-Reviews 8</h5>
                </div>
                <div>
                    <button>Add To cart</button>
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

export default WishListCard;
