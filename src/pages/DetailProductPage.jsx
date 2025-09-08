import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DetailProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProduct(resp.data)
    })

  }, [])

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 text-center">
          <h1>{product.title}</h1>
          <img src={product.image} alt="" />
          <p>- {product.price}&euro;</p>
          <p>- {product.category}</p>
          <p>- {product.description}</p>
          <Link to="/products" className='btn btn-primary'>Torna a tutti i prodotti</Link>
        </div>
      </div>
    </div>
  )
}

export default DetailProductPage
