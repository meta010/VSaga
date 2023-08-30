import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handlegetfilterproducts, handlegetproducts } from "../../Redux/action";
import { Button, Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";

const TableCompOrders= () => {


  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, allproducts } = store;


  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);




  return (
    <>
    <TableContainer style={{minWidth:"100%",border:"1px solid red",overflow:"hidden"}}>
      <Table>
        <Thead>
          <Tr>
            <Th>Image</Th>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
            <Th>Share</Th>
          </Tr>
        </Thead>
        <tbody>
          {allproducts?.map((item) => (
            <Tr key={item._id}>
               <Td>
               <img style={{height:"100%",width:"100%"}} src={item.image[0]} alt="" /> 
                </Td>
              <Td>{item.name}.splice(0,10)</Td>
               <Td>{item._id}</Td>
              <Td>{item.price}</Td>
              <Td>
                <Button>EDIT</Button>
              </Td>
              <Td>
                <Button>DELETE</Button>
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

export default TableCompOrders;
