import {Link} from 'react-router-dom'
import { Row, Col, Container, Button, Carousel } from 'react-bootstrap';

export default function Banner(){

	return (
		<Row className="banner row align-items-center justify-content-center">
		<Col lg={4} xs={12} className="">
			<Container className="my-3 p-3">
				<h1>ShopNetwork Inc</h1>
				<p>Discover something new.</p>
				<Button variant="primary" className="background-play text-dark" as={Link} to="/products/categoryFood">Shop Now!</Button>
			</Container>
		</Col>
		<Col  lg={8}  xs={12}>
			<Container className="my-3 p-3">
				<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner"
      src="https://st.depositphotos.com/23170888/53981/i/450/depositphotos_539815168-stock-photo-asian-attractive-woman-use-mobile.jpg?forcejpeg=true"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3 className="text-dark carousel-desc p-1">Shop with a Tap!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner "
      src="https://images.eatsmarter.com/sites/default/files/styles/1600x1200/public/macaroon-cookies-563088.jpg"
      alt="Second slide"
      
    />

    <Carousel.Caption>
      <h3 className="text-dark carousel-desc p-1">Satisfy your cravings</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner"
      src="https://cdn.mos.cms.futurecdn.net/xk5ghxjiBihwPxCEDDsTKD.jpg"
      alt="Third slide"
      
    />

    <Carousel.Caption>
      <h3  className="text-dark carousel-desc p-1">Get the Latest Deals</h3>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center image-banner"
      src="https://www.worldatlas.com/r/w768/upload/12/f8/83/coffee-cup.jpg"
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3  className="text-dark carousel-desc p-1">Visit your Favorite Shops Online</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</Container>
		</Col>
		</Row>


		)
}
