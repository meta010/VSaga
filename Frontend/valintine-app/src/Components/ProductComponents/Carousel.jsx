import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";
const AsNavFor = ({ image }) => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        // className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  const PrevArrow = ({ onClick }) => (
    <button className="slick-arrow slick-prev" onClick={onClick}>
      Previous
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button className="slick-arrow slick-next" onClick={onClick}>
      Next
    </button>
  );
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const params = useParams();
  const id = params.id;
  const [product, setproduct] = useState([]);
  const store = useSelector((store) => store);
  const { error, loading, products } = store;

  useEffect(() => {
    // Set up the nav1 and nav2 references after component mount
    slider1.current = slider1.current;
    slider2.current = slider2.current;
  }, []);

  useEffect(() => {
    let findproduct = products?.filter((el) => {
      return el._id === id;
    });
    setproduct(findproduct);
  }, [products,id]);

  // console.log("asnav", product[0]?.image);

  return (
    <div style={{ width: "100%", overflow: "hidden", height: "auto"}}>
      <Slider
        slidesToShow={1}
        swipeToSlide={true}
        focusOnSelect={true}
        asNavFor={slider2.current}
        ref={slider1}
        dots={true}
        arrows={true}
        infinite={true}
        className="slick_carousel"
        // prevArrow={<PrevArrow />}
        // nextArrow={<NextArrow />}
        // {...settings}
        vertical={false}
        // adaptiveHeight={true}
      >
        {product[0]?.image?.map((el) => {
          return (
            <div key={el}>
              <img
                style={{ cursor: "pointer" }}
                width={"100%"}
                src={el}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
      {/* <h4>Second Slider</h4> */}
      <Slider
        // {...settings2}
        slidesToShow={3}
        dots={true}
        arrows={true}
        infinite={true}
        // vertical={false}
        adaptiveHeight={true}
        asNavFor={slider1.current}
        ref={slider2}
        className="slick_carousel"
        swipeToSlide={true}
        focusOnSelect={true}
        // prevArrow={<PrevArrow />}
        // nextArrow={<NextArrow />}
        style={{ display: "flex" }}
      >
        {product[0]?.image?.map((el) => {
          return (
            <div key={el} style={{ border: "1px solid red" }}>
              <img
                style={{ cursor: "pointer",marginLeft:"10px" }}
                width={"100%"}
                src={el}
                alt=""
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default AsNavFor;
