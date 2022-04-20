import { useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import AdminMesCard from "../components/AdminMesCard"

export default function AdminMessagesClear () {
	const [courses, setCourses] = useState([])

	function refreshData(){
		fetch('http://localhost:4000/messages/readMessages',{
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
		<AdminMesCard key={course._id} courseProp={course}/>

	)
	}))
	})
	} 


	return (
		<>
			<Row id="adminProdBanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Manage Cleared Messages Section</h3>
			</Col>
			</Row>
			<Button className="bg-secondary my-2" onClick={() => refreshData()}>Refresh Data</Button>
			<Row className="justify-content-md-center">
			{courses}
			</Row>
			
		</>
		)
}

