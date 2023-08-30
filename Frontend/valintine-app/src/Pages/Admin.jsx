import React, { useState } from "react";
import "../Styles/admin.css";
import AdminDash from "../Components/AdminComponents/AdminDash";
import AdminUsers from "../Components/AdminComponents/AdminUsers";
import AdminProducts from "../Components/AdminComponents/AdminProducts";
import Customers from "../Components/AdminComponents/Customers";
import AdminOrders from "../Components/AdminComponents/AdminOrders";

function AdminPanel() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const handleMenuClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="admincontainer">
      <aside className="sidebar">
        <h2 className="sidebar-heading">Admin Panel</h2>
        <ul className="sidebar-menu">
          <li
            className={`sidebar-menu-item ${
              currentPage === "dashboard" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("dashboard")}
          >
           Dashboard
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "customers" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("customers")}
          >
           Customers
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "products" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("products")}
          >
            Products
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "orders" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("orders")}
          >
            Orders
          </li>
          <li
            className={`sidebar-menu-item ${
              currentPage === "users" ? "active" : ""
            }`}
            onClick={() => handleMenuClick("users")}
          >
            Admin Users
          </li>
        </ul>
      </aside>
      <main className="content">
        <h2 className="page-heading">{currentPage}</h2>
        {/* Render dynamic content based on the current page */}
        {currentPage === "dashboard" && (
          <div className="page-content">
             <AdminDash/>
          </div>
        )}
        {currentPage === "users" && (
          <div className="page-content">
            <AdminUsers/>
          </div>
        )}
        {currentPage === "products" && (
          <div className="page-content">
            <AdminProducts />
          </div>
        )}
        {currentPage === "orders" && (
          <div className="page-content">
           <AdminOrders/>
          </div>
        )}
        {currentPage === "customers" && (
          <div className="page-content">
          <Customers/>
          </div>
        )}
      </main>
    </div>
  );
}

export default AdminPanel;
