import {useContext} from 'react'
import {Row} from 'react-bootstrap'
import UserContext from '../UserContext'

export default function Status(){

	const {user} = useContext(UserContext)

	return(
		( user.email === null)?

		<Row className="bg-secondary">
		<p>Something is not right. Please re-log in.</p>
		</Row>

		:

		console.log("user status Ok")


		)
}