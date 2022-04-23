import { Fragment } from 'react'
import {useContext } from 'react'
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import AdminHome from '../components/AdminHome'
import UserContext from '../UserContext'
//import LogDisplay from './components/LogDisplay'

export default function Home () {

const {user} = useContext(UserContext)
  //console.log(user)


	return (
		<Fragment>

		{(user.isAdmin === true ) ?

		<AdminHome/>

		:
		<>
			{/*<LogDisplay/>*/}
			<Banner/>
			<Highlights/>
		</>	
		}
		</Fragment>

		)
}