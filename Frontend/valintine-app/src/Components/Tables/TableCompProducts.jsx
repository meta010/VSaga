import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_delete_product_by_admin, handlegetfilterproducts, handlegetproducts } from "../../Redux/action";
import EditModal from "../AdminComponents/ProductEditModal";
import { Button, Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";


const TableCompProducts = () => {
  const itemsPerPage = 3; // Number of items to show per page
  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", age: 35, email: "michael@example.com" }
    // Add more data here...
  ];

  const totalItems = data.length;



  const handle_delete_product = (id) => {
    dispatch(handle_delete_product_by_admin(id)).then((res) => {
      if (res.status == 200 || res.status == 201) {
        alert("Product deleted successfully")
      } else {
        alert("error")
      }
    })
  }
  const store = useSelector((store) => store);
  const dispatch = useDispatch();
  const { loading, error, allproducts } = store;


  useEffect(() => {
    dispatch(handlegetproducts());
  }, []);
  // console.log(products);



  let keys = ["image", "id", "name", "city", "Price", "Edit", "Delete"];


  return (
    <TableContainer style={{ minWidth: "100%" }}>
      <Table>
        <Thead>
          <Tr>
            {keys.map((el) => {

              return <Th>{el}</Th>
            })
            }
          </Tr>
        </Thead>
        <tbody>
          {allproducts?.map((item) => (
            <Tr key={item._id}>
              <Td>
                <img style={{ height: "50%", width: "50%" }} src={item.image[0]} alt="" />
              </Td>
              <Td>{item._id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.city}</Td>
              <Td>{item.price}</Td>
              <Td>
                <EditModal id={item?._id} products={allproducts} />
              </Td>
              <Td>
                <Button onClick={() => handle_delete_product(item._id)}>DELETE</Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>

    </TableContainer>
  );
};

export default TableCompProducts;
