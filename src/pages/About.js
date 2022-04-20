import {Row, Col, Card} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import Messaging from '../components/Messaging'

export default function About(){


	return(

	<>

	<Row className="align-items-end mt-2 mb-5 aboutback p-3">
	<Col xs={0} lg={4} xl={3} className="d-none d-lg-flex text-center justify-contents-center">
	<Image src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/199210599_4425407134144695_9189103713052183258_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFcrJ_3GBq4U8rp8COAinIQjTAUCp-maZiNMBQKn6ZpmJ02F9pyoJE6vLgjBM3Wo6rVty7QUZ55fBneORUxCZiv&_nc_ohc=XZTjvs1iy0YAX93BjM5&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT9xJLv49DCyD9GuH5VbVq3qv6NLpkhaV05NKQcO78ebFQ&oe=62872F9A" className="mx-auto text-center d-none d-lg-block image-profile rounded-circle img-fluid"/>
	</Col>

	<Col xs={12} md={6} lg={6} xl={7} className="bg-warning p-3 text-center text-lg-start mx-auto rounded" >
	<h4>Charles Bon Chua</h4>
	<p>Full Stack Web Developer</p>
	</Col>
	</Row>

	<Row className="mt-5 py-4 banner">
	<h3 className="text-center orderbanner">Background</h3>
	<Col xs={12} md={10} lg={8} xl={7} className="text-center mx-auto py-4">
	<Card.Text>
	Charles Bon Chua (born Filipino on May 12) studied Full-Stack Web Development at Zuitt Learning Institute Inc. He has also served as an On-Site Supervisor in JCW Inc. He was also known as an academic tutor in mathematics; assistant head chef and trainer in the food industry.
	</Card.Text>
	</Col>
	</Row>

	{/*<Row className="banner my-3 p-3">
	
	</Row>*/}

	<Row className="banner my-3 justify-contents-center p-3	align-items-center">
	<h3 className="text-center orderbanner mb-5">Trainings</h3>
	<Col xs={12} md={6} lg={3} className="p-1 mx-auto text-center ">
	<Image src="https://d3ojsfl21hfxhc.cloudfront.net/assets/zuitt/zuittlogo.png" className="mx-2 image-zuitt img-fluid"/>
	</Col>

	<Col xs={12} md={6} lg={7} className="p-1 mx-auto">
	<Card.Title> Program: </Card.Title>

	<Row>
	<Col xs={12} lg={6} >
	<h6>Full-Stack Course</h6>
	Front-End: HTML5, CSS3, Bootstrap, with Javascript<br/>
	<h6>Instructor: </h6><span>Mr. Tee Jae Calinao</span><br/>
	</Col>
	<Col  xs={12} lg={6} className="my-2">
	MERN: MongoDB, Express.js, React.js, Node.js<br/>
	<h6>Instructor: </h6><span>Ms. Christine Garcia</span>
	</Col>

	</Row>
	
	<Col className="my-2">
	<h6>Career Advisor: </h6><span>Ms. Iris Bugnon</span><br/>
	Batch 169 &#124; March 2022 - April 2022 
	</Col>

	</Col>
	</Row>


	<Messaging/>
	</>


		)
}