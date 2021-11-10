import React from 'react'
import { Card } from 'react-bootstrap'
import "./Footer.css"

function Footer() {
    return (
        //     <div>
        //          <Card className="bg-dark text-white">
        //     <Card.Body><i><center><b>Footer.......................................!!!</b></center></i></Card.Body>
        //   </Card>

        //     </div>

        <>
            <div className="main-footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h4>webandcrafts</h4>
                            <ul className="list-unstyled">
                                <li>asc</li>
                                <li>asd</li>
                                <li>asd</li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>webandcrafts</h4>
                            <ul className="list-unstyled">
                                <li>asc</li>
                                <li>asd</li>
                                <li>asd</li>
                            </ul>
                        </div>

                        <div className="col">
                            <h4>webandcrafts</h4>
                            <ul className="list-unstyled">
                                <li>asc</li>
                                <li>asd</li>
                                <li>asd</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <p className="col-sm">
                        {new Date().getFullYear()}webandcrafts | all rights reserved | Terms of services | privacy
                        </p>
                    </div>
                </div>
            </div>




        </>

    )
}

export default Footer
