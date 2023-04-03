import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const dispatch = useDispatch();
  const myData = useSelector((state) => {
    return state.products;
  });

  return (
    <div className="container p-4">
      <h1>Add a new product to your store</h1>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <form className="col">
          <div className="mb-3">
            <label className="form-label">Product name</label>
            <input
              type="text"
              className="form-control"
              aria-describedby="emailHelp"
              name="name"
              onChange={(event) => {
                console.log(event.target.value);
                setName(event.target.value);
              }}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">choose Category</label>
            <input
              type="text"
              name="example"
              list="categories"
              className="form-control"
              onChange={(event) => {
                console.log(event.target.value);
                setCategory(event.target.value);
              }}
            />
            <datalist id="categories">
              {myData.map((cat, i) => (
                <option key={i} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </datalist>
          </div>
          <div className="mb-3">
            <label className="form-label">Product Price</label>
            <input
              type="number"
              className="form-control"
              name="Price"
              min={0}
              onChange={(event) => {
                console.log(event.target.value);
                setPrice(event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image</label>
            <input
              type="file"
              className="form-control"
              name="myImage"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setSelectedImage(event.target.files[0]);
              }}
            />
          </div>
          <button type="submit" className="btn mb-0 mt-2 btn-success">
            Submit
          </button>
        </form>
        <div className="col p-1">
          <div className="col text-center mb-0 mt-auto bg-primary rounded shadow">
            <div className="card shadow">
              <div className="card-body">
                {selectedImage ? (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src={URL.createObjectURL(selectedImage)}
                    />
                  </div>
                ) : (
                  <div>
                    <img
                      alt="not found"
                      width={"250px"}
                      src="./logo.png"
                      className="shadow p-5 my-5"
                    />
                  </div>
                )}

                <h6 className="card-title">{name ? name : "Product X"}</h6>
                <div className="d-flex justify-content-between">
                  <p className="card-text">
                    {category ? category : "Category X"}
                  </p>
                  <p className="card-text text-danger align-items-center fs-6 fw-bold">
                    {price ? price : "00:00"}$
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
