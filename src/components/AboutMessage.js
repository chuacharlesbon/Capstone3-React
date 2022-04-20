//import { useState,useContext } from 'react'
import { Row, Col } from 'react-bootstrap'
import Image from "react-bootstrap/Image";

export default function MessageBanner(){

	return(

	<Row className="justify-content-center banner align-items-center p-3">
	<Col xs={12} md={6} lg={5} xl={4} className="mr-auto">
	<Image src="https://thumbs.dreamstime.com/b/smiling-guy-office-typing-his-laptop-happy-latin-salesman-sitting-his-home-office-desk-chatting-206706035.jpg" className="img-fluid image-message"/>
	</Col>

	<Col  xs={12} md={6} lg={5} xl={4}  className="ml-auto my-2">
	<h4>Feel Free to Connect!</h4>
	<p>Message Me Now!</p>
	</Col>


	</Row>


		)
}
