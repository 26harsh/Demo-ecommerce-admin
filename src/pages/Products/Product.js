import React from 'react'
import '../../components/css/navbar.css'
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/NavBar';
import Slidebar from '../../components/Sidebar';
import './Product.css'
// import { Button } from 'bootstrap';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const Product = (props) => {
  return (
    <>
        <div className="container-fluid page-body-wrapper">
        <Slidebar />
        <Navbar name={props.name}/>
           <div className="main-panel">
                <div className="content-wrapper">
                    <h2>Products</h2>

                    <div className="container mydiv">
    <div className="row">
        {/* <div className="col-md-4">
            <!-- bbb_deals -->
            <div className="bbb_deals">
                <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>4</span></div>
                <div className="bbb_deals_title">Today's Combo Offer</div>
                <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                        <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt="" /></div>
                        <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                <div className="bbb_deals_item_price_a ml-auto"><strike>₹30,000</strike></div>
                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_name">HP Notebook</div>
                                <div className="bbb_deals_item_price ml-auto">₹25,550</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                </div>
                                <div className="available_bar"><span style={{width:"17%"}}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <div className="col-md-4">
            <!-- bbb_deals -->
            <div className="bbb_deals">
                <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>2</span></div>
                <div className="bbb_deals_title">Today's Combo Offer</div>
                <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                        <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt="" /></div>
                        <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                <div className="bbb_deals_item_price_a ml-auto"><strike>₹40,000</strike></div>
                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_name">HP Envy</div>
                                <div className="bbb_deals_item_price ml-auto">₹35,550</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                </div>
                                <div className="available_bar"><span style={{width:"17%"}}></span></div>
                                <div style={{marginTop:"10px"}}>
                                    <button className='btn btn-primary'>Edit</button>
                                    <Button type="danger" className="mb-3 pt-3 custom" block shape="round" icon={<DeleteOutlined />} size="small" style={{marginLeft:"200px"}}>
                                    </Button>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div> */}
        {/* <div className="col-md-4">
            <!-- bbb_deals -->
            <div className="bbb_deals">
                <div className="ribbon ribbon-top-right"><span><small className="cross">x </small>3</span></div>
                <div className="bbb_deals_title">Today's Combo Offer</div>
                <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                        <div className="bbb_deals_image"><img src="https://i.imgur.com/9UYzfny.png" alt="" /></div>
                        <div className="bbb_deals_content">
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_category"><a href="#">Laptops</a></div>
                                <div className="bbb_deals_item_price_a ml-auto"><strike>₹30,000</strike></div>
                            </div>
                            <div className="bbb_deals_info_line d-flex flex-row justify-content-start">
                                <div className="bbb_deals_item_name">Toshiba B77</div>
                                <div className="bbb_deals_item_price ml-auto">₹27,550</div>
                            </div>
                            <div className="available">
                                <div className="available_line d-flex flex-row justify-content-start">
                                    <div className="available_title">Available: <span>6</span></div>
                                    <div className="sold_stars ml-auto"> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </div>
                                </div>
                                <div className="available_bar"><span style={{width:"17%"}}></span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}


        {/* ********************************************************************************************************************************************* */}

        <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="tile">
                    <div className="wrapper">
                        <div className="header">Event Title</div>

                        <div className="banner-img">
                            <img src="https://i.imgur.com/9UYzfny.png" alt="Image 1" />
                        </div>

                        <div className="footer">
                            <a href="#" className="Cbtn Cbtn-primary">View</a>
                            <a href="#" className="Cbtn Cbtn-danger">Delete</a>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="tile">
                    <div className="wrapper">
                        <div className="header">Event Title</div>

                        <div className="banner-img">
                            <img src="https://i.imgur.com/9UYzfny.png" alt="Image 1" />
                        </div>

                        <div className="footer">
                            <a href="#" className="Cbtn Cbtn-primary">View</a>
                            <a href="#" className="Cbtn Cbtn-danger">Delete</a>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="tile">
                    <div className="wrapper">
                        <div className="header">Event Title</div>

                        <div className="banner-img">
                            <img src="https://i.imgur.com/9UYzfny.png" alt="Image 1" />
                        </div>

                        <div className="footer">
                            <a href="#" className="Cbtn Cbtn-primary">View</a>
                            <a href="#" className="Cbtn Cbtn-danger">Delete</a>
                        </div>
                    </div>
                </div> 
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="tile">
                    <div className="wrapper">
                        <div className="header">Event Title</div>

                        <div className="banner-img">
                            <img src="https://i.imgur.com/9UYzfny.png" alt="Image 1" />
                        </div>

                        <div className="footer">
                            <a href="#" className="Cbtn Cbtn-primary">View</a>
                            <a href="#" className="Cbtn Cbtn-danger">Delete</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </div>
    </div>
</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Product