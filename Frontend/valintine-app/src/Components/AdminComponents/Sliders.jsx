import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_addslider_Image_by_admin, handle_deleteslider_Image_by_admin, handle_getsliders_Image_by_admin, handlegetfilterproducts, handlegetproducts } from "../../Redux/action";
import { Button, Table, TableContainer, Td, Th, Thead, Tr, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Input, } from "@chakra-ui/react";
const Sliders = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [imageUrl,setImageUrl]=useState("")
  const [category,setcategory]=useState("")
  const [slider,setslider]=useState([])
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, allproducts } = store;


  useEffect(() => {
    dispatch(handle_getsliders_Image_by_admin()).then((res)=>{
      setslider(res?.data?.data)
    })
  }, []);
  // console.log(allproducts);

  const handleaddsliderImage = () => {
    let obj={
      images:imageUrl,category
          }
    console.log(obj)
    dispatch(handle_addslider_Image_by_admin(obj)).then((res) => {
      if (res.status == 200 || res.status == 201) {
        alert("Image Added")
      } else {
        alert("error")
      }
    })
    onClose()
  }
  const handledeletesliderImage = (id) => {
    dispatch(handle_deleteslider_Image_by_admin(id)).then((res) => {
      if (res.status == 200 || res.status == 201) {
        alert("Image Deleted")
      } else {
        alert("error")
      }
    })
  }



  return (
    <>
      <Button float={'right'} colorScheme='teal' variant='solid' onClick={onOpen}>
        ADD IMAGES
      </Button>
      <TableContainer style={{ minWidth: "100%", overflow: "hidden" }}>
        <Table>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>ID</Th>
              <Th>CATEGORY</Th>
              <Th>DELETE</Th>
            </Tr>
          </Thead>
          <tbody>
            {slider?.map((item) => (
              <Tr key={item._id}>
                <Td>
                  <img style={{ height: "50%", width: "50%" }} src={item?.images} alt="" />
                </Td>

                <Td>{item?._id}</Td>
                <Td>{item?.category}</Td>

                <Td>
                  <Button onClick={()=>handledeletesliderImage(item?._id)}>DELETE</Button>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>

      </TableContainer>


      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Input variant='filled' placeholder='Add Image Url' onChange={(e)=>setImageUrl(e.target.value)}/>
          <Input mt={'10px'} variant='filled' placeholder='Add Category' onChange={(e)=>setcategory(e.target.value)}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme='blue' onClick={()=>handleaddsliderImage()}>Add</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Sliders;
