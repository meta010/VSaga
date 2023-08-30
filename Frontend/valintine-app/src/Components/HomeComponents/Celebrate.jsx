import React from 'react'
import "./celebrate.css"
const Celebrate = ({img}) => {
  return (
    <div style={{marginTop:"30px"}}>
        <h1 style={{marginBottom:"30px",marginTop:"30px"}}>CELEBRATE OCCASIONS WITH INDIA'S #1 ONLINE GIFT STORE</h1>
        <div id='celebrate-cont'>
        {img.map((e)=>{
            return <img key={e.id} src={e.img} alt="" />
        })}
        </div>
    </div>
  )
}

export default Celebrate