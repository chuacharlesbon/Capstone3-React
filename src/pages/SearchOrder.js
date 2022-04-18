import { useState, useEffect, Fragment, useContext } from 'react'
import { Row, Col, Card, Button, Form, Container } from 'react-bootstrap'
import ProductBanner from "../components/ProductBanner"
import AdminOrderCard from "../components/AdminOrderCard"
import UserContext from '../UserContext'

export default function SearchItem() {

	const {user} = useContext(UserContext)
  	console.log(user)

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

		fetch(`http://localhost:4000/orders/searchOrderId/${searchItem}`,{
			method: "GET",
			headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
		})
		.then(res => {
			console.log(res)
			return res.json()
		})
		.then(data => {
			console.log(typeof data)

			setCourses(data.map(course =>{
				return (
		<AdminOrderCard key={course._id} orderProp={course}/>

	)
			}))
		
		


		})
	}

	/*useEffect(() => {
		e.preventDefault

		fetch(`http:localhost://4000/products/getSingleProductByName`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: searchItem
			})
		})
		.then(res => {
			console.log(res)
			return res.json()
		})
		.then(data => {
			console.log(data)
			setCourses(data.map(course =>{
				return (
		//key used to identify each child
		<CourseCard key={course._id} courseProp={course}/>

	)
			}))


		})
	})*/

	return (
		((user.isAdmin === true) && (user.id !== null) )?

		<>
		<Form id="form-adminsearch" className="rounded p-3 my-3 mx-auto" onSubmit={e => searchItems(e)}>
			<h4 className="text-center">Search Order By ID</h4>
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

		:

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
		</>
		
	)
}
