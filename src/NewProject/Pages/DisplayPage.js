import React from 'react'
import HomePage from '../Header/HomePage'
import {  Col, Row } from 'react-bootstrap'
import SideNavigation from '../Navigation/SideNavigation'
import "../Navigation/SideNavigation.css"

import '../Pages/DisplayPage.css'

function DisplayPage() {
    return (
        <div>
            <HomePage />
            <div>
                <div className="sidnav">
                    <Row>
                        <Col md={2}>
                            <SideNavigation />
                        </Col>
                        <Col md={10}>
                            <h3>WEBANDCRAFTS</h3>
                            <hr />

                            <p>  Having known as a website development company in the initial stages, Webandcrafts have now
                                 blossomed into a global IT solution provider. Today, we create custom made mobility 
                                 solutions, web and mobile applications and dynamic digital marketing
                                 strategies for our customers in Asia, the Middle East, Northern and Southern parts 
                                 of America.</p>
                        </Col>
                    </Row>



                </div>
            </div>


        </div>
    )
}

export default DisplayPage
