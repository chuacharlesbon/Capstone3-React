
import { Col, Row } from 'react-bootstrap'

import Image from "react-bootstrap/Image";

export default function Advertisement ({orderProp}) {
	//before using props, destructure the object

	

	return (
	
		<Row className="text-center mx-auto justify-content-center mt-5 banner">
		
		<Col xs={12}/* md={6}*/  className="text-center mx-auto justify-content-center m-2 p-2">
		<p>This is an advertisement</p>
		<Image src="https://jobayan3.s3-ap-southeast-1.amazonaws.com/upload/99e6602933fd3c250cecea2a758a868d1.png" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>	
		</Row>	

		)
}