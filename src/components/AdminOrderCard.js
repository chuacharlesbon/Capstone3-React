import {  useContext } from 'react'
import { Card, Button, Col,Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import Swal from 'sweetalert2'
import UserContext from '../UserContext'

export default function OrderCard ({orderProp}) {

	const {user} = useContext(UserContext)

  	const adminName = user.userName

	const { userId, username, productId, productName, quantity, totalPrice, payment, balance, cardType, cardNumber, remarks, status, dateOrder, dateCancelled, _id, admin, byAdmin } = orderProp


	function approveRefund(id){
		fetch(`http://localhost:4000/orders/approveOrder/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
			admin: "Refund request approved. Process might take 3-5 banking days.",
			byAdmin: adminName
		})
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
		Swal.fire({
				title: "Refund request approved",
				icon: "success",
				text: `Request sent to Bank for processing`
			})
	})
	}

	return (
		<>
		<Card className="my-2 ">
		
		<Card.Body className="adminOrderCard">
			<Card.Text className="card-title text-left">
			<p>
			By: {username} {userId} <br/>
			{productName} {productId}<br/>
			</p>
			</Card.Text>

			<Row className="m-1 p-1"> 

			<Col xs={12} md={6} lg={4}>
			<Card.Subtitle>
			Order Details:
			</Card.Subtitle>

			<Card.Text>
			<p>
			Quantity: {quantity}<br/>
			Total Price: {totalPrice}<br/>
			Balance: {balance}<br/>
			</p>
			</Card.Text>
			</Col>

			<Col  xs={12} md={6} lg={4}>
			<Card.Subtitle>
			Payment Details:
			</Card.Subtitle>

			<Card.Text>
			<p>Updated amount paid: {payment}<br/>
			Card Type: {cardType}<br/>
			Card Number: {cardNumber}<br/>
			</p>
			</Card.Text>

			{ (cardType === "Debit Card")?

			<Image src="https://i.pinimg.com/736x/9c/23/d7/9c23d7c3aaa2d14960845a5f824e6c28.jpg" className="mx-2 image-payment"/>
			:  (cardType === "Credit Card")?

			<Image src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo-2000-2006.png" className="mx-2 image-payment"/>

			:  (cardType === "GCASH")?

			<Image src="https://orangemagazine.ph/wp-content/uploads/2022/03/GCash-Logo.png" className="mx-2 image-payment"/>

			:  (cardType === "PayPal")?

			<Image src="https://1000logos.net/wp-content/uploads/2021/04/Paypal-logo.png" className="mx-2 image-payment"/>

			:

			<Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzcz5ZOSbGDAXtWlGuxXDmCI9_AZhIQ0XqDgi4G5AzaUO_iU0lZkowZPLw1HLEBPqrP40&usqp=CAU" className="mx-2 image-payment"/>

			}
			
			

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
			Acknowledgement: {admin}<br/>
			Approved by: {byAdmin}
			</p>
			</Card.Text>
			</Col>


			</Row>

			<Row className="justify-content-center">
			<Col xs={8} md={6} lg={4} xl={3} >
			<Button as= {Link} to={``} onClick={() => approveRefund(`${_id}`)} className="d-block my-2 bg-info text-dark" >Approve Refund Request</Button>
			</Col>
			{/*<Col xs={8} md={4} lg={3} xl={2} >
			<Button variant="secondary" onClick={() => cancelOrder(`${_id}`)} className="d-block my-2 text-light" >Cancel Order</Button>
			</Col>*/}
			</Row>

		</Card.Body>
		</Card>
		</>
		
		)
}