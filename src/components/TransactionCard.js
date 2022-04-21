import { useState } from 'react'
import { Card, Col, Row, Accordion } from 'react-bootstrap'
//import Swal from 'sweetalert2'


export default function TransactionCard ({orderProp}) {
	//before using props, destructure the object

	const { username, productName, quantity, totalPrice, balance, cardType, cardNumber, remarks, status, dateOrder, dateCancelled, _id, admin } = orderProp

	//const {courseId} = useParams()

	const [transaction] = useState('')

	const [orderId] = useState('')

	const collpaseId = transaction.indexOf(orderId)


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
			{/*<p>Updated amount paid: {payment}</p>*/}
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
