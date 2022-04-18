import { useState, useEffect} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import AdminProdCard from "../components/AdminProdCard"
import Image from "react-bootstrap/Image";

export default function AdminProducts () {
	const [courses, setCourses] = useState([])

	/*const [image1, setImage1] = useState("./public/laptop.gif")

	const [image2, setImage2] = useState("./public/mobile.gif")*/

	const [style, setStyle] =useState({

		width: "15rem",
		height: "10rem"
		
	})


	//console.log(coursesData);
	//console.log(coursesData[0]);
	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/products/getAllProductsLists',{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setCourses(data.map(course => {
	
	return (
		//key used to identify each child
		<AdminProdCard key={course._id} courseProp={course}/>

	)
	}))
	})
	}, [])

/*const courses = coursesData.map(course => {
	console.log(course)
	return (
		//key used to identify each child
		<CourseCard key={course.id} courseProp={course}/>

	)
})*/

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

