import React, { useState } from 'react'
import { Navbar, Container, Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'


function HeaderOne() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }

  const CAROUSEL_ITEMS = [
    {
      imageSrc:
        "https://www.bmw.in/content/dam/bmw/marketIN/bmw_in/Home/Teaser/Home_Header_Banner_Desktop_1680x756_03.jpg.asset.1624515416694.jpg",
      alt: "aaaa",
      title: "aaaa",
      content: "asdfghjkl"

    },
    {
      imageSrc:
        "https://static.tcimg.net/vehicles/primary/8170a8e796ecf9e7/2022-BMW-8_Series-white-full_color-driver_side_front_quarter.png",
      alt: "bbbb",
      title: "bbbb",
      content: "qwertyuiop"


    },
    {
      imageSrc: "https://www.bmw-nigeria.com/content/dam/bmw/marketZA/bmw-nigeria_com/testpictures/xxl_bmw.jpg",
      alt: "cccc",
      title: "cccc",
      content: "azxcvbnm"
    },

  ];
return (

    <div>

      <div>
        <Navbar fixed="top" />
        <Navbar bg="dark" variant="dark">
          <Container fluid>
            <Navbar.Brand href="#">Logo</Navbar.Brand>

            <Link to="signin" className="nav-link">Sign In</Link>
          </Container>
        </Navbar>
      </div>


      <div>

        <Carousel className="carousal" activeIndex={index} onSelect={handleSelect}>
          {CAROUSEL_ITEMS.map((items) => {
            return (

              <Carousel.Item key={items.title}>
                <img className="d-block w-100" src={items.imageSrc} alt={items.alt} />

                <Carousel.Caption>
                  {items.title}
                  {items.content}

                </Carousel.Caption>
              </Carousel.Item>
            )
          })}
        </Carousel>
      </div>


    </div>

  );
}
export default HeaderOne
