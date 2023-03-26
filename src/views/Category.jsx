import React from 'react'
import App from '../style/App.css'

const Category = () => {
    return (

        <div className="container">
          {/* <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid"> <a className="navbar-brand name" href="#">Favy.com</a> <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon" /> </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#">About</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Categories</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Blog</a> </li>
                  <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                </ul>
                <form className="d-flex searchitem"> <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> <i className="fa fa-search" /> </form>
              </div>
            </div>
          </nav> */}
          <div className="d-flex justify-content-center align-items-center mt-5"> <button className="btn btn-dark">OUR CATEGORIES</button> </div>
          <div className="d-flex justify-content-center mt-3"> <span className="text text-center">Finding Best Products Now<br /> in Your Fingertips</span> </div>
          <div className="row mt-2 g-4">
            <div className="col-md-3">
              <div className="card p-1">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Mobile</span> <span>Phones</span> </div>
                  <div> <img src="https://thefoschini.vtexassets.com/arquivos/ids/42772959-800-800?v=638142823169530000&width=800&height=800&aspect=true" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Head</span> <span>Phones</span> </div>
                  <div> <img src="https://thefoschini.vtexassets.com/arquivos/ids/42103565-800-800?v=638141535753930000&width=800&height=800&aspect=true" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                  <div> <img src=" https://i.imgur.com/Ya0OXCv.png" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Air</span> <span>Tags</span> </div>
                  <div> <img src="https://thefoschini.vtexassets.com/arquivos/ids/43893853-800-800?v=638145571122370000&width=800&height=800&aspect=true" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2tr5">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Vacuum</span> <span>Cleaners</span> </div>
                  <div> <img src="https://i.imgur.com/UMQJpSG.png" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Washing</span> <span>Machines</span> </div>
                  <div> <img src="https://i.imgur.com/e9CyhXR.png" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Televisions</span> </div>
                  <div> <img src="https://thefoschini.vtexassets.com/arquivos/ids/42291670-800-800?v=638141772989200000&width=800&height=800&aspect=true" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-2">
                <div className="d-flex justify-content-between align-items-center p-2">
                  <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                  <div> <img src="https://thefoschini.vtexassets.com/arquivos/ids/42043584-800-800?v=638141463306770000&width=800&height=800&aspect=true" height={100} width={100} /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Category