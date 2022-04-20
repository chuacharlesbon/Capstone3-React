import { useContext } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function ClearMessage ({orderProp}) {
	//before using props, destructure the object

	const {user} = useContext(UserContext)
  		//console.log(user)

  	const username = user.userName

	return (
	
		<Row className="text-center mx-auto justify-content-center mt-5">
		<Col xs={12} md={4} xl={3} id="clear-order" className="text-center mx-auto justify-content-center m-2 p-2">
		<Container>
		<h6>Hi there {username}!</h6>
		<h3>It seems you have no personal messages here for a while.</h3>
		<Image src="https://i.pinimg.com/originals/76/ac/f2/76acf2613cd00198554521e2784f59ad.gif" className="mx-auto d-block image-clearorder"/>
		<Button as= {Link} to="/messages/newMessage" className="d-block my-2 clear-message text-dark bg-white" >Chat User</Button>
		<Button  as= {Link} to="/courses" className="d-block my-2 clear-message text-dark bg-white" >Go to Shops</Button>
		</Container>
		
		</Col>	
		</Row>	

		
		)
}