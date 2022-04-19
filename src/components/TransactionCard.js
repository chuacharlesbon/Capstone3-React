import { useState, useEffect } from 'react'
import { Card, Button, Col, Container, Row, Accordion } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import Swal from 'sweetalert2'


export default function TransactionCard ({orderProp}) {
	//before using props, destructure the object

	const { userId, username, productId, productName, quantity, totalPrice, payment, balance, cardType, cardNumber, remarks, status, dateOrder, dateCancelled, _id, admin } = orderProp

	const {courseId} = useParams()

	const [transaction, setTransaction] = useState('')

	const [orderId, setOrderId] = useState('')

	const collpaseId = transaction.indexOf(orderId)

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
		///console.log(data)
		setOrderId(data._id)
		Swal.fire({
				title: "You cancelled your order",
				icon: "success",
				text: `If payment was made, refund will be processed accordingly.`
			})
	})
	}

	useEffect(()=>{
		fetch('http://localhost:4000/orders/getUserTransactions', {
			method: "GET",
			headers: {
					/*Authorization: `Bearer ${token}`*/
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
		})
		.then(res => res.json())
		.then(data => {
			//console.log(data)
			setTransaction(data)
		})
	})

	return (
		<>

		<Accordion className="my-2">
  		<Accordion.Item eventKey={collpaseId}>
    	<Accordion.Header className="bg-warning"><h6 className="text-dark">{orderId} {dateOrder}</h6></Accordion.Header>
    	<Accordion.Body>
		
    	<Card className="my-2">
		<span>By: {username}</span>
		<Card.Body>
			<Card.Title className="card-title text-left">
			{productName}
			</Card.Title>

			<Row className="m-1 p-1"> 

			<Col xs={12} md={6} lg={4}>
			<Card.Subtitle>
			Order Details:
			</Card.Subtitle>

			<Card.Text>
			<p>
			OrderId: {_id}<br/>
			Quantity: {quantity}<br/>
			Total Price: {totalPrice}<br/>
			Balance: {balance}
			</p>
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

			<Col md={12} lg={4} className="mx-auto">
			<Card.Subtitle>
			Delivery and Other Details:
			</Card.Subtitle>

			<Card.Text>
			<p>Remarks: {remarks}<br/>
			Status: {status}<br/>
			Date added to cart/ordered: {dateOrder}<br/>
			(Date Cancelled by User: {dateCancelled})<br/>
			Acknowledgement: {admin}
			</p>
			</Card.Text>
			</Col>
			</Row>
		</Card.Body>
		</Card>

		</Accordion.Body>
  		</Accordion.Item>
  		</Accordion>

		{/*<Card className="my-2">
		<span>By: {username}</span>
		<Card.Body>
			<Card.Title className="card-title text-left">
			{productName}
			</Card.Title>

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
		</Card.Body>
		</Card>*/}
		</>
		
		)
}