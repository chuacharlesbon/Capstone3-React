import { useState, useEffect, useContext } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import UserContext rom '../UserContext'

export default function UserChat(chatProp) {

	const {user} = useContext(UserContext)

	const [chatbody, SetChatBody] = useState('')

	const [replies] = useState([])

	const [content, setContent] = useState('')

	function sendChat(e){
		e.preventDefault()

	}


	return(

	<Row>

	<Col xs={12} md={10} lg={8} xl={6}>

	<Container>

	<h4>Chats</h4>

	{chatbody}

	<Form onSubmit={e => sendChat(e)}>
	<Form.Group controlId="content">
	<Form.Label>Message:</Form.Label>
	<Form.Control className="" as="textarea" placeholder="Hi, (Your message)" required value={content} onChange={e => setContent(e.target.value)}/>
	</Form.Group>
	<Button type="submit" id="submitBtn" className="text-center mx-auto background-play text-dark mt-1">Send
	</Button>
	</Form>

	</Container>

	</Col>

	</Row>

		)
}