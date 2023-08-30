import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_delete_blog, handle_get_all_blogs } from "../../Redux/action";
import { Button, Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
import AddBlogs from "./AddBlogs";

const AdminBlogs= () => {


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error,blogs } = store;


  useEffect(() => {
    // dispatch(handlegetproducts());
    dispatch(handle_get_all_blogs());
  }, []);


const handle_delete = (id)=>{
  dispatch(handle_delete_blog(id)).then((res)=>{
    if(res.status==200 || res.status==201){
      alert("Blog Deleted Successfully")
    }else{
      alert("Blog Not Deleted , Error")

    }
  })
}


  return (
    <>
   <AddBlogs/>
    <TableContainer style={{minWidth:"100%",overflow:"auto"}}>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>ID</Th>
            <Th>
                Title
            </Th>
            <Th>AuthorName</Th>
            <Th>Category</Th>
            <Th>City</Th>
            <Th>EDIT</Th>
            <Th>DELETE</Th>
            <Th>SHARE</Th>
           
          </Tr>
        </Thead>
        <tbody>

          {blogs?.map((item) => (
            <Tr key={item._id}>
               <Td>
               <img style={{height:"100%",width:"100%"}} src={item?.blogimage} alt="" /> 
                </Td>
               <Td>{item?._id}</Td>
              <Td>{item?.title}</Td>
              <Td>{item?.authorname}</Td>
              <Td>{item?.category}</Td>
              <Td>{item?.city}</Td>
              <Td>
                <Button>EDIT</Button>
              </Td>
              <Td>
                <Button onClick={()=>handle_delete(item?._id)}>DELETE</Button>
              </Td>
              <Td>
                <Button>SHARE</Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
     
    </TableContainer>
          </>
  );
};

export default AdminBlogs;
