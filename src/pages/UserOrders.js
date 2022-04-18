import { useState, useEffect, useContext} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import coursesData from "../data/coursesData"
import OrderCard from "../components/OrderCard"
/*import ClearOrder from "../components/ClearOrder"*/
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function UserOrders () {

	const {user, setUser} = useContext(UserContext)
	console.log(user)

	const [orders, setOrders] = useState([])

	const [clear, setClear] = useState(false)



	/*const [image1, setImage1] = useState("./public/laptop.gif")

	const [image2, setImage2] = useState("./public/mobile.gif")*/

	/*const [style, setStyle] =useState({

		width: "15rem",
		height: "10rem"
		
	})*/

	/*const retrieveUserDetails = (token) => {
			fetch('http://localhost:4000/users/details', {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(res => (res.json())
			.then(data => {
				console.log(data)

				setUser({
					id: data._id,
					isAdmin: data.isAdmin
				})
			}))
		}
*/
	//console.log(coursesData);
	//console.log(coursesData[0]);
	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/orders/getUserOrders', {
			method: "GET",
			headers: {
					/*Authorization: `Bearer ${token}`*/
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			/*console.log(Object.keys(data))

			const result = Object.keys(data).map(key => {
				console.log(key)
				console.log(data[key])

				return {[key]: data[key]}
			})
			console.log(result)*/
			if ( data.length === 0){
				setClear(true)
				
			/*<Navigate to="/orders/clearOrder"/>*/
				
			} else if ( data.length > 0 ){
			setClear(false)
			setOrders(data.map(order => {
	
	return (
		//key used to identify each child
		<OrderCard key={order._id} orderProp={order}/>

	)
	}))
	} 
	})
	}, [])

/*.then(data => {
			console.log(data)
			setCourses(data.map(course => {
	
	return (
		
		<CourseCard key={course._id} courseProp={course}/>

	)
	}))
	})
	}, [])*/

/*const courses = coursesData.map(course => {
	console.log(course)
	return (
		//key used to identify each child
		<CourseCard key={course.id} courseProp={course}/>

	)
})*/

	return (
			clear === true ?
			<Navigate to="/orders/clearOrder"/>
			:
			<>
			<Row id="orderbanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Order Section</h3>
			</Col>
			</Row>
			<Row className="justify-content-md-center">
			{orders}
			</Row>
			</>
			
		
		)
}

