import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {addToCart, emptyCart } from '../Redux/actions'

function ShowCategory(props) {
    const dispatch = useDispatch()
    const data = useSelector(state=>state)
    const myCategory = data.products.find((p)=>p.name===props.cat);
  return (
    <div className='container p-4'>
      <h2 className='fw-bold text-center py-2 mb-3'> This the available {props.cat}</h2>
     <div className="row row-cols-2 row-cols-md-4 g-4">
      
    {
      myCategory.content.map((product, index)=><div key={index} className="col">
          <div className="card">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">{product.name}</h6>
              <div className="d-flex justify-content-between">
                <p className="card-text">{product.description}</p>
                <p className='card-text text-danger align-items-center fs-6 fw-bold'>{product.price} $</p>
              </div>
              <div className="row row-cols-1 row-cols-md-1  ">
              <button className='btn btn-primary p-0 mt-1'>Add to cart</button>
              <button className='btn btn-info p-0 mt-1'>More Detail</button>
              </div>
            </div>
          </div>
        
        </div>
        )

    }</div>
    </div>
  )
}

export default ShowCategory