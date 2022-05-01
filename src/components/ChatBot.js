import { useState } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import logo from './PinClipart.com_computer-images-clip-art_1651962.png'
import close from './closeicon.png'
import botchan from './botchan.jpg'


export default function ChatBot(){

const [content, setContent] = useState('')

const [display, setDisplay] = useState({
	display: "none"
})

function activateChat(){
	if(display.display === "none"){
		setDisplay({
		display: "block"
	})
	}else{
		setDisplay({
		display: "none"
	})
	}
	

}

function sendChat(e){
	e.preventDefault()



	setContent("")
}

	return(
		<>

		<Container  className="actChat">
		<Image src={logo} className="logo" title="Let's Chat" onClick={() => activateChat()}/>
		<Row style={display} className="chatBox m-1 p-2 bg-light border border-warning">
		<Row className="pt-1">
		<Col>
		<p>SN ChatBox</p>
		</Col>
		<Col xs={1} className="text-center">
		<p className=""><Image src={close} className="closeicon" title="Close ChatBox" onClick={() => activateChat()}/></p>
		</Col>
		</Row>
		<hr/>
		<Col className="text-center mx-auto">
		<p>Hi there! I am Bot-chan <Image src={botchan} className="botchan" title="Hi there!"/> </p>
		</Col>

		<Container className="p-1 chatContent">

		<p><Image src={botchan} className="botchan" title="Hi there!"/>How can I help you?</p>



		</Container>
		<Form onSubmit={e => sendChat(e)}>
		<Form.Group controlId="content">
		<Form.Label>Message:</Form.Label>
		<Form.Control className="" as="textarea" placeholder="Hi Admin, (Your message)" required value={content} onChange={e => setContent(e.target.value)}/>
		</Form.Group>
		<Button type="submit" id="submitBtn" className="text-center mx-auto background-play text-dark mt-1">Send
		</Button>
		</Form>


		</Row>
		
		</Container>
	

		</>



		)
}