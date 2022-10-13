import React, { useState, useEffect, useContext} from 'react'
import { Form, Button, Row, Col} from 'react-bootstrap'
import {Helmet} from "react-helmet";
import Swal from "sweetalert2"
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import EmojiPicker from 'emoji-picker-react';
import { useCaretPosition } from 'react-use-caret-position';
import Advertisement from '../components/Advertisement'
import MessageBanner from '../components/MessageBanner'
import UserContext from '../UserContext'

export default function PublicMessage(){

	const {user} = useContext(UserContext)

	const userId = user.id

	const [isActive, setIsActive] = useState(false)
	const [sender, setSender] = useState('')
	const [receiver, setReceiver] = useState('Admin')
	const [content, setContent] = useState('')

	const Newtext = content;

	const { ref: inputRef, updateCaret, start } = useCaretPosition();

	const handleChange = e => {
	    const inputToUpperCase = content.slice(0,start)+e.emoji+content.slice(start);
	    setContent(inputToUpperCase);
	  };

	console.log(start)

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
			//console.log(res)
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
		if(content !== "") {
			setIsActive(true)
		} else {
			setIsActive(false)

		}

	}, [ isActive, content ])

	return(
		<>

		<Helmet>
			<meta
			  name="title"
			  content="ShopNetwork Inc. | Messages" />
			<meta
			  name="description"
			  content="Feel Free to Contact Us. Message us today!"
			/>
		  <meta
		    property="og:type"
		    content="website"
		  />
		  <meta
		    property="og:title"
		    content="ShopNetwork PH | Messages"
		  />
		  <meta
		    property="og:image"
		    content="https://thumbs.dreamstime.com/b/smiling-guy-office-typing-his-laptop-happy-latin-salesman-sitting-his-home-office-desk-chatting-206706035.jpg"
		  />
		  <meta
		    property="og:description"
		    content="Feel Free to Contact Us. Message us today!"
		  />
		  <meta
		    property="og:url"
		    content="https://react-shopnetwork-chua.vercel.app/messages"
		  />
		</Helmet>

		<MessageBanner/>

		<Row className="justify-content-center public-message">
		<Col xs={12} md={8} lg={6} xl={5}>

		<Form id="form-message" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => sendPMessage(e)}>
			
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
			<Form.Label>Receiver Name:</Form.Label>
			<Form.Control type="text" disabled value="Admin" onChange={e => setReceiver("Admin")}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="content">
			<Form.Label>Message:</Form.Label>
			<Form.Control as="textarea" ref={inputRef} placeholder="Hi Admin, (Your message)" required value={content} onChange={e => setContent(e.target.value)} onClick={() => updateCaret()} />
			</Form.Group>

			<div>
			  <EmojiPicker onEmojiClick={(e) => handleChange(e)} />
			</div>

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

		<div className='py-4 px-2 bg-light'>
		<ReactQuill
		  theme='snow'
		  value={content}
		  onChange={setContent}
		  style={{minHeight: '300px'}}
		/>
		</div>

		</Col>
		</Row>


		<Advertisement/>
		</>

		)
}
