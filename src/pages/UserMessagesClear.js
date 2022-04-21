import { useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import UserMesCard from "../components/UserMesCard"
//import UserContext from "../UserContext"

export default function AdminMessages () {
	const [courses, setCourses] = useState([])

	//const {user} = useContext(UserContext)

	const [clear, setClear] = useState(false)

	function refreshData(){
		fetch('https://immense-lake-17505.herokuapp.com/messages/readClearMessages',{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`
			}
		})
		.then(res => res.json())
		.then(data => {
			if ( data.length === 0){
				setClear(true)
				
			/*<Navigate to="/orders/clearOrder"/>*/
				
			} else if ( data.length > 0 ){
			setClear(false)
			setCourses(data.map(course => {
	
	return (
		//key used to identify each child
		<UserMesCard key={course._id} courseProp={course}/>

	)
	}))
	}
	})
	} 

	return (
			clear === true ?

			<Navigate to="/messages/clearMessage"/>

			:
		<>
			<Row className="mt-2 pt-4 banner">
			<Col>
			<h3 className="text-center orderbanner">Manage Messages Inbox</h3>
			</Col>
			</Row>
			<Button className="bg-secondary my-2" onClick={() => refreshData()}>Refresh Data</Button>
			<Row className="justify-content-md-center">
			{courses}
			</Row>
			
		</>
		)
}

