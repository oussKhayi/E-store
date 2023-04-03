import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../Redux/actions";
import axios from "axios";

// function Test (){
//   const [data, setData] = useState({});
//   useEffect(() => {
//     axios.get("http://localhost:3010").then((response) => {
//       setData(response.data);
//     });
//     console.table(data);
//   }, []);
// }

export function Cart() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [myCArt, setMyCArt] = useState([]);
  const [myProducts, setMyProducts] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:3010/cart").then((response) => {
  //     setMyCArt(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3010/products").then((response) => {
  //     setMyProducts(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.table(myCArt);
  //   console.table(myProducts);
  // }, [myCArt, myCArt]);

  function handleClick(e) {
    const cart = data.users.cart;
    const cat = e.target.getAttribute("data-cat");
    const id = parseInt(e.target.getAttribute("data-id"));
    const value = e.target.value;

    // console.log(e.target);
    // console.table({ value: value, category: cat, id: id });

    if (!cart.find((i) => i.id === id)) {
      if (value === "addToCart") {
        dispatch(types.addToCart(cat, id));
      }
    } else {
      if (value === "incrProduct") {
        dispatch(types.incrProduct(cat, id));
      } else if (value === "decrProduct") {
        dispatch(types.decrProduct(cat, id));
      } else if (value === "removeFromCart") {
        dispatch(types.removeFromCart(cat, id));
      } else {
        alert("please try again");
      }
    }
  }
  const priceTotal = data.users.cart.reduce(function (a, b) {
    return a + b.price * b.cartQnt;
  }, 0);
  console.log("total is : " + priceTotal);
  return (
    <>
      {/* <p>Test buttons with handleClick</p>

      <button
        className="btn btn-primary"
        value="addToCart"
        data-cat="tv"
        data-id={55}
        onClick={(e) => handleClick(e)}
      >
        Add
      </button> */}

      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div
                className="card shopping-cart"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body text-black">
                  <div className="row">
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Your products
                      </h3>

                      {/*One Product Start */}
                      {data.users.cart
                        .slice(0)
                        .reverse()
                        .map((product, index) => {
                          return (
                            <div
                              className="d-flex align-items-center mb-5"
                              key={index}
                            >
                              <hr className="my-4" />
                              <div className="row mb-4 d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                  <img
                                    src={product.image}
                                    height={100}
                                    width={100}
                                  />
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                  <h6 className="text-muted">
                                    {product.id} :{product.category}
                                  </h6>
                                  <h6 className="text-black mb-0">
                                    {product.name}
                                  </h6>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-2 d-flex bg-warnin py-2">
                                  <button
                                    className="btn px-2"
                                    value="decrProduct"
                                    data-cat={product.category}
                                    data-id={product.id}
                                    onClick={(e) => handleClick(e)}
                                  >
                                    -{/* <i className="fas fa-minus" /> */}
                                  </button>
                                  <p
                                    name="quantity"
                                    type="number"
                                    className="form-control text-center"
                                    style={{ width: 60 }}
                                  >
                                    {product.cartQnt}
                                  </p>
                                  <button
                                    className="btn px-2"
                                    value="incrProduct"
                                    data-cat={product.category}
                                    data-id={product.id}
                                    onClick={(e) => handleClick(e)}
                                  >
                                    +{/* <i className="fas fa-plus" /> */}
                                  </button>
                                </div>
                                <div className="col-md-3 px-0 col-lg-2 col-xl-2 offset-lg-1">
                                  <h6 className="mb-4">
                                    €{" "}
                                    {(product.price * product.cartQnt).toFixed(
                                      2
                                    )}
                                  </h6>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                  <button
                                    className="btn px-2"
                                    value="removeFromCart"
                                    data-cat={product.category}
                                    data-id={product.id}
                                    onClick={(e) => {
                                      window.confirm("Are you sure") &&
                                        handleClick(e);
                                    }}
                                  >
                                    X{/* <i className="fas fa-times" /> */}
                                  </button>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      {/*One Product End */}

                      <hr
                        className="mb-4"
                        style={{
                          height: "2px",
                          backgroundColor: "#1266f1",
                          opacity: 1,
                        }}
                      />
                      <div className="d-flex justify-content-between px-x">
                        <p className="fw-bold">Discount:</p>
                        <p className="fw-bold">{null}$</p>
                      </div>
                      <div
                        className="d-flex justify-content-between p-2 mb-2"
                        style={{ backgroundColor: "#e1f5fe" }}
                      >
                        <h5 className="fw-bold mb-0">Total:</h5>
                        <h5 className="fw-bold mb-0">
                          {priceTotal.toFixed(2)}$
                        </h5>
                        {data.users.cart.length >= 1 ? (
                          <button
                            className="btn btn-danger"
                            type="button"
                            onClick={() =>
                              window.confirm(
                                "Do you want to empty your cart"
                              ) && dispatch(types.emptyCart())
                            }
                          >
                            Empty Cart
                          </button>
                        ) : (
                          <button
                            className="btn btn-danger"
                            disabled
                            type="button"
                          >
                            Empty Cart
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 px-5 py-4">
                      <h3 className="mb-5 pt-2 text-center fw-bold text-uppercase">
                        Payment
                      </h3>
                      <form className="mb-5">
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            size={17}
                            minLength={19}
                            maxLength={19}
                          />
                          <label className="form-label" htmlFor="typeText">
                            Card Number
                          </label>
                        </div>
                        <div className="form-outline mb-5">
                          <input
                            type="text"
                            id="typeName"
                            className="form-control form-control-lg"
                            size={17}
                          />
                          <label className="form-label" htmlFor="typeName">
                            Name on card
                          </label>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="typeExp"
                                className="form-control form-control-lg"
                                size={7}
                                minLength={7}
                                maxLength={7}
                              />
                              <label className="form-label" htmlFor="typeExp">
                                Expiration
                              </label>
                            </div>
                          </div>
                          <div className="col-md-6 mb-5">
                            <div className="form-outline">
                              <input
                                type="password"
                                className="form-control form-control-lg"
                                size={1}
                                minLength={3}
                                maxLength={3}
                              />
                              <label className="form-label" htmlFor="typeText">
                                Cvv
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-primary btn-block btn-lg"
                        >
                          Buy now
                        </button>
                        <h5
                          className="fw-bold mb-5"
                          style={{ position: "absolute", bottom: 0 }}
                        >
                          <a href="/">
                            {/* <i className="fas fa-angle-left me-2" /> */}
                            Back to shopping
                          </a>
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
    </>
  );
}
