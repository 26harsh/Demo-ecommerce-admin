import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Slidebar from './Sidebar';
import Navbar from './NavBar';

const Dashboard = (props) => {

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

  return (
    <>
      <div className="container-fluid page-body-wrapper">
        <Navbar name={props.name}/>
        <Slidebar />
      </div>

    </>
  )
}

export default Dashboard