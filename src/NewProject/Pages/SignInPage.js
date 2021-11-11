import React from 'react'
import {Form, Button,Row,Col } from 'react-bootstrap'
import HomePage from '../Header/HomePage'
import { login } from '../Service'
import useLogin from './Hooks/useLogin'


function SignInPage() {
    const[handleChange,handleSubmit,error]=useLogin({login})
    return (
        <div>
            <div>
                <HomePage />
            </div>
            <div>
                {/* <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email"  isInvalid={error} onChange={(e) => handleChange(e)}  placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"   isInvalid={error} onChange={(e) => handleChange(e)}  placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form> */}
                
            <Row style={{ height: '80vh' }}>
                <Col></Col>
                <Col className="p-3 mt-5" md={4}>
                    <Form onSubmit={handleSubmit}>
                        <h2 className="d-flex justify-content-center" >Log In</h2>
                        <Form.Group className="mb-3" controlId="email" >

                            <Form.Control type="email" isInvalid={error} onChange={(e) => handleChange(e)} placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                use "admin@gmail.com" as username
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                                Something Went Wrong
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password"  >

                            <Form.Control type="password" isInvalid={error} onChange={(e) => handleChange(e)} placeholder="Password" />
                            <Form.Text className="text-muted">
                                use "password" as password
                            </Form.Text>
                            <Form.Control.Feedback type="invalid">
                            Something Went Wrong
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button className="col-2" variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            
            </div>
            
            
            
            
            
            
            
            
            
            
            
          

        </div>



    )
}

export default SignInPage 
