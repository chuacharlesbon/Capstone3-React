import {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import {useParams, Navigate} from 'react-router-dom'
import Swal from 'sweetalert2'
import UserContext from '../UserContext'
import useScript from '../hooks/useScript.js'

export default function PayOrder(){

const Xffiliate = useScript('https://xffiliate-api.xtendly.com/webhooks/conversionscript.js')

const {user} = useContext(UserContext)
const [quantity, setQuantity] = useState('')
const [payment, setPayment] = useState('')
const [cardType, setCardType] = useState('')
const [cardNumber, setCardNumber] = useState('')
const [name, setName] = useState('');
const [price, setPrice] = useState(0)

const [stock, setStock] = useState('')
const [ added, setAdded] = useState(false)
const [ProdId, setProdId] = useState('')
const newStock = stock-quantity

console.log(newStock)

const [totalAmount, setTotalAmount] = useState('')

//useParams hook allows us to retrieve the courseId via the url
const {courseId} = useParams()

useEffect(() => {
fetch(`https://immense-lake-17505.herokuapp.com/products/getSingleProduct/${ProdId}`)
.then(res => res.json())
.then(data => {
	return setStock(data.stockAvailable)

})
}, [stock, ProdId])

const enroll = (courseId) => {
	fetch(`https://immense-lake-17505.herokuapp.com/orders/payOrder/${courseId}`, {
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
		const { balance, _id } = data

		if( balance === 0){
			Swal.fire({
				title: "Ordered Successfully",
				icon: "success",
				text: `Your order is now on process. You may check the details in the Order Page`
			})
			setQuantity('')
			if(localStorage.getItem("xffiliate") !== null)	
			{	
				console.log('trigger')
				const merchant_key = 'ajiHgX0dyY2644BYZUAUgPQ5G15dqeK9ZaMKUeIU4SvSWzAeyd'
				const productdetails = [{name, quantity}]
				const content = {

					firstname: user.firstName, 
					lastname: user.lastName, 
					email: user.email,	
					phone_number: user.mobileNo, 
					store_name: 'Shop Network Philippines',
					orders: productdetails,
					paymentmode : cardType,    
					transaction_id: _id
						
					};

			   const retry = 0;	
			   Xffiliate.productConversion(content, retry, merchant_key);
			   setAdded(true)		
			}	

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
	fetch(`https://immense-lake-17505.herokuapp.com/products/${ProdId}`, {
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
	/*const { balance, dateOrder, productId, productName, quantity, status, totalPrice, userId, userName, _v, _id } = data*/
	//console.log(data)

	setProdId(data[0].productId)
	setPayment(data[0].balance)
	setTotalAmount(data[0].totalPrice)
	setQuantity(data[0].quantity)
	setName(data[0].productName)
	setPrice(data[0].balance)
})

}, [courseId, name, price, quantity, payment, stock, ProdId, cardType])


	return(
		( added === true)?

		<Navigate to="/orders"/>

		:

		<Container className="mt-5">
		<Row>
		<Col lg={4} md={6} xl={3} xs={12} className="mx-auto text-center">
		<Card.Body   /*style={height}*/ className="d-flex flex-column  justify-content-between card-payorder">
			<Card.Title>
				{name}
			</Card.Title>
	
			<Card.Subtitle>
				Price:
			</Card.Subtitle>
			<Card.Text>
				Php {totalAmount}
			</Card.Text>
			

			<Card.Text>Ordered quantity: {quantity}</Card.Text>
			<Card.Text>Stock Available: {stock}</Card.Text>
			<Card.Text>Amount to be Paid: {price}</Card.Text>

			{/*<label for="card">Choose Card Type:</label>
			<select id="card" name="card" required value={cardType} onChange={e => setCardType(e.target.value)}>
 			<option value="null">--Select Card--</option>
 			<option value="Debit Card">Debit Card</option>
  			<option value="Credit Card">Credit Card</option>
  			<option value="Cash on Delivery" disabled>Cash on Delivery</option>
			</select>
			<Card.Text>You have chosen: {cardType}</Card.Text>*/}

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
		
			<Form>

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

			<Card.Text className="text-muted">We will never share your credentials to anyone. See Terms and Data Privacy</Card.Text>

			{/*<Form.Group controlId="cardNumber">
			<Form.Label>Enter Card Number:</Form.Label>
			<Form.Control type="text"  required value={cardNumber} onChange={e => setCardNumber(e.target.value)}/>
			</Form.Group>*/}

			</Form>
			<Card.Text className="mt-2">
				Total Amount to be paid: <span className="bg-danger text-white p-1 rounded">{payment}</span>
			</Card.Text>
		
			<Card.Text className="text-muted">Please check the details carefully before checking out.
				<span className="rounded-circle px-2" id="icon-warning">!</span>
			</Card.Text>
			{/*<Button className="background-play text-dark" onClick={()=> enroll(courseId)}>Confirm Order</Button>*/}
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