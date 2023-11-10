import {useState, useEffect, useContext} from 'react'
import {Container, Row, Col, Card, Button, Form} from 'react-bootstrap'
import {useParams, Navigate, useLocation} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function CourseView(){

const {user, setUser} = useContext(UserContext)
const [quantity, setQuantity] = useState(0)
const [name, setName] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState(0)
const [image, setImage] = useState('')
const [stock, setStock] = useState('')
const [ added, setAdded] = useState(false)

const { search } = useLocation();
const query = new URLSearchParams(search);
const xffiliate = query.get('xffiliate');
localStorage.setItem('xffiliate', xffiliate);

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

const retrieveUserDetails = (token) => {
	fetch('https://nomadic-autumn-404208.uc.r.appspot.com/users/details', {
		method: "POST",
		headers: {
			Authorization: `Bearer ${token}`
		}
	})
	.then(res => (res.json())
	.then(data => {
		//console.log(data)

		/*if(data.isAdmin === true){*/
		setUser({
			id: data._id,
			isAdmin: data.isAdmin,
			userName: data.firstName + " " + data.lastName,
			firstName: data.firstName,
			lastName: data.lastName,
			email: data.email,
			mobileNo: data.mobileNo
		})
		/*} else {
			setUser({
			id: data._id,
			isAdmin: data.isAdmin,
			userName: data.firstName + " " + data.lastName,
			email: data.email
			})
		}*/



	}))
}

const enroll = (courseId) => {
	fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/orders/${courseId}`, {
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

		if( data.quantity === quantity && user.id !== undefined){
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
	//console.log(courseId)
fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/products/getSingleProduct/${courseId}`)
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

  	const [firstName, setFirstName] = useState('')
  	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [ isActive, setIsActive] = useState(false)
	const [mobileNo, setMobileNo] = useState('')
	const [registered, setRegistered] = useState(false)
	const [ deliveryAdd, setDeliveryAdd] = useState('')

	//console.log(email)
	//console.log(password1)
	//console.log(password2)

	function registerUser(e){
		e.preventDefault()

		fetch('https://nomadic-autumn-404208.uc.r.appspot.com/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password2,
				mobileNo: mobileNo,
				deliveryAdd: deliveryAdd
			})
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			//console.log(data)


//access is the properties of console.log(data)
			if( data.firstName === firstName ){
				Swal.fire({
					title: "Registration Successful",
					icon: "success",
					text: `Welcome to ShopNetwork ${firstName}! You will be redirected to the Log In page`,
					showClass: {
    						popup: 'animate__animated animate__fadeInDown'
 	 				},
  							hideClass: {
    						popup: 'animate__animated animate__fadeOutUp'
  					}
				})

				setRegistered(true)
				setFirstName('')
				setLastName('')
				setMobileNo('')
				setEmail('')
				setPassword1('')
				setPassword2('')
				setDeliveryAdd('')

			}else {
				Swal.fire({
					title: "Authentication",
					icon: "error",
					text: "Please check your credentials"
				})
			}
		})
		fetch('https://nomadic-autumn-404208.uc.r.appspot.com/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				sender: "ShopNetwork Inc",
				receiver: email,
				content: `Hi ${firstName} ${lastName}, Welcome to ShopNetwork! Thank you for accomplishing the Registration. You may click the link to let us give you a tour about the platform, or you may proceed to Products section to Get Started. `
			})
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			if(data.receiver === email){
				console.log("User Welcome message sent.")
						fetch('https://nomadic-autumn-404208.uc.r.appspot.com/users/login', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							body: JSON.stringify({
								email: email,
								password: password1
							})
						})
						.then(res => res.json())
						.then(data => {
							//console.log(data)
				//access is the properties of console.log(data)
							if(typeof data.accessToken !== "undefined"){
								localStorage.setItem('token', data.accessToken)
								retrieveUserDetails(data.accessToken)
								Swal.fire({
									title: "Login Successful",
									icon: "success",
									text: "Welcome to ShopNetwork!"
								})
							}else {
								Swal.fire({
									title: "Authentication",
									icon: "error",
									text: "Please check your credentials"
								})
							}
						})
			}else {
				console.log("Something went wrong")
			}
		})

	}

	useEffect(() => {
		if((email !== "" && password1 !== "" && password1.length > 6) && (password1 === password2)){
			
			setIsActive(true)
		} else {
			setIsActive(false)

		}

	}, [email, password1, password2 ])

	return(
		(user.isAdmin === true)?

		<Navigate to="/orders/searchOrder"/>

		:

		(added === true)?

		<Navigate to="/orders/getCart"/>

		:

		<Container className="mt-5">
		<Row>

		{

		(user.id === null)?
		<Col lg={6} md={6} xl={7} xs={12} className="mx-auto text-center">

				<Form id="form-register" className="border border-secondary p-3 mx-auto" onSubmit={e => registerUser(e)}>
					<h3 className="text-center">Customer Registration</h3>
					<Form.Group controlId="firstName">
					<Form.Label>First Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter your First Name here" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
					<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
					</Form.Text>
					</Form.Group>

					<Form.Group controlId="lastName">
					<Form.Label>Last Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter your Last Name here" required value={lastName} onChange={e => setLastName(e.target.value)}/>
					<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
					</Form.Text>
					</Form.Group>

					<Form.Group controlId="mobileNo">
					<Form.Label>Mobile Number</Form.Label>
					<Form.Control type="text" placeholder="+639-xxxxxxxxx {+6391234567890}" required value={mobileNo} onChange={e => setMobileNo(e.target.value)}/>
					<Form.Text className="text-muted"> You can use your landline number
					</Form.Text>
					</Form.Group>

					<Form.Group controlId="deliveryAdd">
					<Form.Label>Delivery Address:</Form.Label>
					<Form.Control type="text" placeholder="Enter your delivery address here" required value={deliveryAdd} onChange={e => setDeliveryAdd(e.target.value)}/>
					<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
					</Form.Text>
					</Form.Group>

					<Form.Group controlId="userEmail">
					<Form.Label>Email Address</Form.Label>
					<Form.Control type="email" placeholder="Enter your email here" required value={email} onChange={e => setEmail(e.target.value)}/>
					<Form.Text className="text-muted"> We will never share your email with anyone else.
					</Form.Text>
					</Form.Group>

					{/*<Form.Group controlId="password1">
					<Form.Label>Password:</Form.Label>
					<Form.Text style={weak} className="bg-danger text-white py-1 px-2 mx-2 rounded">Weak</Form.Text>
					<Form.Text style={moderate} className="bg-warning text-white py-1 px-2 mx-2 rounded">Moderate</Form.Text>
					<Form.Text style={strong} className="bg-success text-white py-1 px-2 mx-2 rounded">Strong</Form.Text>
					<Form.Control type="password" placeholder="Input your password here" required value={password1} onChange={e => setPassword1(e.target.value)}/>
					</Form.Group>*/}

					<Form.Group controlId="password1">
					<Form.Label>Password: </Form.Label>
					{ (password1 === '')?

					<Form.Text className="bg-secondary text-white py-1 px-2 mx-2 rounded">Empty</Form.Text>

					: (password1.length < 4)  ?

					<Form.Text className="bg-danger text-white py-1 px-2 mx-2 rounded">Weak</Form.Text>

					: (password1.length < 7)  ?

					<Form.Text className="bg-warning text-white py-1 px-2 mx-2 rounded">Moderate</Form.Text>

					: (password1.length > 6 )  ?

					<Form.Text  className="bg-success text-white py-1 px-2 mx-2 rounded">Strong</Form.Text>

					:

					<Form.Text className=" text-white py-1 px-2 mx-2 rounded"></Form.Text>

					}
					<Form.Control type="password" placeholder="Input your password here" required value={password1} onChange={e => setPassword1(e.target.value)}/>
					</Form.Group>

					<Form.Text>Must be at least 8 characters.</Form.Text>

					<Form.Group  controlId="password2">
					<Form.Label>Confirm Password</Form.Label>
					< Form.Control type="password" placeholder="Input your password again" required  value={password2} onChange={e => setPassword2(e.target.value)}/>
					</Form.Group>

		{/*rendering submit button based on isActive*/}
					<Form.Group className="text-center d-block">
					{ isActive ? 
						<Button type="submit" id="submitBtn" className="my-3 text-center mx-auto background-play text-dark">Submit
						</Button>
						:
						<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center mx-auto" disabled>Submit
						</Button>
					}
					</Form.Group>
				</Form>

		</Col>
		:
		<></>
		}

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


			<Image src={image} style={style} className="mx-auto my-4 d-block"/>
			
			{ (quantity < 1 || user.id === null)?

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