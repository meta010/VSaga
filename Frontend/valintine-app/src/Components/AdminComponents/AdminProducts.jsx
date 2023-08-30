import React, { useEffect, useState } from 'react'
import ColumnGroupingTable from '../Tables/TableCompProducts'
import { handlegetproducts } from '../../Redux/action';
import { useDispatch, useSelector } from 'react-redux';
import TableComp from '../Tables/TableCompProducts';
import './mainadmin.css'
import TableCompProducts from '../Tables/TableCompProducts';
import AddProductModal from './AddProductModal';

const AdminProducts = () => {
 
  return (
    <div  style={{maxWidth:"100%"}}>
     <h1>Products</h1>
     <AddProductModal/>
          <TableCompProducts />
    </div>
  )
}

export default AdminProducts

