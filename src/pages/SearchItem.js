import { useState, Fragment} from 'react'
import { Row, Button, Form } from 'react-bootstrap'
import AdminProdCard from "../components/AdminProdCard"

export default function SearchItem() {

	const [searchItem, setSearchItem] = useState('')
	const [courses, setCourses] = useState([])

	console.log(searchItem)

	function searchItems(e) {
		console.log(searchItem)
		e.preventDefault()

		fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/products/getSingleProductParams/${searchItem}`)
		.then(res => {
			return res.json()
		})
		.then(data => {
			setCourses(data.map(course =>{
				return (
		<AdminProdCard key={course._id} courseProp={course}/>

	)
			}))

		})
	}


	return (
		

		<>
		<Form id="form-adminsearch" className="rounded p-3 my-3 mx-auto" onSubmit={e => searchItems(e)}>
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
		</>

	
		
	)
}
