import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { handle_delete_users_by_admin, handle_get_all_users, handlegetproducts } from "../../Redux/action";
import { Button, Table, TableContainer, Td, Th, Thead, Tr } from "@chakra-ui/react";
// import { Button } from "@mui/material";


const TableCompUsers= () => {
  const itemsPerPage = 3; // Number of items to show per page
  const data = [
    { id: 1, name: "John Doe", age: 30, email: "john@example.com" },
    { id: 2, name: "Jane Smith", age: 25, email: "jane@example.com" },
    { id: 3, name: "Michael Johnson", age: 35, email: "michael@example.com" }
    // Add more data here...
  ];

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
  const dispatch = useDispatch();
  const [users,setusers] =useState([])
  // const { loading, error, products } = store;


  useEffect(() => {
    dispatch(handle_get_all_users()).then((res)=>{
        setusers(res?.data?.data)
    })
  }, []);



let keys = ["image","id", "name", "email", "address", "total_visits", "total_orders","Delete"];

const handle_delete_users=(id) => {
  dispatch(handle_delete_users_by_admin(id)).then((res)=>{
   if(res.status ==200 || res.status==201){
    alert("user deleted")
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
          {  keys.map((el)=>{

return <Th>{el}</Th>
})
}
          </Tr>
        </Thead>
        <tbody>
          {users?.map((item) => (
            <Tr key={item._id}>
               <Td>
               <img style={{height:"50%",width:"50%"}} src={"https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"} alt="" /> 
                </Td>
               <Td>{item._id}</Td>
              <Td>{item.name?.slice(0,10)}</Td>
              <Td>{item.email}</Td>
              <Td>{item.address}</Td>
              <Td>{0}</Td>
              <Td>{0}</Td>
              <Td>
                <Button onClick={()=>handle_delete_users(item._id)}>DELETE</Button>
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

export default TableCompUsers;
