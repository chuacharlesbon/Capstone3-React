import { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Container, Button} from 'react-bootstrap'
import Image from "react-bootstrap/Image";

export default function ProductBanner() {

		const [style, setStyle] =useState({

		width: "15rem",
		height: "10rem"
		
	})

	return(
		<>
		<Container id="prodComp">
			<Container>
			<Row className="justify-content-center text-center mx-auto my-3">
			<Col xl={3} lg={4}  md={12} className="mx-auto text-center d-none d-md-flex">
			<Image src="https://assets.mspimages.in/gear/gif_12_hgaufb.gif" style={style} className="mx-auto text-center d-none d-lg-block"/>
			</Col>
			<Col xl={6} lg={4} xs={12} className="mx-auto text-center "  id="top-body">
			<h1 className="text-center p-3 text-danger">WELCOME !</h1>
			<p  className="text-center pb-3 text-danger">Check out the latest items on the shop today!</p>
			</Col>
			<Col xl={3} lg={4} md={12} className="mx-auto text-center d-flex">
			<Image src="https://i.pinimg.com/originals/ec/70/da/ec70da5e912b5faaeba9647b0647d10a.gif" style={style} className="mx-auto text-center d-lg-block d-md-flex"/>
			<Image src="https://assets.mspimages.in/gear/gif_12_hgaufb.gif" style={style} className="mx-auto text-center d-lg-none d-md-flex d-none"/>
			</Col>
			</Row>
			</Container>
			<Container>
			<Row>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block"  as={Link} to="/courses/categoryFood"><h6>Foods &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/courses/categoryFood"><h6>Machines &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/courses/categoryFood"><h6>Clothing &#62;&#62;</h6></Button>
			</Col>
			<Col xs={8} md={3} lg={2}  className="text-center mx-auto m-1">
			<Button className="text-center mx-auto p-1 bg-warning text-dark d-block" as={Link} to="/courses"><h6>All Products &#62;&#62;</h6></Button>
			</Col>
			</Row>
			</Container>
		</Container>
		</>
		)
}