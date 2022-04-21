import { useState, useEffect} from 'react'
import { Form, Button} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import Swal from "sweetalert2"


export default function Register(){

//do not use null for initial state due to server schema type: null might contradict turn to type: string 

//set isnot a keyword, the state is destrcuturing

  	const [firstName, setFirstName] = useState('')
  	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password1, setPassword1] = useState('')
	const [password2, setPassword2] = useState('')
	const [ isActive, setIsActive] = useState(false)
	const [mobileNo, setMobileNo] = useState('')
	const [registered, setRegistered] = useState(false)
	const [ deliveryAdd, setDeliveryAdd] = useState('')

	console.log(email)
	console.log(password1)
	console.log(password2)

	function registerUser(e){
		e.preventDefault()

		fetch('https://immense-lake-17505.herokuapp.com/users/register', {
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

	}

	useEffect(() => {
		if((email !== "" && password1 !== "" ) && (password1 === password2)){
			
			setIsActive(true)
		} else {
			setIsActive(false)

		}

	}, [email, password1, password2 ])


	return(
		( registered === true)?

		<Navigate to="/login"/>
		:
		
		<Form id="form-register" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => registerUser(e)}>
			<h1 className="text-center">Registration Section</h1>
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
			<Form.Label>Password:</Form.Label>
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

		)
}

