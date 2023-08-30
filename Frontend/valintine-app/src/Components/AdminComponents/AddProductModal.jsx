import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handle_add_product_by_admin, handle_add_product_by_admin2, handlegetproducts } from "../../Redux/action";
import { MdDelete } from "react-icons/md";
import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";


export default function AddProductModal({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  let handleOpen = () => setOpen(true);
  let [open, setOpen] = useState(false);
  // let handleClose = () => setOpen(false);
  let [price, setprice] = useState("");
  let [images, setimages] = useState([1]);
  let [Proddetails, setProddetails] = useState([1]);
  let [Desc, setDesc] = useState([1]);
  let [Multiple_price, setMultiple_price] = useState([1]);
  let [addons, setaddons] = useState([1]);
  let [Delivery_info, setDelivery_info] = useState([1]);
  let [Product_category, setProduct_category] = useState([1]);
  let [offers, setoffers] = useState([1]);
  let [slots, setslots] = useState([1]);
  const { loading, error } = useState()
  const dispatch = useDispatch()

  const handleImages = (i) => {
    if (i >= 0) {
      let tempimg = [...images];
      tempimg.splice(i, 1);
      setimages(tempimg);
    } else {
      setimages([...images, images.length + 1]);
    }
  };

  const handleProd_details = (i) => {
    setProddetails([...Proddetails, Proddetails.length + 1]);
  };
  const handle_Desc = (i) => {
    setDesc([...Desc, Desc.length + 1]);
  };

  const handle_Multiple_price = (i) => {
    setMultiple_price([...Multiple_price, Multiple_price.length + 1]);
  };
  const handleAddons = (i) => {
    setaddons([...addons, addons.length + 1]);
  };
  const handle_delivery_info = (i) => {
    setDelivery_info([...Delivery_info, Delivery_info.length + 1]);
  };
  const handle_prod_cat = (i) => {
    setProduct_category([...Product_category, Product_category.length + 1]);
  };
  const handle_offers = (i) => {
    setoffers([...offers, offers.length + 1]);
  };
  const handle_add_slots = (i) => {
    setslots([...slots, slots.length + 1]);
  };

  const handleadd = (e) => {
    e.preventDefault()

    let urls = document.querySelectorAll(".urls")
    // let imgurls = []
    // for (let i = 0; i < urls.length; i++) {
    //   imgurls?.push(urls[i]?.files[0]);

    // }
    let imgurls = []
    for (let i = 0; i < urls.length; i++) {
      imgurls?.push(urls[i].value);

    }

    
    
    // Image convert into url from Aws
    // for (let i = 0; i < imgurls.length; i++) {
    //   const formData = new FormData();
    //   formData.append('file', imgurls[i]);
    //   axios.post(`${process.env.REACT_APP_Backend_url}/aws/convert`, formData).then((res) => {
    //     // setawsimages([...imagesaws, res.data.url])
    //     imgarr.push(res.data.url)      
    //   }).catch((err) => console.log(err.message))

    // }

  

    let desc = document.querySelectorAll(".description")
    let description = []
    for (let i = 0; i < desc.length; i++) {
      description?.push(desc[i]?.value);
    }


    let prod_details = document.querySelectorAll(".prod_det")
    let product_details = []
    for (let i = 0; i < prod_details.length; i++) {
      product_details?.push(prod_details[i]?.value);
    }



    let delivery_info = document.querySelectorAll(".delivery_info")
    let Delivery_info = []
    for (let i = 0; i < prod_details.length; i++) {
      Delivery_info?.push(delivery_info[i]?.value);
    }
    // {addons:[{name:"",price:"",description:"",image:""}]}
    let addons_name = document.querySelectorAll(".addons-name")
    let addons_desc = document.querySelectorAll(".addons-desc")
    let addons_img = document.querySelectorAll(".addons-img")
    let addons_price = document.querySelectorAll(".addons-price")

    let Addons = []
    for (let i = 0; i < addons.length; i++) {

      Addons.push({ name: addons_name[i].value, price: addons_price[i].value, desc: addons_desc[i].value, img: addons_img[i].value })
    }




    // Image convert into url from Aws
    // for (let i = 0; i < Addons.length; i++) {
    //   const formData = new FormData();
    //   formData.append('file', Addons[i].img);
    //   axios.post(`${process.env.REACT_APP_Backend_url}/aws/convert`, formData).then((res) => {
    //     Addons[i].img = res.data.url + ""
    //   }).catch((err) => console.log(err.message))

    // }



    let prod_cat_price = document.querySelectorAll(".prod_cat_price")
    let prod_cat_name = document.querySelectorAll(".prod_cat_name")

    let Product_category = []
    for (let i = 0; i < prod_cat_name.length; i++) {
      Product_category.push({ name: prod_cat_name[i].value, price: prod_cat_price[i].value })
    }


    for (let i = 0; i < Addons.length; i++) {
      if (Addons[i].name == "" || Addons[i].price == "" || Addons[i].desc == "" || Addons[i].img == "") {
        Addons = []
        break
      }
    }




    let multiple_price_weight = document.querySelectorAll(".multiple_Price_weight")
    let multiple_price_price = document.querySelectorAll(".multiple_Price_price")

    let multiple_price_arr = []
    if (multiple_price_price.length > 0 && multiple_price_weight.length > 0) {

      for (let i = 0; i < Multiple_price.length; i++) {

        multiple_price_arr?.push({ weight: multiple_price_weight[i].value, price: multiple_price_price[i].value })
      }
      for (let i = 0; i < multiple_price_arr.length; i++) {
        if (multiple_price_arr[i].weight == "" || multiple_price_arr[i].price == "") {
          multiple_price_arr = []
          break
        }
      }
    }



    let starttime = document.querySelectorAll(".starttime")
    let starttime_words = document.querySelectorAll(".starttime-words")
    let endtime = document.querySelectorAll(".endtime")
    let endtime_words = document.querySelectorAll(".endtime-words")
    let actualslots = []
    if (endtime.length && endtime_words.length && starttime_words.length && starttime.length) {

      for (let i = 0; i < slots.length; i++) {
        actualslots.push({ starttime: starttime[i].value, starttime_words: starttime_words[i].value, endtime_words: endtime_words[i].value, endtime: endtime[i].value })
      }
    }



    const name = document.querySelector("#name").value || ""
    const city = document.querySelector("#city").value || ""
    const category = document.querySelector("#category").value || ""
    const pincodes = document.querySelector("#pincodes").value || ""
    const price = document.querySelector("#price").value || ""
    const subcategory = document.querySelector("#subcategory").value || ""
    const video_link = document.querySelector("#video_link").value || ""


   

    onClose()
    let timer
    if (timer) {
      alert("Previous Request Pending")
      return
    }


setTimeout(() => {
  
  
  let obj = {
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
    };

   
    dispatch(handle_add_product_by_admin2(obj)).then((res) => {
      
      if (res.status == 200 || res.status == 201) {
        
        alert("Product added successfully")
      } else {
        alert("error")
        
      }
    })
    
  }, 2000);


  };


  return (
    <div >
      <Button
        onClick={onOpen}
        style={{
          float: "right",
          margin: "10px",
          padding: "10px 15px",
          color: "white",
          background: "blue",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
          fontSize: "18px",

        }}
      >
        Add Product
      </Button>
      {loading ? <div
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
      </div> : error ? <div>
        error
      </div> : <Modal

        isOpen={isOpen} onClose={onClose}


      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"

      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>


            <Box style={{ overflowY: "auto", marginTop: "20px" }} >

              <hr />
              <Box style={{ overflowY: "auto", marginTop: "20px" }}>
                <form action="">
                  <label htmlFor="">Name</label>
                  <input type="text" id="name" placeholder="Enter Name of Product" />
                  <label htmlFor="">Category</label>
                  {/* <input type="text" id="category" placeholder="Enter Name of Category" /> */}
                  <select id="category">
                    <option value="cakes">Cakes</option>
                    <option value="candlelight dinner">Candlelight Dinner</option>
                    <option value="flowers">Flowers</option>
                    <option value="decorations">Decorations</option>
                    <option value="anniversary celebrations">Anniversary Celebrations</option>
                    <option value="birthday surprises">Birthday Surprises</option>
                    <option value="kids celebrations">Kids Celebrations</option>
                    <option value="room decorations">Room Decorations</option>
                    <option value="gifts and surprises">Gifts And Surprises</option>
                    <option value="occasions">Occasions</option>
                  </select>
                  <label htmlFor="">Video Link</label>
                  <input type="text" id="video_link" placeholder="Enter Name of video_link" />
                  <label htmlFor="">SubCategory</label>
                  {/* <input type="text" id="subcategory" placeholder="Enter Name of SubCategory" /> */}
                  <select id="subcategory">
                          <option value="Kids Birthday Decoration">Kids Birthday Decoration</option>
                          <option value="Welcome Baby Decorations">Welcome Baby Decorations</option>
                          <option value="Baby Shower Decorations">Baby Shower Decorations</option>
                          <option value="Birthday Activities">Birthday Activities</option>
                          <option value="Naming Ceremony Decorations">Naming Ceremony Decorations</option>
                          <option value="Themed Birthday Cakes">Themed Birthday Cakes</option>
                          <option value="1st Birthday Decorations">1st Birthday Decorations</option>
                          <option value="Balloon Bouquets">Balloon Bouquets</option>
                          <option value="Annaprashan Decorations">Annaprashan Decorations</option>
                          <option value="Candlelight Dinners in NCR">Candlelight Dinners in NCR</option>
                          <option value="Private Candlelight Dinners">Private Candlelight Dinners</option>
                          <option value="Lunch Specials">Lunch Specials</option>
                          <option value="Cabana Dining Experience">Cabana Dining Experience</option>
                          <option value="Dining at 5 Star Properties">Dining at 5 Star Properties</option>
                          <option value="Outdoor Candlelight Dining">Outdoor Candlelight Dining</option>
                          <option value="Poolside Candlelight Dinners">Poolside Candlelight Dinners</option>
                          <option value="Pocket Friendly Candlelight Dinners">Pocket Friendly Candlelight Dinners</option>
                          <option value="Private Movie And Dinners">Private Movie And Dinners</option>
                          <option value="Balloon Decorations">Balloon Decorations</option>
                          <option value="Birthday Decorations">Birthday Decorations</option>
                          <option value="Car Boot Decorations">Car Boot Decorations</option>
                          <option value="First Night Decorations">First Night Decorations</option>
                          <option value="Bachelorette Decorations">Bachelorette Decorations</option>
                          <option value="Ganesh Chaturthi Decorations">Ganesh Chaturthi Decorations</option>
                          <option value="Birthday Cakes">Birthday Cakes</option>
                          <option value="Kid's Birthday Cakes">Kid's Birthday Cakes</option>
                          <option value="Anniversary Cakes">Anniversary Cakes</option>
                          <option value="1st Anniversary Cake">1st Anniversary Cake</option>
                          <option value="25th Anniversary Cake">25th Anniversary Cake</option>
                          <option value="Truffle Cakes">Truffle Cakes</option>
                          <option value="Chocolate Cakes">Chocolate Cakes</option>
                          <option value="Black Forest Cakes">Black Forest Cakes</option>
                          <option value="Butterscotch Cakes">Butterscotch Cakes</option>
                          <option value="Pineapple Cakes">Pineapple Cakes</option>
                          <option value="Photo Cakes">Photo Cakes</option>
                          <option value="Designer Cakes">Designer Cakes</option>
                          <option value="Dry Cakes">Dry Cakes</option>
                          <option value="Roses">Roses</option>
                          <option value="Carnations">Carnations</option>
                          <option value="Orchids">Orchids</option>
                          <option value="Gerberas">Gerberas</option>
                          <option value="Lilies">Lilies</option>
                          <option value="Mixed Flowers">Mixed Flowers</option>
                          <option value="Exotic Flowers ">Exotic Flowers </option>
                          <option value="Same Day Delivery">Same Day Delivery</option>
                          <option value="Premium Flowers">Premium Flowers</option>
                          <option value="New Arrivals">New Arrivals</option>
                          <option value="Flowers N Cakes">Flowers N Cakes</option>
                          <option value="Flowers N Chocolates">Flowers N Chocolates</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Love N Romance">Love N Romance</option>
                          <option value="Congratulations">Congratulations</option>
                          <option value="Gifts & Surprises">Gifts & Surprises</option>
                        </select>
                  <label htmlFor="">Images (size:1200X800)</label>
                  {images?.map((el, i) => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        <input className="urls" type="text" placeholder="Enter url of Image" />
                        <MdDelete
                          color="#3498db"
                          onClick={() => handleImages(i)}
                          size={"30px"}
                          cursor={"pointer"}
                        />
                      </div>
                    );
                  })}
                  <Button onClick={handleImages}>Add More Rows</Button>
                  <label htmlFor="">Price</label>
                  <input type="text" className="price" id="price" placeholder="Enter Price of Product" />
                  <label htmlFor="">City</label>
                  {/* <input type="text" id="city" placeholder="Enter Name of City" /> */}
                  <select className="starttime" id="city">
                          <option value="delhi">Delhi</option>
                          <option value="jaipur">Jaipur</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="kolkata">Kolkata</option>
                          <option value="indore">Indore</option>
                          <option value="pune">Pune</option>
                          <option value="all india">ALL India</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="kanpur">Kanpur</option>
                          <option value="chennai">Chennai</option>
                          <option value="jammu">Jammu</option>
                          <option value="lucknow">Lucknow</option>
                          <option value="chandigarh">Chandigarh</option>
                          <option value="hyderabad">Hyderabad</option>
                        </select>
                  <label htmlFor="">Multiple_price</label>
                  {Multiple_price.map(() => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        <input className="multiple_Price_weight" type="text" placeholder="Enter Name of Weight" />
                        <input className="multiple_Price_price" type="text" placeholder="Enter Name of Price" />
                        <MdDelete color="#3498db" size={"50px"} cursor={"pointer"} />
                      </div>
                    );
                  })}
                  <Button onClick={handle_Multiple_price}>Add more Rows</Button>
                  <label htmlFor="">Slots</label>


                  {slots.map(() => {
                    return <>
                      <div>

                        <label htmlFor="">Start Time</label>
                        <select className="starttime">
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
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                      <div>

                        <label htmlFor="">End Time</label>
                        <select className="endtime">
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
                          <option value="AM">AM</option>
                          <option value="PM">PM</option>
                        </select>
                      </div>
                      <MdDelete color="#3498db" size={"50px"} cursor={"pointer"} />
                    </>
                  })}



                  <Button onClick={handle_add_slots}>Add more Rows</Button>

                  <label htmlFor="">Addons (size:500X300)</label>
                  {addons.map(() => {
                    return (
                      <div style={{ marginTop: "5px" }}>
                        <input style={{ marginTop: "5px" }} className="addons-name" type="text" placeholder="Enter Name of Addon" />
                        <br />
                        <input style={{ marginTop: "5px" }} className="addons-desc" type="text" placeholder="Enter Description of Addon" />
                        <br />
                        <input style={{ marginTop: "5px" }} className="addons-img" type="text" placeholder="Enter Image url  of Addon" />
                        <br />
                        <input style={{ marginTop: "5px" }} className="addons-price" type="text" placeholder="Enter Price of Addon" />
                        <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                      </div>
                    );
                  })}
                  <Button onClick={handleAddons}>Add more Rows</Button>

                  <label htmlFor="">Product Details</label>
                  {Proddetails.map(() => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        <input
                          className="prod_det"
                          type="text"
                          placeholder="Enter Name of Prod_details"
                        />
                        <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                      </div>
                    );
                  })}



                  <Button onClick={handleProd_details}>Add more Rows</Button>
                  {/* <label htmlFor="">Product Offers</label>
                  {offers.map(() => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        <input
                          className="prod_offer_desc"
                          type="text"
                          placeholder="Enter Offer Description"
                        />
                        <input
                          className="prod_offer_image"
                          type="file"
                          placeholder="Enter Offer Image Url"
                        />
                        <input
                          className="prod_offer_terms"
                          type="text"
                          placeholder="Enter Offer Terms"
                        />
                        <input
                          className="prod_offer_price"
                          type="number"
                          placeholder="Enter Offer Price"
                        />
                        <MdDelete color="#3498db" size={"70px"} cursor={"pointer"} />
                      </div>
                    );
                  })}

                  <Button onClick={handle_offers}>Add more Rows</Button> */}

                  <label htmlFor="">Product category</label>
                  {Product_category.map(() => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        {/* <input
                          className="prod_cat_name"
                          type="text"
                          placeholder="Enter Product Category Name"
                        /> */}
                         <select className="prod_cat_name" style={{width:"300px",fontSize:"18px"}}>
                          <option value="veg">Veg</option>
                          <option value="nonveg">NonVeg</option>
                          <option value="eggless">Eggless</option>
                          <option value="heartshape">Heart Shape</option>
                        </select>
                        <input
                          className="prod_cat_price"
                          type="text"
                          placeholder="Enter Product Category Price"
                        />
                        <MdDelete color="#3498db" size={"50px"} cursor={"pointer"} />
                      </div>
                    );
                  })}



                  <Button onClick={handle_prod_cat}>Add more Rows</Button>

                  <label htmlFor="">Description</label>
                  {Desc.map((el, i) => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        <input
                          className="description"
                          type="text"

                          placeholder={`Enter Line ${i + 1} Description`}
                        />
                        <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                      </div>
                    );
                  })}
                  <Button onClick={handle_Desc}>Add more Rows</Button>

                  <label htmlFor="">Delivery_info</label>
                  {Delivery_info.map((el, i) => {
                    return (
                      <div style={{ display: "flex", marginTop: "5px" }}>
                        <input
                          className="delivery_info"
                          type="text"
                          placeholder={`Enter Line ${i + 1} of Delivery_info`}
                        />
                        <MdDelete color="#3498db" size={"30px"} cursor={"pointer"} />
                      </div>
                    );
                  })}
                  <Button onClick={handle_delivery_info}>Add more Rows</Button>

                  <label htmlFor="">Pincodes</label>
                  <input id="pincodes" type="text" placeholder="Enter Name of Pincodes" />
                  <br />

                  <button
                    onClick={handleadd}
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
                  >
                    Add Product
                  </button>
                </form>
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>}
    </div>
  );
}
