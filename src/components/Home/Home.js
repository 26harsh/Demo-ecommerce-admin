import React from "react";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";


function Home(props) {

  // const clickLogout = () => {

  //   const auth = getAuth();
  //   signOut(auth).then(() => {
  //     alert("Loges Out");
  //     // Sign-out successful.
  //   }).catch((error) => {
  //     // An error happened.
  //   });
  // }
  return (
    <div>
      <div className="container">
        <h1>HOME PAGE</h1>
        <h1>
          <Link to="/login">Login</Link>
        </h1>
        <br />
        <h1>
          <Link to="/signup">Signup</Link>
        </h1>
      </div>

      <br />
      <br />
      <br />

      <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    </div>
  );
}

export default Home;
