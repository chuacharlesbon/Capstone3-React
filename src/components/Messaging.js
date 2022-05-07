import { useState, useEffect, useContext} from 'react'
import { Form, Button, Row, Col, Nav} from 'react-bootstrap'
import Swal from "sweetalert2"
import Advertisement from '../components/Advertisement'
import AboutMessage from '../components/AboutMessage'
import UserContext from '../UserContext'

export default function PublicMessage(){

	const {user} = useContext(UserContext)

	const userId = user.id

	const [isActive, setIsActive] = useState(false)
	const [sender, setSender] = useState('')
	const [receiver, setReceiver] = useState('Admin')
	const [content, setContent] = useState('')

	function sendPMessage(e){
		e.preventDefault()

		fetch('https://immense-lake-17505.herokuapp.com/messages', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				sender: sender,
				receiver: receiver,
				content: content
			})
		})
		.then(res => {
	
			return res.json()
		})
		.then(data => {
			//console.log(data)
			if(data.receiver === receiver){
			let ticket = data._id
			Swal.fire({
					title: "Message Sent to Admin",
					icon: "success",
					text: `Your Message Ticket is ${ticket}`,
					showClass: {
    						popup: 'animate__animated animate__fadeInDown'
 	 				},
  							hideClass: {
    						popup: 'animate__animated animate__fadeOutUp'
  					}
				})

			setSender('')
			setReceiver('')
			setContent('')
		}else {
			Swal.fire({
					title: "Something went wrong",
					icon: "error",
					//text: "Please check your credentials"
				})
		}
		})
	}

	useEffect(() => {
		if(content !== "" && sender !== "") {
			setIsActive(true)
		} else {
			setIsActive(false)

		}

	}, [ isActive, content, sender ])

	return(
		<>
		<AboutMessage/>

		<Row className="justify-content-center message-section">
		<Col xs={12} md={8} lg={6} xl={5}>

		<Form className="border border-secondary p-3 my-3 mx-auto bg-info" onSubmit={e => sendPMessage(e)}>
			
			{ (userId !== null)?

			<Form.Group controlId="sender">
			<Form.Label>Sender Email: {user.userName}</Form.Label>
			<Form.Control type="email" placeholder={user.email} required onChange={e => setSender(user.email)}/>
			</Form.Group>

			:

			<Form.Group controlId="sender">
			<Form.Label>Your Name or Email:</Form.Label>
			<Form.Control type="text" placeholder="shopnetwork@mail.com | ShopNetwork Inc" required value={sender} onChange={e => setSender(e.target.value)}/>
			<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
			</Form.Text>
			</Form.Group>

			}

			<Form.Group controlId="receiver">
			<Form.Label>My Email : charlessbonnchua@gmail.com </Form.Label>
			<Form.Control type="text"  disabled value="Admin" onChange={e => setReceiver("Admin")}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="content">
			<Form.Label>Message:</Form.Label>
			<Form.Control as="textarea" placeholder="Hi Charles, (Your message)" required value={content} onChange={e => setContent(e.target.value)}/>
			</Form.Group>

{/*rendering submit button based on isActive*/}
			<Form.Group className="text-center d-block">
			{ isActive ? 
				<Button type="submit" id="submitBtn" className="my-3 text-center mx-auto background-play text-dark">Send Message
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center mx-auto" disabled>Send Message
				</Button>
			}
			</Form.Group>

			<Nav.Link href="mailto:charlessbonnchua@gmail.com?cc=chuacharlesbon@gmail.com&subject=Client%20Inquiry" target="_top">Click to send via Gmail</Nav.Link>
		</Form>

		</Col>
		</Row>

		<Advertisement/>
		</>

		)
}
