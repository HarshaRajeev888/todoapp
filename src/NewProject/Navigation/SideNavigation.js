import React from 'react'
import { Nav } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import "../Navigation/SideNavigation.css"

function SideNavigation() {
    const navigate = useNavigate()

    
    return (
        <div>
            <Nav className="side-nav">
                
               

                 <Nav.Link onClick = {()=> navigate('/First')}>Path One</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> navigate('/Second')}>Path Two</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> navigate('/Third')}>Path Three</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> navigate('/Fourth')}>Path Four</Nav.Link>
                <hr />
                <Nav.Link onClick = {()=> navigate('/Fifth')}>Path Five</Nav.Link> 
               

            </Nav>
            
        </div>
    )
}

export default SideNavigation
