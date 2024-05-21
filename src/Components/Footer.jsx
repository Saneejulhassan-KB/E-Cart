import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <MDBFooter className='text-center text-lg-start text-muted bg-primary' >
                <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom bg-primary'>
                    <div className='me-5 d-none d-lg-block bg-primary'>
                        <span className='bg-primary text-light'>Get connected with us on social networks:</span>
                    </div>

                    <div className='bg-primary'>
                        <a href='' className='me-4 text-reset bg-primary' >
                            <MDBIcon fab icon="facebook-f bg-primary text-light "  />
                        </a>
                        <a href='' className='me-4 text-reset bg-primary text-light' >
                            <MDBIcon fab icon="twitter bg-primary text-light"  />
                        </a>
                        <a href='' className='me-4 text-reset bg-primary text-light' >
                            <MDBIcon fab icon="google bg-primary text-light"  />
                        </a>
                        <a href='' className='me-4 text-reset bg-primary text-light' >
                            <MDBIcon fab icon="instagram bg-primary text-light"  />
                        </a>
                        <a href='' className='me-4 text-reset bg-primary text-light' >
                            <MDBIcon fab icon="linkedin bg-primary text-light"  />
                        </a>
                        <a href='' className='me-4 text-reset bg-primary text-light' >
                            <MDBIcon fab icon="github bg-primary text-light"  />
                        </a>
                    </div>
                </section>

                <section className='bg-primary ' >
                    <MDBContainer className='text-center text-md-start mt-5 '>
                        <MDBRow className='mt-3 bg-primary ' >
                            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4 bg-primary' >
                                <Link to={'/'} style={{ textDecoration: 'none' }} ><h6 className='text-uppercase fw-bold mb-4 bg-primary text-light'>
                                <i class="fa-solid fa-truck-fast text-warning"></i> E-Cart
                                </h6></Link>
                                <p className='bg-primary text-light' >
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit.
                                </p>
                            </MDBCol>

                            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4 bg-primary ' >
                                <h6 className='text-uppercase fw-bold mb-4 bg-primary text-light' >Links</h6>
                                <p className='bg-primary' style={{ color: '#D0C6CF' }}>
                                    <Link to={'/'} className='text-reset bg-primary' style={{ textDecoration: 'none' }} >
                                        Home Page
                                    </Link>
                                </p>
                                <p className='bg-primary' style={{ color: '#D0C6CF'}}>
                                    <Link to={'/wishlist'} className='text-reset bg-primary' style={{ textDecoration: 'none'}}>
                                        Wishlist Page
                                    </Link>
                                </p>
                                <p className='bg-primary' style={{ color: '#D0C6CF' }}>
                                    <Link to={'/cart'} className='text-reset bg-primary' style={{ textDecoration: 'none' }}>
                                        Cart Page
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 bg-primary text-light'>
                                <h6 className='text-uppercase fw-bold mb-4 bg-primary text-light' >Guides</h6>
                                <p className='bg-primary' >
                                    <Link className='bg-primary' to={'https://react.dev/'} style={{ color: '#D0C6CF', textDecoration: 'none' }}>
                                        React
                                    </Link>
                                </p>
                                <p className='bg-primary ' >
                                    <Link className='bg-primary ' to={'https://react-bootstrap.netlify.app/'} style={{ color: '#D0C6CF', textDecoration: 'none' }}>
                                        React Bootstrap
                                    </Link>
                                </p>
                                <p className='bg-primary' >
                                    <Link className='bg-primary' to={'https://bootswatch.com/'} style={{ color: '#D0C6CF', textDecoration: 'none'}}>
                                        Bootswatch
                                    </Link>
                                </p>
                            </MDBCol>

                            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 bg-primary text-light'>
                                <h6 className='text-uppercase fw-bold mb-4 bg-primary'>Contact</h6>

                                <p className='bg-primary ' style={{ color: '#D0C6CF'}}>
                                    <MDBIcon icon="envelope" className="me-3 bg-primary"  />
                                    E-Cart@gmail.com
                                </p>
                                <p className='bg-primary ' style={{ color: '#D0C6CF'}}>
                                    <MDBIcon icon="phone" className="me-3 bg-primary " /> + 01 234 567 88
                                </p>



                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>

                <div className='text-center p-4 bg-primary text-light'>
                    © 2024 Copyright:
                    <a className='text-reset fw-bold bg-primary ' href='' style={{ textDecoration: 'none'}}>
                        E-Cart.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    )
}

export default Footer