import { useState, useEffect, useContext} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import coursesData from "../data/coursesData"
import TransactionCard from "../components/TransactionCard"
/*import ClearOrder from "../components/ClearOrder"*/
import Image from "react-bootstrap/Image";
import UserContext from '../UserContext'

export default function UserOrders () {

	const {user, setUser} = useContext(UserContext)
	console.log(user)

	const [orders, setOrders] = useState([])

	const [clear, setClear] = useState(false)



	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/orders/getUserTransactions', {
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
		<TransactionCard key={order._id} orderProp={order}/>

	)
	}))
	} 
	})
	}, [])



	return (
			clear === true ?
			<Navigate to="/orders/clearOrder"/>
			:
			<>
			<Row id="orderbanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Order History and Payment Transactions</h3>
			</Col>
			</Row>
			<Row className="justify-content-md-center">
			{orders}
			</Row>
			</>
			
		
		)
}

