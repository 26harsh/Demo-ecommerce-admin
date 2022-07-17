import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Slidebar from './Sidebar';

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
        <h1>This is dashboard</h1>
        <Slidebar />
        <div>
      <div>

        <button onClick={clickLogout}>Logout</button>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
    </>
  )
}

export default Dashboard