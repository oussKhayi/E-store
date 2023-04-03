import React from "react";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../Redux/actions";

function ShowCategory(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const myCategory = data.products.find((p) => p.name === props.cat);

  // function handleClick(e) {
  //   const cart = data.users.cart;
  //   const cat = e.target.getAttribute("data-cat");
  //   const id = e.target.getAttribute("data-id");
  //   const value = e.target.value;

  //   console.log(e.target);
  //   console.table({ value: value, category: cat, id: id });

  //   if (!cart.find((i) => i.id === 55)) {
  //     if (value === "addToCart") {
  //       dispatch(types.addToCart(cat, id));
  //     }
  //   } else {
  //     if (value === "incrProduct") {
  //       dispatch(types.incrProduct(cat, id));
  //     } else if (value === "decrProduct") {
  //       dispatch(types.decrProduct(cat, id));
  //     } else if (value === "removeFromCart") {
  //       dispatch(types.removeFromCart(cat, id));
  //     } else {
  //       alert("please try again");
  //     }
  //   }
  // }

  // function handleChange(e) {
  //   console.table({
  //     name: e.target.name,
  //     id: e.target.getAttribute("data-id"),
  //   });
  // }

  function handleClick(e) {
    const cart = data.users.cart;
    const cat = e.target.getAttribute("data-cat");
    const id = e.target.getAttribute("data-id");

    if (!cart.find((i) => parseInt(i.id) === parseInt(id))) {
      dispatch(types.addToCart(cat, id));
    } else {
      alert("already exist");
    }
  }

  return (
    <div className="container p-4">
      <h2 className="fw-bold text-center py-2 mb-3">
        This is the available {props.cat}
      </h2>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {myCategory.content.map((product, index) => (
          <div key={index} className="col">
            <div className="card">
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-title">{product.name}</h6>
                <div className="d-flex justify-content-between">
                  <p className="card-text">{product.description}</p>
                  <p className="card-text text-danger align-items-center fs-6 fw-bold">
                    {product.price} $
                  </p>
                </div>
                <div className="row row-cols-1 row-cols-md-1  ">
                  <button
                    className="btn btn-primary p-0 mt-1"
                    data-cat={product.category}
                    data-id={product.id}
                    onClick={(e) => handleClick(e)}
                  >
                    Add to cart
                  </button>
                  <button className="btn btn-info p-0 mt-1" disabled>
                    More Detail
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowCategory;
