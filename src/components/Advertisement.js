
import { Col, Row } from 'react-bootstrap'

import Image from "react-bootstrap/Image";

export default function Advertisement ({orderProp}) {
	//before using props, destructure the object

	

	return (
		<>

		<Row className="justify-content-center align-items-center bg-clear py-2">
			<h6 className="text-white text-center">This is an advertisement</h6>
			<Col xs={12} md={10} lg={8} xl={6} className="mx-auto text-center">
			<iframe
		      src={`https://www.youtube.com/embed/RuqI63N0bUU`}
		      frameBorder="0"
		      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		      allowFullScreen
		      title="Embedded youtube"
		      className="mx-auto text-center mt-3 video-card"
		    />
		    </Col>
		</Row>
	
		<Row className="text-center mx-auto justify-content-center mt-5 banner ads">

		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto justify-content-center m-2 p-2 d-none d-md-block">
		<p>This is an advertisement</p>
		<Image src="https://mavsocial-wpengine.netdna-ssl.com/wp-content/uploads/2014/12/Christmas-Social-Media-Campaign-What-You-Can-Learn-From-Starbucks.jpg" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>
		
		<Col xs={12}  md={6} lg={4}  className="text-center mx-auto justify-content-center m-2 p-2">
		<p>This is an advertisement</p>
		<Image src="https://webneel.com/daily/sites/default/files/images/daily/12-2018/2-christmas-print-ads-mcdonald.jpg" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>

		<Col xs={12} md={6} lg={4} className="text-center mx-auto justify-content-center m-2 p-2 d-md-none d-lg-block d-block">
		<p>This is an advertisement</p>
		<Image src="https://i.ytimg.com/vi/A_26jbcsnTE/maxresdefault.jpg" className="mx-auto d-block image-ads img-fluid"/>
		
		</Col>	
		</Row>	

		</>
		)
}