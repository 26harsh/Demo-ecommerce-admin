import React from 'react'
import '../../components/css/navbar.css'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/NavBar';
import Slidebar from '../../components/Sidebar';
import './AddProduct.css'


const AddProduct = (props) => {

    const handleChange = () =>{};
    const handleSubmit = () =>{};
  return (
    <>
    <div className="container-fluid page-body-wrapper">
        <Slidebar />
        <Navbar name={props.name}/>
           <div className="main-panel">
                <div className="content-wrapper">
                    <h2>Add Products</h2>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label  >Product Name</label>
                        <input type="text" name="pName" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option>Please Select</option>
                            <option value="Soap">Soap</option>
                            <option value="Candle">Candle</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" name="description" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Prize</label>
                        <input type="text" name="prize" className="form-control" onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label>Stock</label>
                        <input type="text" name="stock" className="form-control" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Available</label>
                        <select name="available" className="form-control" onChange={handleChange}>
                            <option>Please Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="form-control" id="customFile" />
                        {/* <label className="form-control" for="customFile">Choose file</label> */}
                    </div>
                    <br />
                    <button style={{ marginTop: '2rem', borderRadius: "5px" , padding:"10px 20px"}} className=" btn-primary">
                        Save
                    </button>
                 </form>
                 </div>
                </div>
            </div>
    </div> 
    </>
  )
}

export default AddProduct