import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handle_edit_product_by_admin, handlegetproducts } from '../../Redux/action';
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react';
import axios from 'axios';


export default function EditModal({id,products}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [product , setproduct] = React.useState([])
  const dispatch = useDispatch()
const store = useSelector(store=>store)

  React.useEffect(()=>{
    let findproduct = products?.filter((el)=>{
      return el._id===id
    })
    if(findproduct?.length){

      setproduct(findproduct[0])
    }
  },[products])



  const handle_edit_product = (e)=>{
  e.preventDefault()
    let prod_details = document.querySelectorAll(".prod_details")
    let product_details = []
    for (let i = 0; i < prod_details.length; i++) {
      product_details?.push(prod_details[i]?.value);
    }

    let prod_cat_price = document.querySelectorAll(".prod_cat_price")
    let prod_cat_name = document.querySelectorAll(".prod_cat_name")

    let Product_category = []
    for (let i = 0; i < prod_cat_name.length; i++) {
      Product_category.push({ name: prod_cat_name[i].value, price: prod_cat_price[i].value })
    }

    let Addons =  []
    let addons_name = document.querySelectorAll(".addons-name")
    let addons_desc = document.querySelectorAll(".addons-desc")
    let addons_img = document.querySelectorAll(".addons-url")
    let addons_price = document.querySelectorAll(".addons-price")
  
    if(product.addons?.length > 0){
      for (let i = 0; i < product?.addons?.length; i++) {
        Addons.push({ name: addons_name[i].value, price: addons_price[i].value, desc: addons_desc[i].value, img: addons_img[i].value })
      }
    }

    let desc = document.querySelectorAll(".description")
    let description = []
    for (let i = 0; i < desc.length; i++) {
      description?.push(desc[i]?.value);
    }



    let multiple_price_weight = document.querySelectorAll(".multiple_Price_weight")
    let multiple_price_price = document.querySelectorAll(".multiple_Price_price")

    let multiple_price_arr = []
    if (multiple_price_price.length > 0 && multiple_price_weight.length > 0) {

      for (let i = 0; i < product?.multiple_price.length; i++) {

        multiple_price_arr?.push({ weight: multiple_price_weight[i].value, price: multiple_price_price[i].value })
      }
      for (let i = 0; i < multiple_price_arr.length; i++) {
        if (multiple_price_arr[i].weight == "" || multiple_price_arr[i].price == "") {
          multiple_price_arr = []
          break
        }
      }
    }

    
    let delivery_info = document.querySelectorAll(".delivery")
    let Delivery_info = []
    for (let i = 0; i < delivery_info?.length; i++) {
      Delivery_info?.push(delivery_info[i]?.value);
    }
    
    
    let starttime = document.querySelectorAll(".starttime")
    let starttime_words = document.querySelectorAll(".starttime-words")
    let endtime = document.querySelectorAll(".endtime")
    let endtime_words = document.querySelectorAll(".endtime-words")

    let actualslots = []
    if (endtime.length && endtime_words.length && starttime_words.length && starttime.length) {
      for (let i = 0; i < product?.slots?.length; i++) {
        actualslots.push({ starttime: starttime[i].value, starttime_words: starttime_words[i].value, endtime_words: endtime_words[i].value, endtime: endtime[i].value })
      }
    }
    
    const url = document.querySelectorAll(".url") || ""
    let imgurls = []
    for(let i=0;i<url.length;i++){
      imgurls.push(url[i].value)
    }
    

    
const name = document.querySelector(".name").value   || ""
const category = document.querySelector(".category").value || ""
const video_link = document.querySelector(".video_link").value ||""
const price = document.querySelector(".price").value || ""
const city = document.querySelector(".city").value || "" 
const pincodes = document.querySelector(".pincodes").value
const subcategory = document.querySelector(".subcategory").value || ""


let obj = {
  _id:product._id,
  name: name,
  category: category,
  subcategory: subcategory,
  price: price,
  city: city,
  image: imgurls,
  prod_details: product_details,
  description: description,
  multiple_price: multiple_price_arr,
  addons: Addons,
  delivery_info: Delivery_info,
  pincodes: pincodes?.split(","),
  Product_category, slots: actualslots, video_link
}
console.log(obj)

dispatch(handle_edit_product_by_admin(product?._id,obj)).then((res)=>{
  if(res.status==200 || res.status==201){

    alert("Product Updated")
  }else{
    alert(`Product Not Updated(error),`)

  }
})

onClose()

  }


  return (
    <div style={{width:"80%"}}>
      <Button onClick={onOpen}>Edit</Button>
      <Modal
       isOpen={isOpen} onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalOverlay />
        <ModalContent>

          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           

        <Box >
          
          <div style={{height:"80vh",overflowY:"auto"}}>

    <label htmlFor="">Name</label>
    <input type="text" contentEditable={true} className='name' placeholder='Edit Name of Product' defaultValue={product?.name} />
    <label htmlFor="">category</label>
    <input type="text" contentEditable={true} className='category' placeholder='Edit category of Product' defaultValue={product?.category} />
    <label htmlFor="">image</label>
    {product?.image?.map((el)=>{
      return <input contentEditable={true} className='url' type="text" placeholder='Edit url of Product' defaultValue={el}/>
    })}
    <label htmlFor="">Video Link</label>
    <input contentEditable={true} type="text" className='video_link' placeholder='Edit Video Link of Product' defaultValue={product?.video_link} />
    {/* <input defaultValue={product?.image[0]} /> */}
    <label htmlFor="">price</label>
    <input contentEditable={true} type="text" className='price' placeholder='Edit price of Product' defaultValue={product?.price}  />
    <label htmlFor="">Sub Category</label>
    <input contentEditable={true} type="text" className='subcategory' placeholder='Edit Name of Product' defaultValue={product?.subcategory}  />
    <label htmlFor="">city</label>
    <input contentEditable={true} type="text" className='city' placeholder='Edit Name of Product' defaultValue={product?.city} />
    {product?.multiple_price?.length>0 && <label htmlFor="">multiple_price</label>}
    {product?.multiple_price?.map((el)=>{
    return <div style={{border:"1px solid gray",padding:"10px"}}>
      <label htmlFor="">Weight</label>
      <input contentEditable={true} type="text"  className='multiple_price_weight' placeholder='Edit Weight' defaultValue={el.weight} />
      <label htmlFor="">Price</label>
      <input contentEditable={true} type="text" className='multiple_price_price' placeholder='Edit Price' defaultValue={el.price} />
    </div>

  })}
    
    {product?.booked_dates?.length>0 && <label htmlFor="">booked_dates</label>}
  {product?.booked_dates?.map((el)=>{
    return <input  contentEditable={true} type="text" className='booked_dates' placeholder='Edit Booked Dates' defaultValue={el} />

  })}

<div >

    <label htmlFor="">addons</label>
    



    {product?.addons?.map((el)=>{
      return <div style={{border:"1px solid gray",padding:"10px"}}>
        <label>Name</label>
        <input contentEditable={true} type="text" className='addons-name' placeholder='addon-name' defaultValue={el.name} />
        <label>Price</label>
        <input contentEditable={true} type="text" className='addons-price' placeholder='addon-price' defaultValue={el.price} />
        <label>Description</label>
        <input contentEditable={true} type="text" className='addons-desc' placeholder='addon-desc' defaultValue={el.desc} />
        <label>Url</label>
        <input  contentEditable={true} type="text"   className='addons-url' placeholder='Edit Url' defaultValue={el.img} />
        <hr />
      </div>
    })}
    </div>


    <label htmlFor="">Slots</label>


{product?.slots?.map((el) => {
  return <>
    <div>

      <label htmlFor="">Start Time</label>
      <select className="starttime">
        <option defaultValue={el.starttime}>{el.starttime}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>

      <select className="starttime-words">
        <option value={el.starttime_words}>{el.starttime_words}</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
    <div>

      <label htmlFor="">End Time</label>
      <select className="endtime">
      <option defaultValue={el.endtime}>{el.endtime}</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
      <select className="endtime-words">
        <option value={el.endtime_words}>{el.endtime_words}</option>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>
    </div>
    
  </>
})}


    {/* <input type="text" placeholder='Edit Name of Product' defaultValue={product?.add} /> */}
    <label htmlFor="">prod_details</label>
    {product?.prod_details?.map((el,ind)=>{
      return <div>
        <input contentEditable={true} type="text" className='prod_details' placeholder={`Edit line ${ind}`} defaultValue={el} />
      </div>
    })}
    
    <label htmlFor="">description</label>
    {product?.description?.map((el,ind)=>{
      return <div>
        <input contentEditable={true} type="text"  className='description' placeholder={`Edit line ${ind}`} defaultValue={el} />
      </div>
    })}
    <label htmlFor="">delivery_info</label>
    {product?.delivery_info?.map((el,ind)=>{
      return <div>
        <input contentEditable={true} type="text" className='delivery' placeholder={`Edit line ${ind}`} defaultValue={el} />
      </div>
    })}
    {/* <input type="text" placeholder='Edit Name of Product' defaultValue={product?.delivery_info[0]}/> */}
    <label htmlFor="">pincodes</label>
    <input contentEditable={true} type="text" className='pincodes' placeholder='Edit Pincodes' defaultValue={product?.pincodes}/>
    <button
    style={{
      background: "blue",
      color: "white",
      padding: "10px 25px",
      display: "block",
      margin: "auto",
      cursor: "pointer",
      border: "none",
      borderRadius: "10px",
      marginTop: "20px",
    }}
    
    onClick={handle_edit_product}>Save</button>
          </div>
        </Box>
  </ModalBody>
</ModalContent>
      </Modal>
    </div>
  );
}
