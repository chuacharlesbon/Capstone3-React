import { useState, useEffect, useContext} from 'react'
import {Row, Col} from 'react-bootstrap'
import { Navigate} from 'react-router-dom'
import CartCard from "../components/CartCard"
import UserContext from '../UserContext'

export default function CartOrder () {

	const {user} = useContext(UserContext)
	//console.log(user)

	const [orders, setOrders] = useState([])

	const [clear, setClear] = useState(false)
	
	useEffect(() => {
		//fetch('http://localhost:4000/courses')
		fetch('http://localhost:4000/orders/getCart', {
			method: "GET",
			headers: {
					/*Authorization: `Bearer ${token}`*/
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
		})
		.then(res => res.json())
		.then(data => {
			if ( data.length === 0){
				setClear(true)
				
			} else if ( data.length > 0 ){
			setClear(false)
			setOrders(data.map(order => {
	
	return (
		//key used to identify each child
		<CartCard key={order._id} orderProp={order}/>

	)
	}))
	} 
	})
	}, [])


	return (
			clear === true ?
			<Navigate to="/orders/clearOrder"/>
			: user.id !== null ?
			<>
			
			<Row id="cartbanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Cart Section</h3>
			</Col>
			</Row>

			<Row className="justify-content-md-center">
			{orders}
			</Row>
			</>
			:

			<Navigate to="/login"/>
		
		)
}

