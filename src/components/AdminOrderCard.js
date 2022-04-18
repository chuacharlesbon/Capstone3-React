import { useState, useEffect } from 'react'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import Swal from 'sweetalert2'


export default function OrderCard ({orderProp}) {
	//before using props, destructure the object

	const { userId, username, productId, productName, quantity, totalPrice, payment, balance, cardType, cardNumber, remarks, status, dateOrder, dateCancelled, _id } = orderProp

	const {courseId} = useParams()

	function cancelOrder(id){
		fetch(`http://localhost:4000/orders/cancelOrder/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		Swal.fire({
				title: "You cancelled your order",
				icon: "success",
				text: `If payment was made, refund will be processed accordingly.`
			})
	})
	}

	return (
		<>
		{/*<span>By: {username}</span>*/}
		<Card className="my-2 ">
		
		<Card.Body className="adminOrderCard">
			<Card.Text className="card-title text-left">
			<p>By: {username} {userId} </p>
			<p>{productName} {productId}</p>
			</Card.Text>

			<Row className="m-1 p-1"> 

			<Col xs={12} md={6} lg={4}>
			<Card.Subtitle>
			Order Details:
			</Card.Subtitle>

			<Card.Text>
			<p>Quantity: {quantity}</p>
			<p>Total Price: {totalPrice}</p>
			<p>Balance: {balance}</p>
			</Card.Text>
			</Col>

			<Col  xs={12} md={6} lg={4}>
			<Card.Subtitle>
			Payment Details:
			</Card.Subtitle>

			<Card.Text>
			<p>Updated amount paid: {payment}</p>
			<p>Card Type: {cardType}</p>
			<p>Card Number: {cardNumber}</p>
			</Card.Text>
			</Col>

			{/*</Row>*/}

			<Col md={12} lg={4} className="mx-auto">
			<Card.Subtitle>
			Delivery and Other Details:
			</Card.Subtitle>

			<Card.Text>
			<p>Remarks: {remarks}</p>
			<p>Status: {status}</p>
			<p>Date added to cart/ordered: {dateOrder}</p>
			<p>(Date Cancelled by User: {dateCancelled})</p>
			</Card.Text>
			</Col>


			</Row>

			{/*<Row className="justify-content-center">
			<Col xs={8} md={4} lg={3} xl={2} >
			<Button as= {Link} to={`/orders/payOrder/${_id}`} className="d-block my-2 background-play text-dark" >Complete Payment</Button>
			</Col>
			<Col xs={8} md={4} lg={3} xl={2} >
			<Button variant="secondary" onClick={() => cancelOrder(`${_id}`)} className="d-block my-2 text-light" >Cancel Order</Button>
			</Col>
			</Row>*/}

		</Card.Body>
		</Card>
		</>
		
		)
}