import {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import {useParams, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function CourseView(){

const {user} = useContext(UserContext)
const [quantity, setQuantity] = useState('')
const [payment, setPayment] = useState('')
const [cardType, setCardType] = useState('none')
const [cardNumber, setCardNumber] = useState('')
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0)
const [image, setImage] = useState('')
const [stock, setStock] = useState('')
const [ added, setAdded] = useState(false)
const [newProdId, setNewProdId] = useState('')
const newStock = stock-quantity

const totalAmount = price*quantity

const [style] = useState({

		width: "10rem",
		height: "10rem"
	})

const [height] =useState({

		minHeight: "30rem",
		backgroundColor: "lightyellow"
	})

//useParams hook allows us to retrieve the courseId via the url
const {courseId} = useParams()

const enroll = (courseId) => {
	fetch(`http://localhost:4000/orders/orderFull/${courseId}`, {
		method: "POST",
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
		//console.log(data)
		const { balance } = data

		if( balance === 0){
			Swal.fire({
				title: "Ordered Successfully",
				icon: "success",
				text: `You will be directed order page. Please acknowledge the Payment to start the delivery process.`
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
	//console.log(data)
})
}


useEffect(() => {

	console.log(courseId)
fetch(`http://localhost:4000/products/getSingleProduct/${courseId}`)
.then(res => res.json())
.then(data => {
	//console.log(data)

	setNewProdId(data.productId)
	setName(data.name)
	setDescription(data.description)
	setStock(data.stockAvailable)
	setPrice(data.price)
	setImage(data.source)
})

}, [courseId])

	return(
		( added === true && user.id !== null)?

		<Navigate to="/orders"/>

		: (user.id === null)?

		<Navigate to="/login"/>

		:

		<Container className="mt-5">
		<Row>
		<Col lg={4} md={6} xl={3} xs={12} className="mx-auto text-center">
		<Card.Body   style={height} className="d-flex flex-column  justify-content-between">
			<Card.Title>
				{name}
			</Card.Title>
			<Card.Subtitle>
				Description:
			</Card.Subtitle>
			<Card.Text>
				{description}
			</Card.Text>
			<Card.Subtitle>
				Price:
			</Card.Subtitle>
			<Card.Text>
				Php {price}
			</Card.Text>
			<Card.Text>
				Stock Available {stock}
			</Card.Text>
			<Form>
			<Form.Group controlId="quantity">
			<Row className="align-items-center">
			<Col>
			<Form.Label>Enter quantity:</Form.Label>
			</Col>
			<Col>
			<Form.Control type="number" min="1" max={`${stock}`} required value={quantity} onChange={e => setQuantity(e.target.value)}/>
			</Col>
			</Row>
			</Form.Group>

			<Form.Group controlId="payment">
			<Row className="align-items-center mb-3">
			<Col>
			<Form.Label>Enter Amount:</Form.Label>
			</Col>
			<Col>
			<Form.Control type="number"  required value={payment} onChange={e => setPayment(e.target.value)}/>
			</Col>
			</Row>
			</Form.Group>

			{/*<Form.Group controlId="cardType">
			<Form.Label>Enter Card Type:</Form.Label>
			<Form.Control type="text"  required value={cardType} onChange={e => setCardType(e.target.value)}/>
			</Form.Group>*/}

			<label for="card">Choose Card Type:</label>
			<select id="card" name="card" required value={cardType} onChange={e => setCardType(e.target.value)}>
 			<option value="none">--Select Card--</option>
 			<option value="Debit Card">Debit Card</option>
  			<option value="Credit Card">Credit Card</option>
  			<option value="PayPal">PayPal</option>
  			<option value="GCASH">GCASH</option>
  			<option value="Cash on Delivery" disabled>Cash on Delivery</option>
			</select>
			<Card.Text>You have chosen: {cardType}</Card.Text>

			{/*<Form.Group controlId="cardType">
			<Form.Label>Enter Card Type:</Form.Label>
			<Form.Control type="text"  required value={cardType} onChange={e => setCardType(e.target.value)}/>
			</Form.Group>*/}

			{/*<Form.Group controlId="cardNumber">
			<Form.Label>Enter {cardDetails}:</Form.Label>
			<Form.Control type="text"  required value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
			</Form.Group>*/}
			
			{ (cardType === "GCASH")?

			<>
			<Form.Group controlId="cardNumber">
			<Form.Label>Enter Gcash Number:</Form.Label>
			<Form.Control type="text"  required value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
			</Form.Group>
			</>

			: (cardType === "PayPal")?
			<>
			<Form.Group controlId="cardNumber">
			<Form.Label>Enter Paypal Email:</Form.Label>
			<Form.Control type="text"  required value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
			</Form.Group>
			</>

			: ( (cardType === "Debit Card") || (cardType === "Credit Card"))?

			<>
			<Form.Group controlId="cardNumber">
			<Form.Label>Enter Card Number:</Form.Label>
			<Form.Control type="text"  required value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
			</Form.Group>
			</>

			:

			<>
			<Card.Text className="bg-danger p-2 text-white">Please Choose Payment Method</Card.Text>
			</>

			}

			</Form>
			<Card.Text className="mt-2">
				Total Amount to be paid: <span className="bg-danger text-white p-1 rounded">{totalAmount}</span>
			</Card.Text>
			<Image src={image} style={style} className="mx-auto d-block"/>
			
			{ (cardNumber === "" )?

			<Button className="bg-secondary text-white" disabled onClick={()=> enroll(courseId)}>Send Order</Button>

			:

			<Button className="background-play text-dark" onClick={()=> enroll(courseId)}>Send Order</Button>
			}

		</Card.Body>
		</Col>
		</Row>
		</Container>
		)
}