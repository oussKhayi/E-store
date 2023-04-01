import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import * as types from'../../Redux/actions'

const Nav = () => {

  const data = useSelector(state=>state)
  const dispatch = useDispatch()

  
  return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light shadow rounded" id='nav'>
  <div className="container-fluid">
     <a href='/cart' className="p-0 badge text-dark position-relative me-3">
          <i className="fs-4 fa fa-light fa-cart-arrow-down"></i>
          {data.users.cart.length>0?
          <span className="position-absolute top-0 end-20 translate-middle badge rounded-pill bg-danger" style={{fontSize: 11}}>
              {data.users.cart.length}
              <span className="visually-hidden">unread messages</span>
          </span>
        :''}
    </a>

    <a className="navbar-brand" href="/" style={{ fontWeight: 'bolder'}}><img src="./logo.png" className="img-fluid rounded-top p-0" width={100} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/carousel">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/laptops">Laptops</a></li>
            <li><a className="dropdown-item" href="/tv">Tv</a></li>
            <li><a className="dropdown-item" href="/phones">Phones</a></li>
            <li><a className="dropdown-item" href="/accessoires">Accessoires</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" tabIndex="-1" aria-disabled="true">Contact Us</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      
    </div>
  </div>
</nav>)
}

export default Nav