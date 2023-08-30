
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React from 'react'
import { useDispatch } from 'react-redux';
import { handle_add_blog } from '../../Redux/action';

const AddBlogs = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const handlesubmit = (e) => {
    e.preventDefault();

    const authorheading = document.querySelector(".author-heading").value;

    const authordescription = document.querySelector(".author-description").value;

    const authorname = document.querySelector(".author-name").value;

    const authordate = document.querySelector(".author-date").value;

    const authorimage = document.querySelector(".author-image").value;

    const blogimage = document.querySelector(".blog-image").value;

    const blogdescription = document.querySelector(".blog-description").value;

    const subimage1 = document.querySelector(".sub-image-1").value;

    const subcontent1 = document.querySelector(".sub-content-1").value;

    const subimage2 = document.querySelector(".sub-image-2").value;

    const subcontent2 = document.querySelector(".sub-content-2").value;

    const subimage3 = document.querySelector(".sub-image-3").value;

    const subcontent3 = document.querySelector(".sub-content-3").value;
    const title = document.querySelector(".title").value
    const category = document.querySelector(".category").value
    const city = document.querySelector(".city").value
    const heading = document.querySelector(".heading").value
    const subheading = document.querySelector(".subheading").value
    const blogdate = document.querySelector(".blog-date").value
    const userId = document.querySelector(".userId").value
    const metatags = document.querySelector(".metatags").value
    const hashtags = document.querySelector(".hashtags").value
    let obj = {
      category,
      city,
      description: blogdescription,
      headings: heading,
      subheadings: subheading,
      date: blogdate,
      userID: userId,
      metatags,
      hashtags,
      comments:[],
      title, authorheading, authordescription, authorname, authordate, authorimage,
      blogimage, blogdescription, subimage1, subcontent1, subimage2, subcontent2,
      subimage3, subcontent3
    }
    dispatch(handle_add_blog(obj)).then((res)=>{
      if(res.status==200 || res.status==201){
        alert("Blog Added successfully")
      }else{
        alert("Blog Not Added Error")

      }
    })
    onClose()

  }



  return (
    <div>

      <Button style={{float:"right",color:"white",background:"blue",display:"block"}} onClick={onOpen}>ADD BLOG</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handlesubmit}>
            

              <label>TITLE</label>
              <input type="text" placeholder="Enter Title" className="title"></input>

              <label>CATEGORY</label>
              <input type="text" placeholder="Enter Category" className="category"></input>

              <label>CITY</label>
              <input type="text" placeholder="Enter City" className="city"></input>


              <label>HEADING</label>
              <input type="text" placeholder="Enter heading" className="heading"></input>

              <label>SUBHEADING</label>
              <input type="text" placeholder="Enter Subheading " className="subheading"></input>


              <label>BLOG DATE </label>
              <input type="text" placeholder="Enter Blog Date" className="blog-date"></input>

              <label>USERID</label>
              <input type="text" placeholder="Enter UserID" className="userId"></input>

              <label>METATAGS</label>
              <input type="text" placeholder="Enter Metatags" className="metatags"></input>

              <label>HASHTAGS</label>
              <input type="text" placeholder="Enter AuthorNam" className="hashtags"></input>

              <label>AUTHOR HEADING</label>
              <input type="text" placeholder="Enter AuthorHeading" className="author-heading"></input>

              <label>AUTHOR DESCRIPTION</label>
              <input type="text" placeholder="Enter author description" className="author-description"></input>

              <label>AUTHOR NAME</label>
              <input type="text" placeholder="Enter author name" className="author-name"></input>

              <label>AUTHOR DATE</label>
              <input type="text" placeholder="Enter author date" className="author-date"></input>

              <label>AUTHOR IMAGE</label>
              <input type="text"  placeholder="Enter authorimage url" className="author-image"></input>

              <label>BLOG IMAGE</label>
              <input type="text" placeholder="Enter Blog Url"  className="blog-image"></input>

              <label>BLOG DESCRIPTION</label>
              <input type="" placeholder="Enter blog description" className="blog-description"></input>

              <label>SUB IMAGE 1</label>
              <input type="" placeholder="Enter sub image 1" className="sub-image-1"></input>

              <label>SUB CONTENT 1</label>
              <input type="" placeholder="Enter sub content 1" className="sub-content-1"></input>

              <label>SUB IMAGE 2</label>
              <input type="text" className="sub-image-2"></input>

              <label>SUB CONTENT 2</label>
              <input type="" placeholder="Enter sub content 2" className="sub-content-2"></input>

              <label>SUB IMAGE 3</label>
              <input type="text" className="sub-image-3"></input>

              <label>SUB CONTENT 3</label>
              <input type="text" placeholder="Enter sub content 3" className="sub-content-3"></input>

              <Button mt={"10px"} type="submit">Add Blog</Button>

            </form>
          </ModalBody>
        </ModalContent>
      </Modal>


    </div>
  )
}

export default AddBlogs


