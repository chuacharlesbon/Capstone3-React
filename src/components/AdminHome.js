import { useState, useEffect,useContext } from 'react'
import {Link} from 'react-router-dom'
import { Row, Col, Container, Button, Carousel } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function AdminHome(){

  const {user} = useContext(UserContext)
  console.log(user)

  const username = user.userName

	const [style, setStyle] = useState({
		width: "40rem",
		height: "27rem"
	})

	return (
		<Row className="bg-info row align-items-center justify-content-center mt-2">
		<Col lg={4} xs={12} className="">
			<Container className="my-3 p-3">
				<h1>ShopNetwork Inc</h1>
				<p>Hi there Admin {username}!</p>
				<Button variant="primary" className="background-play text-dark" as={Link} to="/">Get Started!</Button>
			</Container>
		</Col>
		<Col  lg={8}  xs={12}>
			<Container className="my-3 p-3">
				<Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block mx-auto text-center"
      src="https://thumbs.dreamstime.com/b/sticky-notes-funny-faces-attached-to-cups-coffee-office-table-break-time-sticky-notes-funny-faces-attached-to-cups-127142255.jpg"
      alt="First slide"
      style={style}
    />
    <Carousel.Caption>
      <h3 className="text-dark carousel-desc p-1">Start your day with a Smile!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center "
      src="https://lh3.googleusercontent.com/wHJyfsHv6qrAbVgmYJQsr7EQRgH9-Ksee17bIEDbWqnfz-4zg-PB-uPKWx8v-t51sOAM-9n59xaxBPo1fjkiIXklYevoCVej4Ow=w960-rj-nu-e365"
      alt="Second slide"
      style={style}
    />

    <Carousel.Caption>
      <h3 className="text-dark carousel-desc p-1">Have a nice Day!</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center"
      src="https://c4.wallpaperflare.com/wallpaper/1012/347/792/twice-purple-cake-girl-wallpaper-preview.jpg"
      alt="Third slide"
      style={style}
    />

    <Carousel.Caption>
      <h3  className="text-dark carousel-desc p-1">Take a Break. Take a Rest</h3>
    </Carousel.Caption>
  </Carousel.Item>
   <Carousel.Item  interval={2000}>
    <img
      className="d-block mx-auto text-center"
      src="https://i.pinimg.com/originals/b9/31/5e/b9315eab7b11ec550295dda5cc72a2be.jpg"
      alt="First slide"
      style={style}
    />
    <Carousel.Caption>
      <h3  className="text-dark carousel-desc p-1">Be Empowered! You're Not Alone</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
			</Container>
		</Col>
		</Row>



		)
}
