
import { Card, Col, Row, Accordion, InputGroup } from 'react-bootstrap'

export default function AdminMesCard ({courseProp}) {
	//before using props, destructure the object

	const {sender, receiver, content, dateSent, _id, read, view} = courseProp
	//console.log(courseProp)

	function setMarkRead(_id){
		fetch(`http://localhost:4000/messages/markRead/${_id}`, {
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
			
			console.log(data)
		})
	}



	return (
<>
		<Accordion className="my-1 bg-info">
  		<Accordion.Item eventKey="0">
    	<Accordion.Header ><h6 className="my-auto">{sender} {read}:</h6></Accordion.Header>
    	<Accordion.Body>
     
    	<Card  className="my-1 ">
		<Card.Body  className="d-flex flex-column admin-prodcard">

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
			
		</Card.Body>
		</Card>

    	</Accordion.Body>
  		</Accordion.Item>
  		</Accordion>
 </>
		
		


		
		)
}