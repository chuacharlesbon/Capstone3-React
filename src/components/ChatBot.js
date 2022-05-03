import { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import logo from './PinClipart.com_computer-images-clip-art_1651962.png'
import close from './closeicon.png'
import botchan from './botchan.jpg'
import Replies from './Replies'


export default function ChatBot(){

const [chatbody, SetChatBody] = useState('')

const [replies] = useState([])

const [content, setContent] = useState('')

const [display, setDisplay] = useState({
	display: "none"
})

/*const chats = replies.map(reply => {
	return (
		<Replies key={content} chatProp={reply}/>
		)
})*/

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

useEffect(()=> {
	SetChatBody(replies.map(reply => {
	return (
		<Replies key={reply.content} chatProp={reply}/>
		)
}))
}, [content, replies])



function sendChat(e){
	e.preventDefault()

	
	/*SetChatBody(replies.map(reply => {
	return (
		<Replies key={reply.content} chatProp={reply}/>
		)
}))*/
	if(content === "A"){
		replies.push({content : content, adminContent : "Hi there! Thank you for using ShopNetwork. To Get Started, please proceed to Register Section to Create an Account with Us!. After a successful registration, you can now login and have an effortless Shopping experience!"})
		setContent("")
	}
	else if (content === "B"){
		replies.push({content : content, adminContent : "Hi there! Thank you for using ShopNetwork. To Buy Products, first you need to create an account to register your details such as name and delivery address. You can proceed to Register section to create account. \nIf you already have an account, you can now proceed to Products section and order options will now be enabled to login users.\nAdd to cart option does not require purchase and transactions.\nBuy Item and Order options require purchase and transaction requirements like amount to be paid, bank details and user credentials."})
		setContent("")
	}
	else if (content === "C"){
		replies.push({content : content, adminContent: "Hi there! If you're having trouble with a transaction, First, you may confirm the transaction through the Order Section and select Transaction History. You can forward the concern to our Admin using the Contact Admin link at the footer with the message content of Transaction ID number and about the issue. A message ticket will be provided. Your concern may take 1-2 business days depending on the issue. Thank you very much! " })
		setContent("")
	}
	else if (content === "D"){
		replies.push({content : content, adminContent: "Hi there, To know the details of your Orders, you may find the details (such as Order/Transactions Number, Status, and Payment Info) at the ORDER section. You can forward any concern to our Admin using the Contact Admin link at the footer with the message content of Transaction ID number and about the issue. A message ticket will be provided. Your concern may take 1-2 business days depending on the issue. Thank you very much! " })
		setContent("")
	}
	else if (content === "E"){
		replies.push({content : content, adminContent: "Hi there, To ask for further Assistance, you may message us directly via Contact Admin link provided below the page footer. A message ticket will be provided. Your concern may take 1-2 business days depending on the issue. Thank you very much!" })
		setContent("")
	}
	else {
		replies.push({content : content, adminContent: "Hi there, it seems the keyword you entered is Invalid." })
		setContent("")
	}

	/*setContent("")*/
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
		{/*<Col className="text-center mx-auto">
		<p>Hi there! I am Bot-chan <Image src={botchan} className="botchan" title="Hi there!"/> </p>
		</Col>*/}

		<Container className="p-1 chatContent">

		<Image src={botchan} className="botchan" title="Hi there!"/>
		<span className="rounded-pill chatreply p-2 d-inline-block">How can I help you?</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(A)How to Get Started</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(B)How to Buy Products</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(C)Transaction Error</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(D)Order Concerns (Track, Status, Refund)</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(E)Need Assistance</span><br/>

		<Container className="px-0 mx-0">
		{chatbody}
		

		</Container>


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