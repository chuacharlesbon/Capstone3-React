
import { Col, Container, Row } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function Advertisement ({orderProp}) {
	//before using props, destructure the object

	

	return (
	
		<Row className="text-center mx-auto justify-content-center mt-5">
		
		{/*<Col xs={12} md={6} className="text-center mx-auto justify-content-center m-2 p-2 bg-light">
		<p>This is an advertisement</p>
		<Image src="http://images.gmanews.tv/webpics/2017/07/Metrobank_logo_2017_07_21_11_35_10_0.jpg" className="mx-auto d-block image-ads img-fluid"/>
		</Col>*/}
		<Col xs={12}/* md={6}*/  className="text-center mx-auto justify-content-center m-2 p-2 bg-light">
		<p>This is an advertisement</p>
		<Image src="https://jobayan3.s3-ap-southeast-1.amazonaws.com/upload/99e6602933fd3c250cecea2a758a868d1.png" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>	
		</Row>	

		
		)
}