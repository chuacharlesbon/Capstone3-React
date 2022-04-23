import { useContext, useEffect} from 'react'
import { Navigate } from 'react-router-dom'
// v5 redirect to="/"
import UserContext from '../UserContext'

export default function Logout(){

	const {unsetUser, setUser} =useContext(UserContext)

	unsetUser()
	//localStorage.clear();

	useEffect(() => {
	//set user state to original value
		setUser({
			id: null,
			isAdmin: null,
			userName: null,
			email: null
		})
	}, [setUser])

	return (

		<Navigate to="/" />

		)
}
