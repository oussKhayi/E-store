import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart, emptyCart } from '../Redux/actions'
import App from '../style/App.css'

const Carousel = () => {

  const data = useSelector(state=>state)
  const dispatch = useDispatch()
  
  const handleClick = (category, id) => {
    dispatch(addToCart(category ,id))
    console.log(category, id)
  }

  return ( <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner col-8">

  {data.products.map((category, index)=>{ 
     
    return index===0?<div className="carousel-item p-2 active">
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex text-center justify-content-around">
      {
      category.content.filter((item, idx) => idx < 1).map((product, i)=>{
        return<div key={i}>

        <div className="col">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text text-danger fs-5 fw-bold">{product.price} $</p>
              <div className="d-flex p-1 justify-content-around">
                <button className='btn btn-primary p-1'>Add top cart</button>
                <button className='btn btn-info p-1'>More Details</button>
              </div>
            </div>
          </div>
        </div>


        </div>
      })
    }</div></div>:
    <div className="carousel-item p-2">
      <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-evenly">{
      category.content.filter((item, idx) => idx < 1).map((product, i)=>{
        return<div key={i}>

          <div className="col">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text text-danger fs-5 fw-bold">{product.price} $</p>
              <div className="d-flex p-1 justify-content-around">
                <button className='btn btn-primary p-1'>Add top cart</button>
                <button className='btn btn-info p-1'>More Details</button>
              </div>
            </div>
          </div>
        </div>

        </div>
      })
    }</div></div>
  })}
    </div>
    <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon text-danger" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon text-danger" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>)
    

}

export default Carousel
