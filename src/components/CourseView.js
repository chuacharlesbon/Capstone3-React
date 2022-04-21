import {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import {useParams, Navigate} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function CourseView(){

const {user} = useContext(UserContext)
const [quantity, setQuantity] = useState(0)
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0)
const [image, setImage] = useState('')
const [stock, setStock] = useState('')
const [ added, setAdded] = useState(false)

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
	fetch(`https://immense-lake-17505.herokuapp.com/orders/${courseId}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		},
		body: JSON.stringify({
			quantity: quantity
		})
	})
	.then(res => res.json())
	.then(data => {
		const { quantity } = data

		if( data.quantity === quantity ){
			Swal.fire({
				title: "Added to Cart",
				icon: "success",
				text: `You have added the ${name} (${quantity} pcs) to your cart`
			})
			setQuantity('')
			setAdded(true)
		}else {
			Swal.fire({
				title: "Something went wrong",
				icon: "error",
				text: "Please contact Admin"
			})
		}
	})
}

useEffect(() => {
	console.log(courseId)
fetch(`https://immense-lake-17505.herokuapp.com/products/getSingleProduct/${courseId}`)
.then(res => res.json())
.then(data => {
	//console.log(data)

	setName(data.name)
	setDescription(data.description)
	setStock(data.stockAvailable)
	setPrice(data.price)
	setImage(data.source)
})

}, [courseId])

	return(
		(user.isAdmin === true)?

		<Navigate to="/orders/searchOrder"/>

		: ( added === true && user.id !== null)?

		<Navigate to="/courses"/>

		:  (user.id === null)?

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
			</Form>


			<Image src={image} style={style} className="mx-auto d-block"/>
			
			{ (quantity < 1 )?

			<Button className="bg-secondary text-white" disabled onClick={()=> enroll(courseId)}>Add to Cart</Button>	
			:
			<Button className="background-play text-dark" onClick={()=> enroll(courseId)}>Add to Cart</Button>
			}

		</Card.Body>
		</Col>
		</Row>
		</Container>
		)
}