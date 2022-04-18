import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'

export default function Error() {

	

	return (
		
			<Container className="p-3">
				<h6>ShopNetwork</h6>
				<h3>Oops!</h3>
				<h1>404 Page Not Found</h1>
				<p>It seems the link you are trying to access is not available.</p>
			
				<p>Go back to <Button className="nav-btn border border-secondary" variant="warning" as={Link} to="/" >Home</Button></p>



			</Container>
		



		)
}
		
