import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handle_get_allorders } from '../Redux/action'
import '../Styles/orders.css'
import { Button } from '@chakra-ui/react'
export default function OrdersPage() {
const dispatch = useDispatch()
const store = useSelector((store)=>store)
const {orders,error}=store
const user = JSON.parse(sessionStorage.getItem('userdetails')) || ""
useEffect(()=>{
dispatch(handle_get_allorders(user._id)).then((res)=>{

})

},[])

  return (
    <div id='orders-cont'>

<h1>My Orders</h1>
{
orders?.map((el)=>{

  return <div id='orders-card'key={el._id}>

<div>
<img id={"orders-img"} src={el.image[0]} alt="" />
</div>
<div>
<h3>{el?.name}</h3>
<h3>{el.multiple_price.length?"":"₹"}{el.price}</h3>
</div>

<div id='shipping-orders'>
<Button color={el.status==="Pending"?"secondary":"success"}>{el.status}</Button>
</div>

</div>

})



}

    </div>
  )
}
