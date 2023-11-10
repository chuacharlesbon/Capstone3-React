//import ReactDOM from 'react-dom'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, Fragment } from 'react'
import { Row, Col, Button, Form, Accordion } from 'react-bootstrap'
import CourseCard from "../components/CourseCard"

export default function SearchItem() {


	const [searchItem, setSearchItem] = useState('')
	const [courses, setCourses] = useState([])
	/*const [style] =useState({

		width: "15rem",
		height: "10rem"
		
	})*/
	//console.log(searchItem)

	//console.log(style)

	const itemfound = courses.length
	/*const {searchItem} = useParams()*/

	function searchItems(e) {
		//console.log(searchItem)
		e.preventDefault()

		fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/products/getSingleProductParams/${searchItem}`)
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			//console.log(data)
			setCourses(data.map(course =>{
				return (
		<CourseCard key={course._id} courseProp={course}/>

	)
			}))


		})
	}

	
	return (
		<>
		<Accordion defaultActiveKey={['0']} alwaysOpen className="my-2 search-banner">
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
			<Form.Text className="text-dark d-flex flex-row justify-content-start align-items-center">
			<h6 className="my-auto mx-2">Results ({itemfound}) </h6> Items found with "{searchItem}" search
			</Form.Text>
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
