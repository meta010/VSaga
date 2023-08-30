import React from 'react'
import "./cel2.css"
import {Link} from 'react-router-dom'
const Celeb2 = ({img}) => {
  console.log(img)
  return (
    <div>
        <div id='celebrate2-cont'>
        {img.map((e)=>{
            return <Link to={"/products"}>
             <img key={e.id} src={e.img} alt="" />
            </Link>
        })}
        </div>
    </div>
  )
}

export default Celeb2