import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import * as types from'../Redux/actions'

export function Cart() {
    const data = useSelector((state)=>state)
    const [val, setVal] =useState(1)
    const dispatch = useDispatch()

    function handleChange(e){
      
    }

  return (<>
    
    <section className="h-100 h-custom" style={{backgroundColor: '#eee'}}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card shopping-cart" style={{borderRadius: '15px'}}>
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Your products</h3>

{/*One Product Start */}
    { data.users.cart.slice(0).reverse().map((product, index)=>{
      return (
        <div className="d-flex align-items-center mb-5" key={index}>
        <div className="flex-shrink-0">
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp" className="img-fluid" style={{width: '150px'}} alt="Generic placeholder image" />
        </div>
        <div className="flex-grow-1 ms-3">
          <a href="#!" className="float-end text-black"><i className="fas fa-times" /></a>
          <h5 className="text-primary">{product.name}</h5>
          <h6 style={{color: '#9e9e9e'}}>{product.category}</h6>
          <div className="d-flex align-items-center">
            <p className="fw-bold mb-0 me-5 pe-3">{product.price}$</p>
            <div className="def-number-input number-input safari_only">
              <button className="minus" />
              <input className="quantity fw-bold text-black" min={1} name="quantity" defaultValue={1} type="number" />
              <button className="plus" />
            </div>
          </div>
        </div></div>
    )
    
    })
                      
    }
{/*One Product End */}

                      <hr className="mb-4" style={{height: '2px', backgroundColor: '#1266f1', opacity: 1}} />
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">{null}$</p>
                      </div>
                      <div className="d-flex justify-content-between p-2 mb-2" style={{backgroundColor: '#e1f5fe'}}>
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">{null}$</h5>
                        {data.users.cart.length>=1?
                        <button className="btn btn-danger" type="button" onClick={
                          ()=>(window.confirm('Do you want to empty your cart')&&dispatch(types.emptyCart()))
                        } >Empty Cart</button>
                        :  <button className="btn btn-danger" disabled type="button" >Empty Cart</button>
                      }
                        
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">Payment</h3>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input type="text"  className="form-control form-control-lg" siez={17} minLength={19} maxLength={19} />
                          <label className="form-label" htmlFor="typeText">Card Number</label>
                        </div>
                        <div className="form-outline mb-5">
                          <input type="text" id="typeName" className="form-control form-control-lg" siez={17} />
                          <label className="form-label" htmlFor="typeName">Name on card</label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input type="text" id="typeExp" className="form-control form-control-lg"  size={7} minLength={7} maxLength={7} />
                              <label className="form-label" htmlFor="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input type="password"  className="form-control form-control-lg" size={1} minLength={3} maxLength={3} />
                              <label className="form-label" htmlFor="typeText">Cvv</label>
                            </div>
                          </div>
                        </div>
                        <p className="mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit <a href="#!">obcaecati sapiente</a>.</p>
                        <button type="button" className="btn btn-primary btn-block btn-lg">Buy now</button>
                        <h5 className="fw-bold mb-5" style={{position: 'absolute', bottom: 0}}>
                          <a href="/"><i className="fas fa-angle-left me-2" />Back to shopping</a>
                        </h5>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>)
}
