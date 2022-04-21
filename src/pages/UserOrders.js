import { useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import OrderCard from "../components/OrderCard"
/*import ClearOrder from "../components/ClearOrder"*/
//import UserContext from '../UserContext'

export default function UserOrders () {

	//const {user, setUser} = useContext(UserContext)
	//console.log(user)

	const [orders, setOrders] = useState([])

	const [clear, setClear] = useState(false)

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

	return (
			clear === true ?
			<Navigate to="/orders/clearOrder"/>
			:
			<>
			<Row id="orderbanner" className="mt-2 pt-4">
			<Col>
			<h3 className="text-center orderbanner">Pending Orders Section</h3>
			<p className="text-center">Reminders: Please Confirm Payment as acknowledgement to approve the delivery process. Orders listed are considered as reversible. Acknowledged payments will no longer be refunded. For refund, please confirm cancel order to request admin for refund processing.</p>
			</Col>
			</Row>
			<Row className="justify-content-md-center">
			{orders}
			</Row>
			</>
			
		
		)
}

