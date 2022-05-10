
import { Col, Row } from 'react-bootstrap'

import Image from "react-bootstrap/Image";

export default function Advertisement ({orderProp}) {
	//before using props, destructure the object

	

	return (
	
		<Row className="text-center mx-auto justify-content-center mt-5 banner ads">

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto justify-content-center m-2 p-2 d-none d-md-block">
		<p>This is an advertisement</p>
		<Image src="https://www.thepoortraveler.net/wp-content/uploads/2017/03/Batangas-Beach-Resorts.jpg" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>
		
		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto justify-content-center m-2 p-2">
		<p>This is an advertisement</p>
		<Image src="https://previews.123rf.com/images/avgust01/avgust011803/avgust01180300036/97033356-belle-banni%C3%A8re-web-avec-inscription-bonjour-l-%C3%A9t%C3%A9-vue-de-dessus-sur-la-d%C3%A9coration-d-%C3%A9t%C3%A9-avec-des-obj.jpg" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>

		<Col xs={12} md={6} lg={4} className="text-center mx-auto justify-content-center m-2 p-2 d-md-none d-lg-block d-block">
		<p>This is an advertisement</p>
		<Image src="https://www.philippinebeaches.org/wp-content/uploads/2017/07/Coron-Resorts-Rev.jpg" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>	
		</Row>	

		)
}