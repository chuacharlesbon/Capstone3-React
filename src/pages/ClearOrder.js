import { useState, useEffect, useContext } from 'react'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function ClearOrder ({orderProp}) {
	//before using props, destructure the object
	/*const {user} = useContext(UserContext)
	console.log(user)

	const username = user.firstName*/
	/*const { userId, userName, productId, productName, quantity, totalPrice, payment, balance, cardType, cardNumber, remarks, status, dateOrder, dateCancelled, _id } = orderProp

	console.log(orderProp)*/

	const {user} = useContext(UserContext)
  		console.log(user)

  	const username = user.userName


	

	const [style, setStyle] =useState({

		width: "11rem",
		height: "8rem"
	})

	return (
	
		<Row className="text-center mx-auto justify-content-center mt-5">
		<Col xs={12} md={4} xl={3} id="clear-order" className="text-center mx-auto justify-content-center m-2 p-2">
		<Container>
		<h6>Hi there {username}!</h6>
		<h3>It seems you have no items listed here for a while.</h3>
		<Image src="https://c.tenor.com/d021xNuyYuEAAAAM/snoopy-grocery.gif" style={style} className="mx-auto d-block"/>
		<Button /*variant="warning"*/ as= {Link} to="/courses" className="d-block my-2 background-play text-dark" >Go to Shop</Button>
		<Button /*variant="warning"*/ as= {Link} to="/" className="d-block my-2 background-play text-dark" >Go to Home</Button>
		</Container>
		
		</Col>	
		</Row>	

		
		)
}