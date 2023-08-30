import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/checkout.css"
import Links from '../Components/HomeComponents/Links';
import AddressPage from './Shipping';
import { useSelector } from 'react-redux';
import Pay from '../Components/CheckoutComponents/Pay';
import axios from 'axios';
import Paywithcc from '../Components/CheckoutComponents/Paywithcc';

function Checkout() {
const [amt ,setamt] = useState(0)
const store = useSelector(store=>store)
const [show ,setshow]=useState(true)
const {loading,error,cart}=store
const user = JSON.parse(sessionStorage.getItem("userdetails"))
useEffect(()=>{

  if(user?.address){
    setshow(false)
    // console.log(user.address)
  }
},[])
const handleeditaddress=()=>{
  setshow(true)
}

const handlesavaddress=()=>{
  setshow(false)
}

useEffect(()=>{
  let user =JSON.parse(sessionStorage.getItem("userdetails")) 

axios.get(`${process.env.REACT_APP_Backend_url}/total/${user?._id}`).then((res)=>{
 setamt(res?.data?.data[0]?.total)
 console.log(res?.data?.data[0]?.total)
 })
},[])
  
   const total = sessionStorage.getItem("total_price")
  return (
    <>
    <div>

    <div  style={{background:"#f7f9fc"}}>
      <h2 style={{borderBottom:"2px solid white",display:"inline"}}>Checkout</h2>
    <div className='checkout-cont'>
      {show && <AddressPage handlesavaddress={handlesavaddress} />}
      {show===false && <div style={{OverflowY:"auto",minWidth:"50%",padding:"20px",margin:"auto",boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",height:"inherit",display:"flex",flexDirection:"column",alignItem:"center",borderRadius:"10px",justifyContent:"center",width:"40%",backgroundColor:"white",textAlign:"start"}} >
        <p style={{textAlign:"start",fontWeight:800}}>Summary</p>
        <p style={{textAlign:"start"}}> <span style={{fontWeight:700}}>Name :</span> {user.name}</p>
        <p style={{textAlign:"start"}}><span style={{fontWeight:700}}>Total :</span>{amt}</p>
        <p style={{textAlign:"start"}}><span style={{fontWeight:700}}>Address :</span> : {user.address}</p>
        {cart.map((el)=>{
          return <p>Cart Items : {el.name}</p>
        })}
        <button onClick={handleeditaddress} style={{display:"block",margin:"auto",fontSize:"20px",cursor:"pointer",padding:"5px 20px",background:"blue",color:"white",border:"none",borderRadius:"10px"}}>Edit</button>
        </div>
        }
    

    </div>
    </div>
<div>
<Pay />
<Paywithcc />
</div>
        </div>
    </>
    
    )
   
  
}

export default Checkout;
