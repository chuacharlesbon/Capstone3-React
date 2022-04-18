import { useState, useEffect,useContext } from 'react'
import { Row, Col, Card, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function Footer () {


	const {user} = useContext(UserContext)
  console.log(user)
	const [style, setStyle] = useState({
		height: "8rem",
		width: "12rem"
	})

	return (
	(user.isAdmin === true && user.id !== null)?

		<>
		<Row className="mt-3 bg-info pt-1">

		<Col xs={12}  md={6} lg={4} className="text-center mx-auto my-3">
		<p><Button variant="info" as={Link} to="/">About the Developer</Button></p>
		<p><Button variant="info" as={Link} to="/">About ShopNetwork</Button></p>
		<p><Button  variant="info" as={Link} to="/">FAQs</Button></p>
		</Col>

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto my-3">
		<h6>Visit us!</h6>

		</Col>

		<Col xs={12} md={6} lg={4}  className="text-center mx-auto my-3" >
			<h6>Contact</h6>
			<p>shopnetwork@gmail.com</p>
			<p>charleschua00@gmail.com</p>
			<p>(+63) 948-3944-738</p>
		</Col>

		<p className="text-center mx-auto">&copy;All Rights Reserved 2022 Philippines</p>
		</Row>
		</>

		:
		<>
		<Row className="mt-3 bg-warning pt-1">

		<Col xs={12}  md={6} lg={4} className="text-center mx-auto my-3">
		<p><Button variant="warning" as={Link} to="/">About the Developer</Button></p>
		<p><Button variant="warning" as={Link} to="/">About ShopNetwork</Button></p>
		<p><Button  variant="warning" as={Link} to="/">FAQs</Button></p>
		</Col>

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto my-3">
		<h6>Visit us!</h6>

		</Col>

		<Col xs={12} md={6} lg={4}  className="text-center mx-auto my-3" >
			<h6>Contact</h6>
			<p>shopnetwork@gmail.com</p>
			<p>charleschua00@gmail.com</p>
			<p>(+63) 948-3944-738</p>
		</Col>

		<p className="text-center mx-auto">&copy;All Rights Reserved 2022 Philippines</p>
		</Row>
		</>

	
		)
}