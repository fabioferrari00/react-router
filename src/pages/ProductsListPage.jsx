import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const ProductsListPage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`).then((resp) => {
      setProducts(resp.data)
    })
  }, [])

  return (
    <>
      <div className='container'>
        <div className="row gy-3">
          <div className="col-12">
            <h1>Prodotti</h1>
          </div>
          {products.map(product => {
            return (
              <div className="col-4" key={product.id}>
                <div className="card">
                  <div className="card-header">
                    <h2><Link to={`/products/${product.id}`}>{product.title}</Link></h2>
                  </div>
                  <div className="card-body">
                    <p>- {product.category}</p>
                    <p>- {product.price}&euro;</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ProductsListPage
