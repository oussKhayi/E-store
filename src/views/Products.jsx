import axios from 'axios'
import React, { useEffect } from 'react'

const Products = () => {

  useEffect(()=>{
    // GET request for remote image in node.js
    // axios({
    //   method: 'get',
    //   url: 'https://api.storerestapi.com/products'
    // })
    //   .then(function (response) {
    //     response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    //   });

    fetch('https://api.storerestapi.com/products')
    .then(response => response.json())
    .then(json => console.log(json))
  })

  return (
    <div>Products</div>
  )
}

export default Products