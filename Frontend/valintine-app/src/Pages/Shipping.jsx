import React, { useRef } from 'react';
// import './AddressPage.css';
import '../Styles/shipping.css'
import { useDispatch } from 'react-redux';
import { handleaddress } from '../Redux/action';
import { toast } from 'react-toastify';
function AddressPage({handlesavaddress}) {
const dispatch = useDispatch()
  const user = JSON.parse(sessionStorage.getItem("userdetails"))
const userdet = useRef({})
  const handle_address_update =(e)=>{
e.preventDefault()
let houseno =(userdet.current['houseno'].value)
let street =(userdet.current['street'].value)
let city =(userdet.current['city'].value)
let state =(userdet.current['state'].value)
let postalcode =(userdet.current['postalcode'].value)

postalcode=""+postalcode
let address=houseno+" , "+street+" , "+city+" , "+state+" , "+postalcode

let obj={address}
console.log(user)
dispatch(handleaddress(user?._id,obj)).then((res)=>{
  if(res.status===201 || res.status==200){

    toast.success("Address Saved", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    handlesavaddress()
  }else{
    toast.error("Some Error Please retry", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    
  }

})
  }

  return (
    <div className="address-container">
      <h2>Address Information</h2>
      <form action="" onSubmit={handle_address_update}>
        <div>

        <label htmlFor="name">House No.</label>
        <input type="text" id="name" placeholder='Enter Your Name' ref={(e)=>userdet.current['houseno']=e} />
        </div>
     <div>

         <label htmlFor="street">Street</label>
        <input type="text" id="street" placeholder='Enter Your Street' ref={(e)=>userdet.current['street']=e} />
     </div>
    
      <div>
        <label htmlFor="city">City</label>
        <input type="text" id="city" placeholder='Enter Your City' ref={(e)=>userdet.current['city']=e} />
      </div>
      <div>
        <label htmlFor="state">State</label>
        <input type="text" id="state" placeholder='Enter Your State' ref={(e)=>userdet.current['state']=e} />
      </div>
      <div>
        <label htmlFor="postalCode">Postal Code</label>
        <input type="text" id="postalCode" placeholder='Enter Your Postal Code' ref={(e)=>userdet.current['postalcode']=e} />
      </div>
      <button className='saveadd'>Save Address</button>
      </form>
    </div>
  );
}

export default AddressPage;
