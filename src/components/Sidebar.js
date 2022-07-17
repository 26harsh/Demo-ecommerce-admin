import React from 'react'
// import './css/navbar.css'
import './vendors/ti-icons/css/themify-icons.css'
import './vendors/feather/feather.css'
import './vendors/css/vendor.bundle.base.css'
import './vendors/datatables.net-bs4/dataTables.bootstrap4.css'

const SideBar = () => {
  return (
    <>
      <nav className="sidebar sidebar-offcanvas" id="sidebar">

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              <i className="icon-grid menu-icon"></i>
              <span className="menu-title">Add Products</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view-product">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">View Product</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/contact-details">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Contact us Details</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/testimonials">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">Add Testimonials</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view-testimonial">
              <i className="icon-paper menu-icon"></i>
              <span className="menu-title">View Testimonials</span>
            </a>
          </li>
        </ul>

      </nav>
    </>
  )
}

export default SideBar