import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DetailProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [products, setProducts] = useState([]);
  console.log(useParams())

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((resp) => {
      setProducts(resp.data)
    })

    const singleProduct = products.find((product) => product.id === parseInt(id))
    setProduct(singleProduct)
  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <h1>{product.title}</h1>
        </div>
      </div>
    </div>
  )
}

export default DetailProductPage
