import React from 'react'
import './addons.css'
import AddonsCard from './AddonsCard'
const Addons = ({name,price,desc,img}) => {
  return (
    <div style={{height:"auto",backgroundColor:"white"}}>
      <p style={{fontWeight:800,fontSize:"medium"}}>Customizations</p>
    <div id='addons-cont'>
      <hr />

<AddonsCard name={name} desc={desc} price={price} img={"https://deowgxgt4vwfe.cloudfront.net/uploads/166842035620352.jpg"} />
    </div>
<a style={{marginLeft:"30px",marginBottom:"20px"}} href='#'>Read More...</a>
    </div>
  )
}

export default Addons
