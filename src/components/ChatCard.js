import { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import { Card, Col, Row, Accordion, InputGroup, Button } from 'react-bootstrap'
import UserContext from '../UserContext'
import Swal from 'sweetalert2'

export default function ChatCard ({chatProp}) {
	//before using props, destructure the object

	const {user} = useContext(UserContext)

	const {userName1, userId1, userName2, userId2, content, lastChatDate, _id} = chatProp

	let count = chatProp.replies.length-1
	const {contentA} = chatProp.replies[count]
	//console.log(courseProp)
	/*const {sender, receiver, contentA, dateSent, view} = chatProp.replies[0]
	const {sender, receiver, contentA, dateSent, view} = chatProp.replies[1]
	const {sender, receiver, contentA, dateSent, view} = chatProp.replies[1]*/
	

	/*const lastReply = replies[replies.length-1]*/

	/*console.log(chatProp.replies[0])
		console.log(chatProp.replies[1])
			console.log(chatProp.replies[2])*/

	/*chatProp.replies.map(reply => {
		let count = 0
		const {sender, receiver, contentA, dateSent, view} = chatProp.replies[count]
		count++
	})*/

	

	/*const {sender, receiver, contentA, dateSent, view} = chatProp.replies[0]*/

	function setMarkRead(_id){
		fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/messages/markRead/${_id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			
			//console.log(data)
			Swal.fire({
					title: "Message set as Read.",
					icon: "info"
				})
		})
	}

	function deleteItem(_id){
		fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/messages/delete/${_id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			
			//console.log(data)
			Swal.fire({
					title: "Message has been deleted.",
					icon: "info"
				})
		})
	}


	return (
<>
		<Accordion className="my-1">
  		<Accordion.Item eventKey="0">
    	<Accordion.Header >

    	{	
    	(userId1 === user.id)?
    	<h6 className="my-auto">{userName2} {lastChatDate}</h6>
    	:
    	<h6 className="my-auto">{userName1} {lastChatDate}</h6>
    	}

    	</Accordion.Header>
    	<Accordion.Body className="banner">
     
    	<Card  className="my-1 ">
		<Card.Body  className="d-flex flex-column bg-white">

			<Card.Title className="card-title">
			Sender:
			{	
			(userId1 === user.id)?
			<h6 className="my-auto">{userName2} {lastChatDate}</h6>
			:
			<h6 className="my-auto">{userName1} {lastChatDate}</h6>
			}


			Receiver: {user.username}

			</Card.Title>
			
			<Card.Text>
			<p>
			Message Ticket: {_id}<br/>
			Date Sent: {lastChatDate}<br/>
			Last Message: <br/>
			{contentA}

			</p>
			</Card.Text>

		</Card.Body>
		</Card>

		<Button as={Link} to={`/chats/replyChat/${_id}`} className="clear-message m-2  bg-warning text-dark">Reply</Button>
		<Button className=" m-2 bg-secondary text-dark" onClick={() => deleteItem(`${_id}`)}>Delete</Button>

    	</Accordion.Body>
  		</Accordion.Item>
  		</Accordion>
 </>
		
		


		
		)
}