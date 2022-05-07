import { useState } from 'react'
import {Row, Col, Card, Container, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import {Link} from 'react-router-dom'
import Messaging from '../components/Messaging'
import backlogo from '../components/backlogo.png'
import zuittCert from '../components/zuiit-completion-cert.jpeg'
import clogo from '../components/c-logo.jpg'
import download from '../components/download-icon.png'
import close from '../components/closeicon.png'
import settings from '../components/settingsicon.png'

export default function About2(){

	const [isActive, setIsActive] = useState({
		display: "none"
	})

	function activeItem(){
		if(isActive.display === "none"){
			setIsActive({
				display: "block"
			})
		}else{
		setIsActive({
		display: "none"
		})
		}
	}


	return(

	
	<div className="aboutMe">
	<Row className="align-items-end mt-2 mb-5 resize-row p-3 mx-auto aboutback">
	<Image src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/199210599_4425407134144695_9189103713052183258_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFcrJ_3GBq4U8rp8COAinIQjTAUCp-maZiNMBQKn6ZpmJ02F9pyoJE6vLgjBM3Wo6rVty7QUZ55fBneORUxCZiv&_nc_ohc=XZTjvs1iy0YAX93BjM5&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT9xJLv49DCyD9GuH5VbVq3qv6NLpkhaV05NKQcO78ebFQ&oe=62872F9A" className="mx-auto text-center d-block d-lg-none image-profile2 rounded-circle img-fluid" id="image-profile2"/>
	
	<Col xs={0} lg={4} xl={3} className="d-none d-lg-flex text-center justify-contents-center">
	<Image src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t1.6435-9/199210599_4425407134144695_9189103713052183258_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFcrJ_3GBq4U8rp8COAinIQjTAUCp-maZiNMBQKn6ZpmJ02F9pyoJE6vLgjBM3Wo6rVty7QUZ55fBneORUxCZiv&_nc_ohc=XZTjvs1iy0YAX93BjM5&_nc_ht=scontent.fmnl17-1.fna&oh=00_AT9xJLv49DCyD9GuH5VbVq3qv6NLpkhaV05NKQcO78ebFQ&oe=62872F9A" className="mx-auto text-center d-none d-lg-block image-profile rounded-circle img-fluid"/>
	</Col>

	<Col xs={12} md={6} lg={6} xl={7} className="bg-blue p-3 text-center text-lg-start mx-auto rounded" >
	<h4 className="newfont">Charles Bon Chua (查尔斯 蔡)</h4>
	<p>Full Stack Web Developer</p>
	<hr/>
	<p>Designing &diams; Web Developer &diams; Programming &diams; Supervisor &diams; Writing</p>
	</Col>
	
	</Row>

	<Navbar bg="info" expand="lg">
	  <Container>
	  	{/*<Image src={clogo} as={Link} href="file:///C:/Users/USER/Documents/chua-charles/b169/capstone1-chua/index.html" className="clogo mx-2 rounded-circle"/>*/}
	    {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
	    <Navbar.Brand href="https://www.facebook.com/C-Trading-Small-Caps-Retail-Investors-107742148223757" target="_blank" className="cbrand p-1 align-items-center d-flex">
	          <img
	            src={clogo}
	            className="d-inline-block align-top clogo rounded-circle img-fluid"
	            alt="C Logo"
	          />
	          <span className="mx-2">Software Engineer</span>
	        </Navbar.Brand>
	    <Navbar.Toggle aria-controls="basic-navbar-nav" />
	    <Navbar.Collapse id="basic-navbar-nav">
	      <Nav className="me-auto d-flex">
	        <Nav.Link href="https://chuacharlesbon.github.io/portfolio-chua/#project" target="_blank" className="profile-nav">My Projects</Nav.Link>
	        <Nav.Link href="https://www.linkedin.com/in/charles-chua-12116122a/" target="_blank" className="profile-nav">My Skills</Nav.Link>
	         <Nav.Link  onClick={() => activeItem()} target="_blank" className="profile-nav">More About Me</Nav.Link>
	        <NavDropdown title="Social" id="basic-nav-dropdown">
	          <NavDropdown.Item href="https://gitlab.com/chuacharlesbon"  target="_blank" className="profile-nav">GitLab</NavDropdown.Item>
	          <NavDropdown.Item href="https://github.com/chuacharlesbon"  target="_blank" className="profile-nav">GitHub</NavDropdown.Item>
	          <NavDropdown.Item href="https://www.linkedin.com/in/charles-chua-12116122a/"  target="_blank" className="profile-nav">LinkedIn</NavDropdown.Item>
	          <NavDropdown.Divider />
	          <NavDropdown.Item href="https://www.facebook.com/charles.chua.549"  target="_blank" className="profile-nav">Facebook</NavDropdown.Item>
	        </NavDropdown>
	      </Nav>
	    </Navbar.Collapse>
	  </Container>
	</Navbar>

	<Container style={isActive}>
	<Col xs={3} md={2} xl={1} className="bg-secondary mt-2 rounded closeButton text-center" onClick={() => activeItem()}>
	<Image src={close} className="closeicon m-2 " title="Close ChatBox" />
	<span className="">Close</span>
	</Col>



	<Row className="align-items-center justify-content-center mt-5 mx-1 about-me-row">

	<Col lg={4} md={6} xs={12} className="cards-about cards-1 bg-info my-2 text-center">
	
	<iframe
      src={`https://www.youtube.com/embed/CejkspNOJ8Y`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="mx-auto text-center mt-3 video-card"
    />
    <h4 className="newfont text-danger bg-pink mt-3 p-2 aboutlist">My Programming Languages</h4>
	</Col>

	<Col lg={4} md={6} xs={12} className="cards-about cards-2 bg-info my-2 text-center">
	
	<h4 className="newfont text-danger bg-pink2 mt-2 mb-5 py-2"> &#10038; Facts About Me &#10038;</h4>
	<p className="newfont text-danger bg-pink m-0 rounded aboutlist mb-1 mt-3">Work Experience</p>
	<p className="newfont text-danger bg-pink m-0 rounded aboutlist mb-1">Education</p>
	<p className="newfont text-danger bg-pink m-0 rounded aboutlist mb-1">Awards</p>
	<p className="newfont text-danger bg-pink m-0 rounded aboutlist mb-1">Hobbies</p>
	<p className="newfont text-danger bg-pink m-0 rounded aboutlist mb-1">Fun Facts</p>

	<div className=' d-flex justify-content-end'>
	<div className="bg-white game-size p-1 mt-4 rounded">
	<Image src={download} className="closeicon mx-1" title="Download Game"/>
	<Image src={settings} className="closeicon mx-1" title="Game Settings"/>
	<Image src={close} className="closeicon mx-1" title="Close Game" onClick={() => activeItem()} />
	</div>
	</div>

	</Col>

	<Col lg={4} md={6} xs={12} className="cards-about cards-3 bg-info my-2 mx-auto text-center">
	<iframe
      src={`https://www.youtube.com/embed/JIVpTLEV2Ac`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
      className="mx-auto text-center mt-3 video-card"
    />
    <h4 className="newfont text-danger bg-pink mt-3 p-2 aboutlist">A Sneek Peek of Me!</h4>
	</Col>

	</Row>
	</Container>


	<div className="d-block d-lg-flex align-items-center my-5 bg-back">
	<Row className="mt-5 p-4 background-section resize-row mx-auto">
	<Container className="bg-tech2 shadowbox">
	<h3 className="text-center orderbanner my-3 text-primary newfont">Background</h3>
	<Col xs={12} md={10} lg={8} xl={7} className="text-center mx-auto py-4">
	<Card.Text>
	Charles Bon Chua (born Filipino on May 12) studied Full-Stack Web Development at Zuitt Learning Institute Inc. He has also served as an On-Site Supervisor in JCW Inc. He was also known as an academic tutor in mathematics; assistant head chef and trainer in the food industry.
	</Card.Text>
	</Col>
	</Container>
	</Row>

	<Row className="my-3 mt-lg-5 p-3 align-items-center justify-content-center about-photos">
	<Col className="mx-auto text-center">
	<Image src={backlogo} className="img-fluid mx-auto text-center backlogo-img"/>
	</Col>
	</Row>

	</div>

	{/*<Row className="banner my-3 p-3">
	
	</Row>*/}
	<div className="d-block d-lg-flex align-items-center bg-tech mb-5">
	<Row className="bg-tech2 my-3 justify-contents-center p-4 shadowbox align-items-center training-section2  resize-row mx-auto">
	<h3 className="text-center orderbanner mb-5 text-primary newfont">Trainings</h3>
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

	<div className="mx-auto">
	<Row className="d-flex align-items-center justify-content-center">
	<Col xs={12} md={6} lg={4} className=" m-auto bg-info text-center p-2">
	{/*<Image src={botchan} className="botchan rounded-circle" title="Hi there!"/>*/}
	<Link to="/chua-cv-web-dev.pdf" target="_blank" download className="profile-nav mx-2">Click to Download CV</Link>
	<Image src={download} className="closeicon" title="Hi there!"/>
	</Col>
	</Row>
	</div>


	</Row>

	<Row className="my-3 p-3 align-items-center justify-content-center about-photos">
	<Col className="mx-auto text-center">
	<Image src={zuittCert} className="img-fluid mx-auto text-center backlogo-img"/>
	</Col>
	</Row>


	</div>

	


	

	<Messaging/>

	</div>
	


		)
}