import { useState} from 'react'
import { Card, Button, Col, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";

export default function CourseCard ({courseProp}) {
	//before using props, destructure the object

	const {name, description, price, _id, source, stockAvailable} = courseProp

	const [image] = useState(source)

	const [style] = useState({

		width: "10rem",
		height: "10rem"
		
	})

	const [height] =useState({

		minHeight: "30rem",
		backgroundColor: "lightyellow",
	})

	return (
		<Col lg={4} md={6} xl={3} xs={12}>
		<Card  style={height} className="my-2">
		<Card.Body  className="d-flex flex-column  justify-content-between card-body">
			<Card.Title className="card-title">
			{name}
			</Card.Title>
			<Card.Text>
			<p><strong>Description: </strong>{description}</p> 
			</Card.Text>
			{/*<Card.Text>
			{description}
			</Card.Text>*/}
			<Card.Subtitle>
			Price: {price}
			</Card.Subtitle>
			<Card.Text>
			Stock Available: {stockAvailable}
			</Card.Text>
			<Image src={image} style={style} className="mx-auto d-block"/>

			<Row className="justify-content-center">
			<Col xs={6} >
			<Button  as= {Link} to={`/products/${_id}`} className="d-block my-2 bg-light text-dark card-btn" >Add to Cart</Button>
			</Col>

			<Col xs={6} >
			<Button  as= {Link} to={`/products/orderFull/${_id}`} className="d-block my-2 bg-light text-dark card-btn" >Buy Item</Button>
			</Col>

			{/*<Link to={name} className="mx-auto">Visit Seller Shop</Link>*/}
			<Link to='/products' className="mx-auto">Visit Seller Shop</Link>

			</Row>
			
		</Card.Body>
		</Card>
		</Col>
		
		)
}