import { useState, Fragment, useContext } from 'react'
import { Row, Button, Form} from 'react-bootstrap'
import ProductBanner from "../components/ProductBanner"
import AdminOrderCard from "../components/AdminOrderCard"
import UserContext from '../UserContext'

export default function SearchItem() {

	const {user} = useContext(UserContext)
  	//console.log(user)

	const [searchItem, setSearchItem] = useState('')
	const [courses, setCourses] = useState([])

	//console.log(searchItem)

	/*const {searchItem} = useParams()*/

	function searchItems(e) {
		//console.log(searchItem)
		e.preventDefault()

		fetch(`https://nomadic-autumn-404208.uc.r.appspot.com/orders/searchOrderId/${searchItem}`,{
			method: "GET",
			headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			//console.log(typeof data)

			setCourses(data.map(course =>{
				return (
		<AdminOrderCard key={course._id} orderProp={course}/>

	)
			}))
		
		

		})
	}


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
