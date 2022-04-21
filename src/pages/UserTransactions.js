import { useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { Navigate} from 'react-router-dom'
import TransactionCard from "../components/TransactionCard"
/*import ClearOrder from "../components/ClearOrder"*/

export default function UserOrders () {

	//const {user, setUser} = useContext(UserContext)


	const [orders, setOrders] = useState([])

	const [clear, setClear] = useState(false)

	function refreshData(){
		fetch('http://localhost:4000/orders/getUserTransactions', {
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
		<TransactionCard key={order._id} orderProp={order}/>

	)
	}))
	} 
	})
	}

/*	useEffect(() => {
		fetch('http://localhost:4000/orders/getUserTransactions', {
			method: "GET",
			headers: {

					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
		})
		.then(res => res.json())
		.then(data => {
			
			if ( data.length === 0){
				setClear(true)
				
			<Navigate to="/orders/clearOrder"/>
				
			} else if ( data.length > 0 ){
			setClear(false)
			setOrders(data.map(order => {
	
	return (
		
		<TransactionCard key={order._id} orderProp={order}/>

	)
	}))
	} 
	})
	}, [])*/


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
			<Button className="bg-secondary my-2" onClick={() => refreshData()}>Refresh Data</Button>
			<Row className="justify-content-md-center">
			{orders}
			</Row>
			</>
			
		
		)
}

