import React, {useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productListAction'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message  from '../components/Message'

function Homepage() {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const {loading, error, products} = productList

  useEffect(() => {
    dispatch(listProducts())  

  }, [dispatch])

  return (
      <div>
      <h1>Products</h1>
      
      {loading ? <Loader/>
        : error ? <Message variant='danger'>{error}</Message>  
          : 
          <Row>
              {products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                      <Product product={product}/>
                </Col>

              ))}

          </Row>
      }
          




    </div>
  )
}

export default Homepage