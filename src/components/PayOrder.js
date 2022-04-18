import {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import {useParams, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function PayOrder(){

const {user} = useContext(UserContext)
const [quantity, setQuantity] = useState('')
const [payment, setPayment] = useState('')
const [cardType, setCardType] = useState('')
const [cardNumber, setCardNumber] = useState('')
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0)
const [image, setImage] = useState('')
const [stock, setStock] = useState('')
const [ added, setAdded] = useState(false)
const [newProdId, setNewProdId] = useState('')
const newStock = stock-quantity

console.log(newStock)

const [totalAmount, setTotalAmount] = useState('')

const [style, setStyle] = useState({

		width: "10rem",
		height: "10rem"
		
	})

const [height, setHeight] =useState({

		minHeight: "30rem",
		backgroundColor: "lightyellow"
	})

//useParams hook allows us to retrieve the courseId via the url
const {courseId} = useParams()

const enroll = (courseId) => {
	fetch(`http://localhost:4000/orders/payOrder/${courseId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
			quantity: quantity,
			payment: payment,
			cardType: cardType,
			cardNumber: cardNumber
		})
	})
	.then(res => res.json())
	.then(data => {
		console.log(data)
		const { balance, dateOrder, productId, productName, quantity, status, totalPrice, userId, userName, _v, _id } = data

		if( balance === 0){
			Swal.fire({
				title: "Ordered Successfully",
				icon: "success",
				text: `Your order is now on process. You may check the details in the Order Page`
			})
			setQuantity('')
			setAdded(true)
		}else if ( balance > 0) {
			Swal.fire({
				title: "This is a Full Order Option",
				icon: "error",
				text: `Payment must be one-time transaction only. To pay the balance ${balance} , you may proceed to Order Page to complete the transaction`
			})
			setAdded(true)
		}else {
			Swal.fire({
				title: "Something went wrong",
				icon: "error",
				text: "Please contact Admin."
			})
			setAdded(false)
		}
	})
	fetch(`http://localhost:4000/products/${newProdId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
				stockAvailable: newStock
			})
})
.then(res => res.json())
.then(data => {
	console.log(data)
})
}


useEffect(() => {
	console.log(courseId)
	console.log(cardType)
fetch(`http://localhost:4000/orders/thisOrder/${courseId}`, {
	method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
})
.then(res => res.json())
.then(data => {
	/*const { balance, dateOrder, productId, productName, quantity, status, totalPrice, userId, userName, _v, _id } = data*/
	console.log(data)

	setNewProdId(data[0].productId)
	setPayment(data[0].balance)
	setTotalAmount(data[0].totalPrice)
	setQuantity(data[0].quantity)
	setName(data[0].productName)
	setPrice(data[0].balance)
})

fetch(`http://localhost:4000/products/getSingleProduct/${newProdId}`, {
	method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
})
.then(res => res.json())
.then(data => {
	console.log(data)
	setStock(data.stockAvailable)

})

/*fetch(`http://localhost:4000/products/${newProdId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
				stockAvailable: stock-quantity
			})
})
.then(res => res.json())
.then(data => {
	console.log(data)
})*/

}, [courseId, name, price, quantity, payment, stock])

	return(
		( added === true)?

		<Navigate to="/orders"/>

		:

		<Container className="mt-5">
		<Row>
		<Col lg={4} md={6} xl={3} xs={12} className="mx-auto text-center">
		<Card.Body   style={height} className="d-flex flex-column  justify-content-between">
			<Card.Title>
				{name}
			</Card.Title>
			{/*<Card.Subtitle>
				Description:
			</Card.Subtitle>
			<Card.Text>
				{description}
			</Card.Text>*/}
			<Card.Subtitle>
				Price:
			</Card.Subtitle>
			<Card.Text>
				Php {price}
			</Card.Text>
			
			<Card.Text>Ordered quantity: {quantity}</Card.Text>
			<Card.Text>Amount to be Paid: {price}</Card.Text>

			<label for="card">Choose Card Type:</label>
			<select id="card" name="card" required value={cardType} onChange={e => setCardType(e.target.value)}>
 			<option value="null">--Select Card--</option>
 			<option value="Debit Card">Debit Card</option>
  			<option value="Credit Card">Credit Card</option>
  			<option value="Cash on Delivery" disabled>Cash on Delivery</option>
			</select>
			<Card.Text>You have chosen: {cardType}</Card.Text>

			
			<Form>
			<Card.Text className="text-muted">We will never share your credentials to anyone. See Terms and Data Privacy</Card.Text>

			<Form.Group controlId="cardNumber">
			<Form.Label>Enter Card Number:</Form.Label>
			<Form.Control type="text"  required value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
			</Form.Group>

			</Form>
			<Card.Text className="mt-2">
				Total Amount to be paid: <span className="bg-danger text-white p-1 rounded">{payment}</span>
			</Card.Text>
			{/*<Image src={image} style={style} className="mx-auto d-block"/>*/}
			{/*<Card.Subtitle>
				Class Schedule
			</Card.Subtitle>
			<Card.Text>
				8:00 AM to 5:00 PM 
			</Card.Text>*/}
			<Card.Text className="text-muted">Please check the details carefully before checking out.
				<span className="rounded-circle px-2" id="icon-warning">!</span>
			</Card.Text>
			<Button className="background-play text-dark" onClick={()=> enroll(courseId)}>Confirm Order</Button>
		</Card.Body>
		</Col>
		</Row>
		</Container>
		)
}