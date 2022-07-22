import React from 'react'
import './css/navbar.css'
import './vendors/ti-icons/css/themify-icons.css'
import './vendors/feather/feather.css'
import './vendors/css/vendor.bundle.base.css'
import './vendors/datatables.net-bs4/dataTables.bootstrap4.css'

const SideBar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas " id="sidebar " style={{ borderRight:"1px solid grey"}}>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/product">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Products</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addProducts">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Add Product</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-details">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Categories</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/testimonials">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Orders</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/users">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Users</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view-testimonial">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Sellers</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view-testimonial">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Transactions</span>
            </a>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default SideBar