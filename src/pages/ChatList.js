import { useState} from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import {Navigate} from 'react-router-dom'
import ChatCard from "../components/ChatCard"
//import UserContext from "../UserContext"

export default function ChatList () {
	const [chats, setChats] = useState([])

	//const {user} = useContext(UserContext)

	const [clear, setClear] = useState(false)

	function refreshData(){
		fetch('https://immense-lake-17505.herokuapp.com/chats/userChatList',{
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
			console.log(data)
			setClear(false)
			setChats(data.map(chat => {
	
	return (
		//key used to identify each child
		<ChatCard key={chat._id} chatProp={chat}/>

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
			<h3 className="text-center orderbanner">Manage Chats</h3>
			</Col>
			</Row>
			<Button className="bg-secondary my-2" onClick={() => refreshData()}>Refresh Data</Button>
			<Row className="justify-content-md-center">
			{chats}
			</Row>
			
		</>
		)
}

