import React, { useEffect } from 'react'
import WishListCard from '../Components/ProductComponents/WishlistCard'
import { useDispatch, useSelector } from 'react-redux';
import { handlegetfilterproducts, handlegetproducts } from '../Redux/action';
import '../Styles/products.css'
const Wishlist = () => {

    const store = useSelector((store) => store);
    const dispatch = useDispatch();
    const { loading, error, allproducts } = store;
  
  
    useEffect(() => {
      dispatch(handlegetproducts());
    }, []);


  return (
    <div>
        <h1>Wishlist</h1>
   
   <div id="products" style={{marginTop:"50px"}}>

   {allproducts?.map((el) => {
            return (<WishListCard key={el._id}
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
                prod_details={el.prod_details}/> 
                )
            }
        )}
   </div >

    </div>
  )
}

export default Wishlist