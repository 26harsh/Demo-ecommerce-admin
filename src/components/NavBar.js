/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import './css/navbar.css'
import './vendors/ti-icons/css/themify-icons.css'
import './vendors/feather/feather.css'
import './vendors/css/vendor.bundle.base.css'
import './vendors/datatables.net-bs4/dataTables.bootstrap4.css'
import Logo from '../images/logo.svg'
import LogoMini from '../images/logo-mini.svg'
import UserLogo from '../images/face28.jpg'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import $ from 'jquery';

const Navbar = (props) => {

  const navigate = useNavigate();
  
  const clickLogout = () => {

    const auth = getAuth();
    signOut(auth).then(() => {
      alert("Logout Successfully");
      navigate("/")
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(() => {
    var body = $('body');
    $('[data-toggle="offcanvas"]').on("click", function () {
      $('.sidebar-offcanvas').toggleClass('active')
    });
    $('[data-toggle="minimize"]').on("click", function () {
      if ((body.hasClass('sidebar-toggle-display')) || (body.hasClass('sidebar-absolute'))) {
        body.toggleClass('sidebar-hidden');
      } else {
        body.toggleClass('sidebar-icon-only');
      }
    });

  }, []);

  return (
    <>
      <body>      
        <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row ">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <h1 className="" style={{fontFamily:"sans",color:"red",fontWeight:"500",fontSize:"12"}}> Shopit</h1>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            {/* <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="icon-menu"></span>
            </button> */}
            <ul className="navbar-nav mr-lg-2">
              <li className="nav-item nav-search d-none d-lg-block">
                
              </li>
            </ul>
            <ul className="navbar-nav navbar-nav-right">
            <li className="nav-item nav-profile dropdown">
                <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                  <img src={UserLogo} alt="profile"/>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                  <a className="dropdown-item">
                    <i className="ti-settings text-primary"></i>
                    Settings
                  </a>
                  <a className="dropdown-item" onClick={clickLogout}>
                    <i className="ti-power-off text-primary"></i>
                    Logout
                  </a>
                </div>

              </li>
              <li>
                <div className='my-3 mx-2'>
                <h3>{`${props.name}`}</h3>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link count-indicator dropdown-toggle" id="notificationDropdown" href="#" data-toggle="dropdown">
                  <i className="icon-bell mx-0"></i>
                  <span className="count"></span>
                </a>
                <div className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
                  <p className="mb-0 font-weight-normal float-left dropdown-header">Notifications</p>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-success">
                        <i className="ti-info-alt mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">Application Error</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Just now
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-warning">
                        <i className="ti-settings mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">Settings</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        Private message
                      </p>
                    </div>
                  </a>
                  <a className="dropdown-item preview-item">
                    <div className="preview-thumbnail">
                      <div className="preview-icon bg-info">
                        <i className="ti-user mx-0"></i>
                      </div>
                    </div>
                    <div className="preview-item-content">
                      <h6 className="preview-subject font-weight-normal">New user registration</h6>
                      <p className="font-weight-light small-text mb-0 text-muted">
                        2 days ago
                      </p>
                    </div>
                  </a>
                </div>
              </li>
              
              {/* <li className="nav-item nav-settings d-none d-lg-flex">
                <a className="nav-link" href="#">
                  <i className="icon-ellipsis"></i>
                </a>
              </li> */}      
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="icon-menu"></span>
            </button>
            </ul>
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="icon-menu"></span>
            </button>
          </div>
        </nav>
      </body>
    </>
  )
}

export default Navbar