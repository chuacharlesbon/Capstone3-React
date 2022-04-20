import { Col, Row } from 'react-bootstrap'
import Image from "react-bootstrap/Image";

export default function Adminbanner() {

	return (
	
		<Row className="text-center mx-auto justify-content-center my-2 py-2">
		
		<Col xs={12} className="text-center mx-auto justify-content-center  px-2 bg-light">
		<p>This is an advertisement</p>
		<Image src="https://media.istockphoto.com/photos/wood-desk-table-with-smartphone-with-blank-mock-up-screen-laptop-and-picture-id1151732761?k=20&m=1151732761&s=170667a&w=0&h=2isar8Xh3w3IMva3GwpFRgCiEQr9Q-AnRkIacUOIyMU=" className="mx-auto d-block img-fluid image-ads pb-2"/>
		
		</Col>	
		</Row>	

		
		)
}