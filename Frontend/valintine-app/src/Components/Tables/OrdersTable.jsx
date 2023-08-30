import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_edit_orders_by_admin, handle_get_allorders_byadmin, handlegetproducts } from "../../Redux/action";
// import { Button, Select } from "@mui/material";
import EditModal from "../AdminComponents/ProductEditModal";
import './Orders.css'
import { Button, Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";


const Orders= () => {
  const itemsPerPage = 3; // Number of items to show per page
  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", age: 35, email: "michael@example.com" }
    // Add more data here...
  ];
  let keys = ["Image","id", "Name", "Date", "Address", "Edit","Status"];

  const [currentPage, setCurrentPage] = useState(1);
  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };


  const store = useSelector((store) => store);
  const [orders , setorders] =useState([])
  // const [keys ,setkeys] = useState([])
  const dispatch  = useDispatch()
  useEffect(()=>{
  
    dispatch(handle_get_allorders_byadmin()).then((res) => {
      setorders(res.data.data);
    });
    
  },[])

const handle_status_change=(id,data,val)=>{
  data={...data,status:val}
dispatch(handle_edit_orders_by_admin(id,data)).then((res)=>{
  if(res.status==200 || res.status==201){
    alert("Status changed")
  }else{
    alert("error")
  }
})

}



  return (
    <TableContainer style={{minWidth:"100%"}}>
      <Table>
        <Thead>
          <Tr>
          { keys.map((el)=>{

            return <Th>{el}</Th>
            })
            }
           
          </Tr>
        </Thead>
        <tbody>
          {orders?.map((item) => (
            <Tr key={item._id}>
               <Td>
               <img style={{height:"50%",width:"50%"}} src={item.image[0]} alt="" /> 
                </Td>
               <Td>{item._id}</Td>
              <Td>{item.name}</Td>
              <Td>{item.date?item.date:"NA"}</Td>
              <Td>{item?.address?item?.address:"NA"}</Td>
              
              <Td>
               <select placeholder="Update Status Here" onInput={(e)=>handle_status_change(item._id,item,e.target.value)}>
                
                <option value="Update Status Here">Select One</option>
                <option value="Pending">Pending</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancel">Cancel</option>
               </select>
              </Td>
              <Td>
                <Button>
                    
                        {item.status}
                        
                        </Button>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      {/* <Pagination>
        {products?.map((_, index) => (
          <PaginationButton
            key={index}
            active={currentPage === index + 1}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </PaginationButton>
        ))}
      </Pagination> */}
    </TableContainer>
  );
};

export default Orders;
