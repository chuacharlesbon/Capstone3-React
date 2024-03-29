
import { Card, Button, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'


export default function OrderCard ({orderProp}) {
	//before using props, destructure the object

	const { username, productName, quantity, totalPrice, payment, balance, cardType, cardNumber, remarks, status, dateOrder, dateCancelled, _id, admin } = orderProp
	
	function cancelOrder(id){
		fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/orders/cancelOrder/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
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
			<p>
			Remarks: {remarks}<br/>
			Status: {status}<br/>
			Date added to cart/ordered: {dateOrder}<br/>
			(Date Cancelled by User: {dateCancelled})<br/>
			Acknowledgement: {admin}
			</p>

			</Card.Text>
			</Col>


			</Row>

			<Row className="justify-content-center">
			<Col xs={8} md={4} lg={3} xl={2} >
			<Button /*variant="warning"*/ as= {Link} to={`/orders/payOrder/${_id}`} className="d-block my-2 card-btn text-dark bg-white" >Complete Payment</Button>
			</Col>
			<Col xs={8} md={4} lg={3} xl={2} >
			<Button variant="secondary" onClick={() => cancelOrder(`${_id}`)} className="d-block my-2 text-light" >Cancel Order</Button>
			</Col>
			</Row>
		</Card.Body>
		</Card>
		</>
		
		)
}