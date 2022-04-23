import {Row, Col} from 'react-bootstrap'
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import UserContext from '../UserContext'


export default function LogDisplay() {

	const {user} = useContext(UserContext)

	return (
		(user.id === null)?

		<>
		<Row className="mb-3 banner justify-contents-center mx-auto text-center align-items-center ">

		<p className="mt-1 mb-0">Welcome!</p>

		</Row>
		</>

		: ((user.id === undefined || user.isAdmin === undefined || user.email === undefined || user.userName === undefined) && user.id !== null)  ?

		<>
		<Row className="px-3 bg-secondary">
		<Col>
		<span className="text-light my-2">Something's not right.</span>
		<Link to="/refreshlog" className="mx-2 text-info">Refresh logs here</Link>
		</Col>
		</Row>
		</>

		: (user.id !== undefined && user.id !== null)?

		<>
		<Row className="mb-3 banner px-3">
		<Col>
		<p  className="mt-1 mb-0 ">You are currently logged in.</p>
		</Col>
		</Row>
		</>

		/*<Row className="mt-5 py-4 banner">
		<h3 className="text-center orderbanner">Background</h3>
		<Col xs={12} md={10} lg={8} xl={7} className="text-center mx-auto py-4">
		<Card.Text>
		Charles Bon Chua (born Filipino on May 12) studied Full-Stack Web Development at Zuitt Learning Institute Inc. He has also served as an On-Site Supervisor in JCW Inc. He was also known as an academic tutor in mathematics; assistant head chef and trainer in the food industry.
		</Card.Text>
		</Col>
		</Row>*/
		
		/*(user.id === undefined || user.isAdmin === undefined || user.email === undefined || user.userName === undefined)?

		<>
		<Row className="mx-3 bg-secondary">
		<Col>
		<span className="text-light">Something's not right. Session expired. Please log in again.</span>
		<Link to="/refreshlog" className="mx-2">Click Here</Link>
		</Col>
		</Row>
		</>

		: (user.id !== null && user.isAdmin !== null)?

		<>
		<Row className="mx-3 banner">
		<Col>
		<p>You are logged in.</p>
		</Col>
		</Row>
		</>

		: (user.id === null)?

		<>
		<Row className="mx-3 banner">

		<p>Welcome!</p>

		</Row>
		</>
*/
		:

		<>
		<Row className="mb-3 banner justify-contents-center mx-auto text-center">

		<p>Welcome!</p>

		</Row>
		</>
		)
}
