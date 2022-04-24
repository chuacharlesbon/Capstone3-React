import {Link} from 'react-router-dom'
import { Card, Col, Row, Accordion, InputGroup, Button } from 'react-bootstrap'
import Swal from "sweetalert2"


export default function UserMesCard ({courseProp}) {
	//before using props, destructure the object

	const {sender, receiver, content, dateSent, _id, read, view} = courseProp
	//console.log(courseProp)

	function setMarkRead(_id){
		fetch(`https://immense-lake-17505.herokuapp.com/messages/markRead/${_id}`, {
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
		fetch(`https://immense-lake-17505.herokuapp.com/messages/delete/${_id}`, {
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
    	<Accordion.Header ><h6 className="my-auto">{sender} {read}:</h6></Accordion.Header>
    	<Accordion.Body className="banner">
     
    	<Card  className="my-1 ">
		<Card.Body  className="d-flex flex-column bg-white">

		{ (read === "Unread")?

		<Row className="my-2">
		<Col xs={10} md={6} lg={4} xl={3}>
		<InputGroup className="check-box my-auto">
    	<InputGroup.Checkbox aria-label="markread" className="" onChange={e => setMarkRead(_id)}/>
    	<span className="m-2">Mark as Read</span>
    	</InputGroup>
  		</Col>
  		</Row>


  		:

  		<p>Message already viewed: {view}</p>

  		}

			<Card.Title className="card-title">
			Sender: {sender}<br/>
			Receiver: {receiver}
			</Card.Title>
			
			<Card.Text>
			<p>
			Message View: {read}<br/>
			Message Ticket: {_id}<br/>
			Date Sent: {dateSent}<br/>
			Message: <br/>
			{content}
			</p>
			</Card.Text>

			{
			(sender === "ShopNetwork Inc")?
			<>
			<Link to="/" className="mx-2">Give Me a Tour!</Link>
			<Link to="/products/categoryFood" className="mx-2">Go to Shop</Link>
			</>
			
			:

			<Card.Text></Card.Text>
			}
		</Card.Body>
		</Card>

		<Button as={Link} to="/messages/newMessage" className="clear-message m-2  bg-warning text-dark">Reply</Button>
		<Button className=" m-2 bg-secondary text-dark" onClick={() => deleteItem(`${_id}`)}>Delete</Button>

    	</Accordion.Body>
  		</Accordion.Item>
  		</Accordion>
 </>
		
		


		
		)
}