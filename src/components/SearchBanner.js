import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, Fragment } from 'react'
import { Row, Col, Card, Button, Form, Container, Accordion } from 'react-bootstrap'
import CourseCard from "../components/CourseCard"

export default function SearchItem() {


	const [searchItem, setSearchItem] = useState('')
	const [courses, setCourses] = useState([])
	const [style, setStyle] =useState({

		width: "15rem",
		height: "10rem"
		
	})

	console.log(searchItem)
	console.log(courses)
	console.log(style)

	/*const {searchItem} = useParams()*/

	function searchItems(e) {
		console.log(searchItem)
		e.preventDefault()

		fetch(`http://localhost:4000/products/getSingleProductParams/${searchItem}`)
		.then(res => {
			console.log(res)
			return res.json()
		})
		.then(data => {
			console.log(data)
			setCourses(data.map(course =>{
				return (
		<CourseCard key={course._id} courseProp={course}/>

	)
			}))


		})
	}

	
	return (
		<>
		<Accordion defaultActiveKey={['0']} alwaysOpen className="my-2">
  		<Accordion.Item eventKey="0">
    	<Accordion.Header id="searchhead" className="bg-warning"><h6 className="text-dark">Search Item by Name </h6></Accordion.Header>
    	<Accordion.Body>
		<Form className="rounded p-1" onSubmit={e => searchItems(e)}>
			<Form.Group controlId="searchItem" className="mx-auto">
			<Row className="justify-content-center">
			<Col xs={12} md={10} xl={11}>
			<Form.Control type="text" placeholder="Search Keyword" required value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
			</Col>
			<Col xs={12} md={2} xl={1} className="mx-auto">
			<Button  type="submit" className="background-play text-center mx-auto text-dark">Search
				</Button>
			</Col>

			</Row>
			<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
			</Form.Text>
			</Form.Group>
		</Form>
		</Accordion.Body>
  		</Accordion.Item>
  		</Accordion>

		<Row className="justify-content-md-center">	
		{courses}
		</Row>
		</>
		
	)
}
