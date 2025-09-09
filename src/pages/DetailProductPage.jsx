import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'

const DetailProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProduct(resp.data)
    })

  }, [id, navigate])
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
        <div className="col-12">
          <div className="d-flex justify-content-between">
            <button
              className='pagination-btn-prod'
              onClick={() => navigate(`/products/${parseInt(id) - 1}`)}
              disabled={parseInt(id) === 1 ? true : false}>
              Precedente
            </button>
            <button
              className='pagination-btn-prod'
              onClick={() => navigate(`/products/${parseInt(id) + 1}`)} >
              Successivo
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailProductPage
