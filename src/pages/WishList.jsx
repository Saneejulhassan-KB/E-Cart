import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../Redux/slice/whishListSlice'
import { addToCart } from '../Redux/slice/cartSlice'




function WishList() {

  const whishlistArray = useSelector((state => state.whishListReducer))

  const handleWishlistCart = (product) => {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }

  const dispatch = useDispatch()

  return (
    <div style={{ marginTop: '50px' }} className='ms-5'>
      <Row>
        {
          whishlistArray.length > 0 ?
            whishlistArray.map((product, index) => (
              <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                <Card className='shadow rounded' style={{ width: '20rem', height: '30rem' }}>
                  <Card.Img height={'200px'} variant='top' src={product.thumbnail} />
                  <Card.Body>
                    <Card.Title className='text-primary'>{product.title}</Card.Title>
                    <Card.Text>
                      <p>{product.description.slice(0, 50)}...</p>
                      <h5>${product.price}</h5>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                      <Button className='btn btn-light' onClick={() => dispatch(removeFromWishlist(product.id))}><i className='fa-solid fa-trash text-danger'></i></Button>
                      <Button className='btn btn-light' onClick={() => handleWishlistCart(product)}><i className='fa-solid fa-cart-shopping text-warning'></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )) : <div style={{ height: '100vh' }} className='w-100 d-flex flex-column justify-content-center align-items-center'>
              <img height={'500px'} width={'500px'} src="https://supershopping.lk/images/home/Cart-empty.gif" alt="" />
              <h3 className='text-center text-danger'>Whishlist Is Empty!!</h3>
              <Link style={{ textDecoration: 'none' }} className='btn btn-warning rounded' to={'/'}>Back to Home</Link>
            </div>
        }
      </Row>
    </div>
  )
}

export default WishList