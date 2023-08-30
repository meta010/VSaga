import React from 'react'
import './addonscard.css'
import { Stack, Switch } from '@chakra-ui/react'
const AddonsCard = ({ img, name, desc, price }) => {
  return (
    <div id='addons-card'>
      <div>
        <img style={{ height: "150px", width: "150px" }} id='addons-img' src={img} alt="" />

      </div>

      <div style={{width:"200px"}}>
        <p>{name}</p>
        <p>{desc}</p>
        <p>₹{price}</p>
      </div>

      <div>

        <Switch colorScheme='pink' size='lg' />

      </div>

    </div>
  )
}

export default AddonsCard
