import { useState, Fragment } from 'react'
import { Row, Button, Form } from 'react-bootstrap'
import CourseCard from "../components/CourseCard"
import ProductBanner from "../components/ProductBanner"
import Advertisement from "../components/Advertisement"
//import UserContext from '../UserContext'

export default function SearchItem() {

	//const {user} = useContext(UserContext)
  	//console.log(user)

	const [searchItem, setSearchItem] = useState('')
	const [courses, setCourses] = useState([])

	console.log(searchItem)

	/*const {searchItem} = useParams()*/

	function searchItems(e) {
		console.log(searchItem)
		e.preventDefault()

		fetch(`https://immense-lake-17505.herokuapp.com/products/getSingleProductParams/${searchItem}`)
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
		<ProductBanner/>
		<Form id="form-search" className="rounded p-3 my-3 mx-auto" onSubmit={e => searchItems(e)}>
			<h4 className="text-center">Search Item Name</h4>
			<Form.Group controlId="searchItem">
			<Form.Control type="text" placeholder="Search Keyword" required value={searchItem} onChange={e => setSearchItem(e.target.value)}/>
			<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
			</Form.Text>
			</Form.Group>
		<Button type="submit" className="my-3 text-center mx-auto text-dark background-play">Search
				</Button>
		</Form>

		<Row className="justify-content-md-center">	
		{courses}
		</Row>
		<Advertisement/>
		</>
		
	)
}
