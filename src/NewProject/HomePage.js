import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

function HomePage() {
    return (
        <div>
            <div>


                <Navbar fixed="top" />
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#">Logo</Navbar.Brand>
                    </Container>
                </Navbar>

            </div>

        </div>
    )
}

export default HomePage
