
import { Card, Button, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function CartCard ({orderProp}) {
	//before using props, destructure the object

	const {username, productName, quantity, totalPrice, dateOrder, dateCancelled, _id } = orderProp

	function cancelCart(id){
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
				title: "Item removed from cart",
				icon: "success",
				text: `Your list will be updated.`
			})
	})
	}

	return (
		
		<Card className="my-2">
		<Card.Body>
			<span>By: {username}</span>
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
			<p>Date added to cart: {dateOrder}</p>
			</Card.Text>
			</Col>

			<Col  xs={12} md={6} lg={4}>
			<Card.Subtitle>
			Payment Details:
			</Card.Subtitle>

			<Card.Text>
			<p>Sub Total: {totalPrice}</p>
			</Card.Text>
			</Col>

			<Col  xs={12} md={6} lg={4} className="mx-auto">
			<Card.Subtitle>
			Delivery and Other Details:
			</Card.Subtitle>

			<Card.Text>
			<p>(Date Cancelled by User: {dateCancelled})</p>
			</Card.Text>
			</Col>


			</Row>

			<Row className="justify-content-center">
			<Col xs={8} md={4} lg={3} xl={2} >
			<Button /*variant="warning"*/ as= {Link} to={`/orders/payOrder/${_id}`} className="d-block my-2 background-play text-dark" >Buy Item</Button>
			</Col>
			<Col xs={8} md={4} lg={3} xl={2} >
			<Button variant="secondary" onClick={() => cancelCart(`${_id}`)} className="d-block my-2 text-light" >Remove from Cart</Button>
			</Col>
			</Row>
		</Card.Body>
		</Card>

		
		)
}