import {useState, useEffect} from 'react'
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import {useParams, Navigate} from 'react-router-dom'
import Swal from 'sweetalert2'

export default function PayOrder(){

const [quantity, setQuantity] = useState('')
const [payment, setPayment] = useState('')
const [cardType] = useState('')
const [name, setName] = useState('');
const [price, setPrice] = useState(0)
const [stock, setStock] = useState('')
const [ added, setAdded] = useState(false)
const [newProdId, setNewProdId] = useState('')
const newStock = stock-quantity

//console.log(newStock)

const [ setTotalAmount] = useState('')

const [height] =useState({

		minHeight: "30rem",
		backgroundColor: "lightyellow"
	})

//useParams hook allows us to retrieve the courseId via the url
const {courseId} = useParams()

const enroll = (courseId) => {
	fetch(`https://immense-lake-17505.herokuapp.com/orders/cancelOrder/${courseId}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
		const { balance } = data

		if( balance === 0){
			Swal.fire({
				title: "Order Cancelled",
				icon: "success",
				text: `Action received. You may check the details in the Order Page`
			})
			setQuantity('')
			setAdded(true)
		}else if ( balance > 0) {
			Swal.fire({
				title: "Order Cancelled",
				icon: "success",
				text: `Action received. You may check the details in the Order Page`
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
	fetch(`https://immense-lake-17505.herokuapp.com/products/${newProdId}`, {
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
})
}

useEffect(() => {
	//console.log(courseId)
	//console.log(cardType)
fetch(`https://immense-lake-17505.herokuapp.com/orders/thisOrder/${courseId}`, {
	method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
})
.then(res => res.json())
.then(data => {
	
	setNewProdId(data[0].productId)
	setPayment(data[0].balance)
	setTotalAmount(data[0].totalPrice)
	setQuantity(data[0].quantity)
	setName(data[0].productName)
	setPrice(data[0].balance)
})

fetch(`https://immense-lake-17505.herokuapp.com/products/getSingleProduct/${newProdId}`, {
	method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
})
.then(res => res.json())
.then(data => {

	setStock(data[0].stockAvailable)

})

}, [courseId, name, price, quantity, payment, stock, setTotalAmount, newProdId, cardType])

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
			<Card.Text>
				Price: Php {price}
			</Card.Text>
			<Card.Text>Ordered quantity: {quantity}</Card.Text>
			<Card.Text className="text-muted">You are about to cancel your order {name}
				<span className="rounded-circle px-2" id="icon-warning">!</span>
			}
			</Card.Text>
			<Button className="background-play text-dark" onClick={()=> enroll(courseId)}>Cancel Order</Button>
		</Card.Body>
		</Col>
		</Row>
		</Container>
		)
}