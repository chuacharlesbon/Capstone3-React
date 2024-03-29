import { useState, useEffect, useContext } from 'react'
import { Navigate, Link } from 'react-router-dom'
import { Form, Button, Col, Container} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import Swal from "sweetalert2"
import UserContext from '../UserContext'
import Advertisement from '../components/Advertisement'

export default function Login(props){

//allows us to consume the user coontext object and its properties to use for user validation

	const {user, setUser} = useContext(UserContext)


//do not use null for initial state due to server schema type: null might contradict turn to type: string 

//set isnot a keyword, the state is destrcuturing

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [ isActive, setIsActive] = useState(true)
	const [message] = useState(' We will never share your credentials with anyone else.')
	const [message1, setMessage1] = useState('')

	const [style, setStyle] = useState({
		color: "red"
	})

	//console.log(email)
	//console.log(password)


	function LoginUser(e){
		e.preventDefault()

		fetch('https://nomadic-autumn-404208.uc.r.appspot.com/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				password: password
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

//set email of authenticated user to local storage 
//localStorage.setItem("key", value)
		//localStorage.setItem("email", email)

//to access user information, it can be done using localStorrage, this is necessary to update the user state which will help update the App component and render it to avoid refreshing the page upon user login and logout

//when state change components are re-rendered and the Appnavabr component will be updated based on the user credentials
		/*setUser({
			email: localStorage.getItem('email')
		})*/

		setEmail('')
		setPassword('')

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

		setStyle({
			color: "red"
		})
		//alert("You are now login")
	}

	useEffect(() => {
		if((email !== "" && password !== "" ) && (password.length > 5)){
			setIsActive(true)
			setMessage1('Password is being authenticated...')
			setStyle({
				color: "green"
			})
		} else {
			setIsActive(false)
			setMessage1('Password must be entered correctly')
			setStyle({
			color: "red"
		})
		}
	}, [email, password])

	return(
		
		(user.isAdmin !== true && user.id !== null && user.id !== undefined)?
		<>
		<Navigate to="/products/categoryFood"/>
		</>
		: (user.isAdmin === true && user.id !== null )?

		<Navigate to="/"/>

		: (user.id === undefined)?

		<>
		<Container className="d-flex px-1 bg-light justify-content-center align-items-center text-center mt-5">
		

		<Col lg={5} className="d-none d-lg-block mx-auto">

		<Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBzaG9wcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" /*style={style}*/ className="mx-auto text-center d-none d-lg-block image-login img-fluid"/>
		<h4>We are excited to welcome you!</h4>
		<p>Create account with us!<Link to="/register" className="mx-2">Click Here</Link></p>


		</Col>

		<Col lg={5} className="mx-auto d-block text-center">
		<Form  id="form-login" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => LoginUser(e)}>
			<h1 className="text-center">Log In</h1><hr/>
			<Form.Group controlId="userEmail">
			<Form.Label><h5>Email Address:</h5></Form.Label>
			<Form.Text className="text-muted d-block">Please use registered email.
			</Form.Text>
			<Form.Control type="email" placeholder="Enter your email here" autocomplete required value={email} onChange={e => setEmail(e.target.value)}/>
			</Form.Group>

			<Form.Group className="my-2" controlId="password">
			<Form.Label><h5>Enter your Password:</h5></Form.Label>
			<Form.Text className="d-block" style={style}>{message1}
			</Form.Text>
			<Form.Control type="password" placeholder="Input your password here" required value={password} onChange={e => setPassword(e.target.value)}/>
			</Form.Group>

			<Form.Text className="text-muted d-block">{message}
			</Form.Text>
			<input type="checkbox" className="mx-2" value="keeplogin"/>Keep me logged in
			

			<Form.Group className="text-center d-block">
			{ isActive ? 
				<Button variant="success" type="submit" id="submitBtn" className="my-3 text-center row justify-contents-center">LOGIN
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center row justify-contents-center" disabled>LOGIN
				</Button>
			}
			</Form.Group>
		</Form>
		</Col>
		
		</Container>

		</>

		:

		<>
		<Container className="d-flex px-1 bg-light justify-content-center align-items-center text-center mt-5 loginbody">
		

		<Col lg={5} className="d-none d-lg-block mx-auto">

		<Image src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBzaG9wcGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80" /*style={style}*/ className="mx-auto text-center d-none d-lg-block image-login img-fluid"/>
		<h4>We are excited to welcome you!</h4>
		<p>Create account with us!<Link to="/register" className="mx-2">Click Here</Link></p>


		</Col>

		<Col lg={5} className="mx-auto d-block text-center">
		<Form  id="form-login" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => LoginUser(e)}>
			<h1 className="text-center">Log In</h1><hr/>
			<Form.Group controlId="userEmail">
			<Form.Label><h5>Email Address:</h5></Form.Label>
			<Form.Text className="text-muted d-block">Please use registered email.
			</Form.Text>
			<Form.Control type="email" placeholder="Enter your email here" required value={email} onChange={e => setEmail(e.target.value)}/>
			</Form.Group>

			<Form.Group className="my-2" controlId="password">
			<Form.Label><h5>Enter your Password:</h5></Form.Label>
			<Form.Text className="d-block" style={style}>{message1}
			</Form.Text>
			<Form.Control type="password" placeholder="Input your password here" required value={password} onChange={e => setPassword(e.target.value)}/>
			</Form.Group>

			<Form.Text className="text-muted d-block">{message}
			</Form.Text>
			<input type="checkbox" className="mx-2" value="keeplogin"/>Keep me logged in
			

			<Form.Group className="text-center d-block">
			{ isActive ? 
				<Button variant="success" type="submit" id="submitBtn" className="my-3 text-center row justify-contents-center">LOGIN
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center row justify-contents-center" disabled>LOGIN
				</Button>
			}
			</Form.Group>
		</Form>
		</Col>
		
		</Container>
		<Advertisement/>

		</>

		)
}
