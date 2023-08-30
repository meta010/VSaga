import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductComponents/ProductCard";
import "../Styles/products.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {useSearchParams} from "react-router-dom"

// import SliderComp from "../Components/ProductComponents/Slidercomp";
// import SelectSmall from "../Components/ProductComponents/SelectComp";
// import SortComp from "../Components/ProductComponents/SortComp";
import { Hearts } from "react-loader-spinner";
import { handlegetfilterproducts, handlegetproducts } from "../Redux/action";
const Products = () => {
  const store = useSelector((store) => store);
  const [prodData,setProdData]=useState([])
  const dispatch = useDispatch();
  const { loading, error, products } = store;
  const [searchParams,setSearchParams]=useSearchParams()
  const cityname=searchParams.get("city")
  const initialCategory=searchParams.get("category")
  console.log(cityname,initialCategory)
  console.log()
  useEffect(() => {
    dispatch(handlegetfilterproducts(cityname, initialCategory)).then((res)=>(setProdData(res.data.data)))
    let params={
      city:cityname,
      category:initialCategory
    }
    setSearchParams(params)
  }, [cityname, initialCategory]);
  return (
    <div>
      <h1 style={{ textAlign: "start", marginTop: "20px", marginLeft: "20px" }}>
        All Experience
      </h1>
      {/* <hr /> */}

      <div id="filters">
        {/* <h1>filters</h1> */}

        <div id="filter-cont">
          {/* <div id='filterbyprice'>
      <h3>
        Filter By Price
      </h3>
        <SliderComp/>
    </div> */}
          {/* <div id='filterbycategory'>
      <h3>
        Filter by category
      </h3>
     <SelectSmall/>
    </div> */}
          {/* <div id='sortbyprice'>
      <h3>
        Sort By Price
      </h3>
      <SortComp/>
    </div> */}
        </div>
      </div>

      {loading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Hearts
            height="80"
            width="80"
            color="red"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : error ? (
        <>Error</>
      ) : (
        <div id="products">
          {prodData?.map((el) => {
            return (
              <ProductCard
                key={el._id}
                id={el._id}
                image={el.image}
                name={el.name}
                description={el.description}
                price={el.price}
                reviews={el.reviews}
                addons
                booked_dates={el.booked_dates}
                category={el.category}
                city={el.city}
                delivery_info={el.delivery_info}
                multiple_price={el.multiple_price}
                prod_details={el.prod_details}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
