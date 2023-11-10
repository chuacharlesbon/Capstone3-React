import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import UserContext from '../UserContext'
import AllReplies from './AllReplies'


export default function ChatReply(){

const {user} = useContext(UserContext)

const [replies, setReplies] = useState([])

const [receiver, setReceiver] = useState('')

const {chatId} = useParams()

const [content, setContent] = useState('')

useEffect(()=>{
	fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/chats/viewChat/${chatId}`,{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(chat => {
      if(chat.userId1 ===  user.id){
      	setReceiver(chat.userName2)
      }else{
      	setReceiver(chat.userName1)
      }

      setReplies(chat.replies.map(reply => {

      	return (

      		<AllReplies key={reply._id} chatProp={reply}/>
      		)
      }))
      

    })

}, [receiver, replies, chatId, user])

function sendReply(e){
	e.preventDefault()

	fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/chats/replyChat/${chatId}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`,

		},
		body: JSON.stringify({
			sender: user.id,
			receiver: receiver,
			contentA: content

		})
	})

	fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/chats/updateDateChat/${chatId}`, {
		method: "PUT",
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		}
	})
}



	return(
	<>

	<Row className="mt-2 pt-4 banner">
	<Col>
	<h3 className="text-center orderbanner">Chat with {receiver}</h3>
	</Col>
	</Row>

	<Container className="mt-5">
	<Row className="justify-content-center">
	<Col xs={12} md={8} lg={6} className="bg-light p-1">

	<div className="reply-body">
	{replies}
	</div>

	<Form onSubmit={e => sendReply(e)} className="mt-5">
	<Form.Group controlId="content">
	<Form.Label>Message:</Form.Label>
	<Form.Control className="" as="textarea" placeholder="Hi Admin, (Your message)" required value={content} onChange={e => setContent(e.target.value)}/>
	</Form.Group>
	<Button type="submit" id="submitBtn" className="text-center mx-auto background-play text-dark mt-1">Send
	</Button>
	</Form>

	</Col>
	</Row>

	


	</Container>


	</>
		)
}