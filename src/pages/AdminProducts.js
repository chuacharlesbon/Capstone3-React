import { useState, useEffect} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AdminProdCard from "../components/AdminProdCard"
import Image from "react-bootstrap/Image";

export default function AdminProducts () {
	const [courses, setCourses] = useState([])

	useEffect(() => {
		
		fetch('http://localhost:4000/products/getAllProductsLists',{
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
	}, [])


	return (
		<>
			<Row id="adminProdBanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Manage Products Section</h3>
			</Col>
			</Row>
			<Row className="justify-content-md-center">
			{courses}
			</Row>
			
		</>
		)
}

