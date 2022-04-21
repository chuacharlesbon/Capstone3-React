import { useState, useEffect, useContext} from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import Swal from "sweetalert2"
import Advertisement from '../components/Advertisement'
import UserContext from '../UserContext'

export default function UserPvtMessage(){

	const {user} = useContext(UserContext)

	const [isActive, setIsActive] = useState(false)
	const [sender, setSender] = useState('')
	const [receiver, setReceiver] = useState('')
	const [content, setContent] = useState('')

	function sendPvtMessage(e){
		e.preventDefault()

		fetch('https://immense-lake-17505.herokuapp.com/messages/newMessage', {
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
			//console.log(res)
			return res.json()
		})
		.then(data => {
			//console.log(data)
			if(data.receiver === receiver){
			let ticket = data._id
			Swal.fire({
					title: `Message Sent to ${receiver}`,
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
		if(content !== "" && receiver !== "") {
			setIsActive(true)
		} else {
			setIsActive(false)

		}

	}, [ isActive, content, receiver ])

	return(
		(user.id !== null)?

		<>
		<Row className="mt-2 pt-4 banner">
			<Col>
			<h3 className="text-center orderbanner">Create a Message</h3>
			</Col>
			</Row>

		<Row className="justify-content-center">
		<Col xs={12} md={8} lg={6} xl={5}>

		<Form id="form-message" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => sendPvtMessage(e)}>

			<Form.Group controlId="sender">
			<Form.Label>Sender Email: {user.userName}</Form.Label>
			<Form.Control type="email" value={user.email} disabled required onChange={e => setSender(user.email)}/>
			</Form.Group>

			<Form.Group controlId="receiver">
			<Form.Label>Receiver Email:</Form.Label>
			<Form.Control type="text" placeholder="user@mail.com" required value={receiver} onChange={e => setReceiver(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="content">
			<Form.Label>Message:</Form.Label>
			<Form.Control as="textarea" placeholder={`Hi ${receiver}, (Your message)`} required value={content} onChange={e => setContent(e.target.value)}/>
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
		</Form>

		</Col>
		</Row>

		<Advertisement/>
		</>

		:

		<Navigate to="/messages"/>
		)
}
