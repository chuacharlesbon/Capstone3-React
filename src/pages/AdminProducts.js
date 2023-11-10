import { useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import AdminProdCard from "../components/AdminProdCard"

export default function AdminProducts () {
	const [courses, setCourses] = useState([])

	function refreshData(){
		fetch('https://nomadic-autumn-404208.uc.r.appspot.com/products/getAllProductsLists',{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			setCourses(data.map(course => {
	
	return (
		//key used to identify each child
		<AdminProdCard key={course._id} courseProp={course}/>

	)
	}))
	})
	} 


	return (
		<>
			<Row id="adminProdBanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Manage Products Section</h3>
			</Col>
			</Row>
			<Button className="bg-secondary my-2" onClick={() => refreshData()}>Refresh Data</Button>
			<Row className="justify-content-md-center">
			{courses}
			</Row>
			
		</>
		)
}

