import React from 'react'
import HomePage from '../../Header/HomePage'
import SideNavigation from '../../Navigation/SideNavigation'
import { Row,Col } from 'react-bootstrap'


export default function PageThree() {
    return (
        <div>
            <HomePage />
            <div>
               <Row>
                   <Col md= {2}>
                       <SideNavigation />
                   </Col>
                   <Col md = {10}>
                   {<h1>Node JS</h1>}
  {<p>JavaScript library
  React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies.
   React can be used as a base in the development of single-page or mobile applications. Wikipedia</p>}
                   </Col>
                   </Row>
       </div>
           
        </div>
    )
}
