import React from 'react'
import '../../components/css/navbar.css'
import Navbar from '../../components/NavBar';
import Slidebar from '../../components/Sidebar';
import UserImg from '../../images/face28.jpg';
import { Link } from 'react-router-dom';
import './Users.css'


const User = (props) => {
  return (
    <>
       <div className="container-fluid page-body-wrapper">
          <Slidebar />
          <Navbar name={props.name}/>
           <div className="main-panel">
                <div className="content-wrapper">
                    <h2>Users</h2>
                
                {/* <div className="container bootstrap snippets bootdey">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="main-box no-header clearfix">
                              <div className="main-box-body clearfix">
                                  <div className="table-responsive">
                                      <table className="table user-list">
                                          <thead>
                                              <tr>
                                              <th><span>User</span></th>
                                              <th><span>Created</span></th>
                                              <th className="text-center"><span>Status</span></th>
                                              <th><span>Email</span></th>
                                              <th>&nbsp;</th>
                                              </tr>
                                          </thead>
                                          <tbody>
                                              <tr>
                                                  <td>
                                                      <img src="https://bootdey.com/img/Content/user_1.jpg" alt="" />
                                                      <a href="#" className="user-link">Full name 1</a>
                                                      <span className="user-subhead">Member</span>
                                                  </td>
                                                  <td>2013/08/12</td>
                                                  <td className="text-center">
                                                      <span className="label label-default">pending</span>
                                                  </td>
                                                  <td>
                                                      <a href="#">marlon@brando.com</a>
                                                  </td>
                                                  <td style={{width: "20%"}}>
                                                      <a href="#" className="table-link text-warning">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                      <a href="#" className="table-link text-info">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                      <a href="#" className="table-link danger">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <img src="https://bootdey.com/img/Content/user_3.jpg" alt="" />
                                                      <a href="#" className="user-link">Full name 2</a>
                                                      <span className="user-subhead">Admin</span>
                                                  </td>
                                                  <td>2013/08/12</td>
                                                  <td className="text-center">
                                                      <span className="label label-success">Active</span>
                                                  </td>
                                                  <td>
                                                      <a href="#">marlon@brando.com</a>
                                                  </td>
                                                  <td style={{width: "20%"}}>
                                                      <a href="#" className="table-link  text-warning">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                      <a href="#" className="table-link  text-info">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                      <a href="#" className="table-link danger">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      <img src="https://bootdey.com/img/Content/user_2.jpg" alt="" />
                                                      <a href="#" className="user-link">Full name 3</a>
                                                      <span className="user-subhead">Member</span>
                                                  </td>
                                                  <td>2013/08/12</td>
                                                  <td className="text-center">
                                                      <span className="label label-danger">inactive</span>
                                                  </td>
                                                  <td>
                                                      <a href="#">marlon@brando.com</a>
                                                  </td>
                                                  <td style={{width: "20%"}}>
                                                      <a href="#" className="table-link  text-warning">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                      <a href="#" className="table-link  text-info">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                      <a href="#" className="table-link danger">
                                                          <span className="fa-stack">
                                                              <i className="fa fa-square fa-stack-2x"></i>
                                                              <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                                          </span>
                                                      </a>
                                                  </td>
                                              </tr>
                                          </tbody>
                                      </table>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

 */}

              {/* *********************************************************** */}
              <table className='styled-table'>
          <thead>
            <tr>
              <th style={{textAlign: "center"}}>No. </th>
              <th style={{textAlign: "center"}}>Image </th>
              <th style={{textAlign: "center"}}>Name</th>
              <th style={{textAlign: "center"}}>Email</th>
              <th style={{textAlign: "center"}}>Contact</th>
              <th style={{textAlign: "center"}}>Action</th>
            </tr>
          </thead>
          <tbody>
                <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ********************************************************************/}
                      <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}

                       {/* ********************************************************************/}
                       <tr>
                  <th>1</th>
                  <td><img src={UserImg} alt="" style={{borderRadius:"50%" ,width:"60px", height:"50px"}}></img></td>
                  <td>Harsh Cotaliya</td>
                  <td>harsh@gmail.com</td>
                  <td>9029124666</td>
                  <td>
                    {/* <Link> */}
                      <button className='btn btn-edit'>Edit</button>
                    {/* </Link> */}

                    <button  className='btn btn-delete'>
                      Delete
                    </button>

                    {/* <Link> */}
                      <button className='btn btn-view'>View</button>
                    {/* </Link> */}

                  </td>
                </tr>
                      {/* ************************************************************************** */}
          </tbody>
        </table>
              </div>
            </div>
            </div>
    </>
  )
}

export default User