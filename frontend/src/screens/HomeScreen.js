import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
//componets
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'


import { useDispatch, useSelector } from 'react-redux'
import { listProductsAction } from '../actions/productActions'
function HomeScreen() {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList
  useEffect(() => {
    dispatch(listProductsAction())
  }, [dispatch])

  return (
    <div>

      <h1>Latest Products</h1>
      {
        loading? <Loader/>
          : error ? <Message variant='danger'>{error}</Message>
            : 
            <Row>
              {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={3}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
      }
    </div>
  )
}

export default HomeScreen