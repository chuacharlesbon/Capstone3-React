import { Fragment } from 'react'
import {useContext } from 'react'
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import AdminHome from '../components/AdminHome'
import UserContext from '../UserContext'
/*import Footer from '../components/Footer'*/
//import CourseCard from '../components/CourseCard'
//import Test from '../components/Test'

export default function Home () {

const {user} = useContext(UserContext)
  console.log(user)

  const username = user.userName

	return (
		<Fragment>

		{(user.isAdmin === true ) ?

		<AdminHome/>

		:
		<>
			<Banner/>
			<Highlights/>
		</>	
		}
		</Fragment>

		)
}