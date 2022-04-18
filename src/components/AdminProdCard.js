import { useState, useEffect } from 'react'
import { Card, Button, Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";

export default function AdminProdCard ({courseProp}) {
	//before using props, destructure the object

	const {name, description, price, _id, source, stockAvailable, remark} = courseProp
	console.log(courseProp)

	const [image, setImage] = useState(source)

	const [height, setHeight] =useState({

		minHeight: "15rem",
		backgroundColor: "lightblue"
	})

	return (
		<Card  style={height} className="my-2">
		<Card.Body  className="d-flex flex-column "> {/*justify-content-between*/}
			<Card.Title className="card-title">
			{name}
			</Card.Title>
			<Row>

			<Col xs={12} md={4} lg={3} xl={3} >
			<Card.Text>
			<p>ProductId: {_id}</p>
			<p>Stock Available: {stockAvailable}</p>
			<p>Details: {remark}</p>
			</Card.Text>
			</Col>

			<Col  xs={12} md={8} lg={9} xl={9} >
			<Row className="justify-content-center">
			
			<Col  xs={8} md={4} lg={3} xl={2} >
			<Button  as= {Link} to={`//${_id}`} className="d-block my-2 btn-outline-warning text-light" >Modify</Button>
			</Col>

			<Col  xs={8} md={4} lg={3} xl={2} >
			<Button  as= {Link} to={`//${_id}`} className="d-block my-2 btn-outline-danger text-light" >Delete</Button>
			</Col>

			<Col  xs={8} md={4} lg={3} xl={2} >
			<Button  as= {Link} to={`//${_id}`} className="d-block my-2 btn-outline-success text-light" >Activate</Button>
			</Col>

			<Col xs={8} md={4} lg={3} xl={2} >
			<Button  as= {Link} to={`//${_id}`} className="d-block my-2 btn-outline-secondary text-light" >Archive</Button>
			</Col>

			</Row>
			</Col>

			</Row>
		</Card.Body>
		</Card>


		
		)
}