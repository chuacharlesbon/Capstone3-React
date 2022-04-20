import { useState, useEffect } from 'react'
import { Card, Button, Col, Row, Accordion } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'


export default function AdminProdCard ({courseProp}) {
	//before using props, destructure the object

	const {name, price, _id, category, stockAvailable, remark, isActive, createdOn} = courseProp
	//console.log(courseProp)

	const [status, setStatus] = useState('')

	function deleteItem(id){
		fetch(`http://localhost:4000/products/deleteSingleProduct/${id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
	Swal.fire({
				title: "Item Deleted from Database",
				icon: "info"
			})

	})}

	function activateItem(id){
		fetch(`http://localhost:4000/products/activate/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
		Swal.fire({
				title: "Item Activated on Database",
				icon: "info",
				text: `Your list will be updated.`

			})
	})
	}

	function archiveItem(id){
		fetch(`http://localhost:4000/products/archive/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${localStorage.getItem("token")}`
		}
	})
	.then(res => res.json())
	.then(data => {
		//console.log(data)
		Swal.fire({
				title: "Item Archived from Database",
				icon: "info",
				text: `Item will not be available to market.`
			})
	})
	}

	useEffect(()=>{
		/*fetch('http://localhost:4000/products/getAllProductsLists', {
			method: "GET",
			headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`
				}
		})
		.then(res => res.json())
		.then(data => {
			//console.log(data)
			setProdList(data)
		})*/
			if(isActive === false){
			setStatus("Archived")
		}else {
			setStatus("Active")
		}
	}, [status, isActive])


	return (
<>
		<Accordion className="my-1 bg-info">
  		<Accordion.Item eventKey="0">
    	<Accordion.Header ><h6 className="my-auto">{name} :</h6> {_id}</Accordion.Header>
    	<Accordion.Body>
     
    	<Card  className="my-1 ">
		<Card.Body  className="d-flex flex-column admin-prodcard">
			<Card.Title className="card-title">
			{name}
			</Card.Title>
			<Row>

			<Col xs={12} md={4} lg={3} xl={3} >
			<Card.Text>
			<p>ProductId: {_id}<br/>
			Product For Sale: {status}<br/>
			Stock Available: {stockAvailable}<br/>
			Category: {category}<br/>
			Price: {price}<br/>
			Details: {remark}<br/>
			{createdOn}<br/>
			</p>
			</Card.Text>
			</Col>

			<Col  xs={12} md={8} lg={9} xl={9} >
			<Row className="justify-content-center">
			
			<Col  xs={8} md={4} lg={3} xl={2} >
			<Button  as= {Link} to={`/products/modifyProducts/${_id}`} className="d-block my-2 btn-outline-warning text-light" >Modify</Button>
			</Col>

			<Col  xs={8} md={4} lg={3} xl={2} >
			<Button  as= {Link} to={``} onClick={() => deleteItem(`${_id}`)} disabled className="d-block my-2 btn-outline-danger text-light" >Delete</Button>
			</Col>

			<Col  xs={8} md={4} lg={3} xl={2} >
			<Button   as= {Link} to={``} onClick={() => activateItem(`${_id}`)} className="d-block my-2 btn-outline-success text-light" >Activate</Button>
			</Col>

			<Col xs={8} md={4} lg={3} xl={2} >
			<Button as= {Link} to={``} onClick={() => archiveItem(`${_id}`)} className="d-block my-2 btn-outline-secondary text-light" >Archive</Button>
			</Col>

			</Row>
			</Col>

			</Row>
		</Card.Body>
		</Card>

    	</Accordion.Body>
  		</Accordion.Item>
  		</Accordion>
 </>
		
		


		
		)
}