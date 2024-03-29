import { useState, useEffect, useContext } from 'react'
import { Form, Button} from 'react-bootstrap'
import { Navigate } from 'react-router-dom'
import Swal from "sweetalert2"
import UserContext from '../UserContext'

export default function AdminCreateProd(){

//do not use null for initial state due to server schema type: null might contradict turn to type: string 

//set isnot a keyword, the state is destrcuturing
	
	const {user} = useContext(UserContext)
 

  	const [isActive, setIsActive] = useState(false)
  	const [created, setCreated] = useState(false)
  	const [name , setName ] = useState('')
  	const [ description, setDescription ] = useState('')
	const [ price, setPrice ] = useState('')
	const [ stockAvailable, setStockAvailable ] = useState('')
	const [ category, setCategory ] = useState('')
	const [ source, setSource ] = useState('')

	function createItem(e){
		e.preventDefault()

		fetch('https://nomadic-autumn-404208.uc.r.appspot.com/products', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				name: name,
				description:  description,
				price: price,
				stockAvailable:  stockAvailable,
				category: category, 
				source: source
			})
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			//console.log(data)
			setCreated(true)
			Swal.fire({
					title: "Item Uploaded Successful",
					icon: "success",
					text: `You will be redirected to Product Section`,
					showClass: {
    						popup: 'animate__animated animate__fadeInDown'
 	 				},
  							hideClass: {
    						popup: 'animate__animated animate__fadeOutUp'
  					}
				})
		})}

		useEffect(()=>{
			if(name !== '' && price !== '' && stockAvailable !== '' && category !== ''){
				setIsActive(true)
			}else{
				setIsActive(false)
			}
		}, [setIsActive, name, category, price, stockAvailable])


//access is the properties of console.log(data)
			
	return (
		(user.isAdmin !== true)?

		<Navigate to="/error"/>
		
		: (created === true &&  user.isAdmin === true)?

		<>

		<Navigate to="/products/adminProducts"/>

		</>

		:
		
		<>

		<Form id="form-create" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => createItem(e)}>
			<h1 className="text-center">Upload New Product</h1>
			<Form.Group controlId="name">
			<Form.Label>Product Name:</Form.Label>
			<Form.Control type="text" placeholder="Enter your Product Name here" required value={name} onChange={e => setName(e.target.value)}/>
			<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="description">
			<Form.Label>Description:</Form.Label>
			<Form.Control type="text" placeholder="Enter description here" required value={description} onChange={e => setDescription(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="price">
			<Form.Label>Input Product Price</Form.Label>
			<Form.Control type="number" placeholder="100.00" required value={price} onChange={e => setPrice(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="stockAvailable">
			<Form.Label>Stock Available:</Form.Label>
			<Form.Control type="number" placeholder="0.00" required value={stockAvailable} onChange={e => setStockAvailable(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="category">
			<Form.Label>Product Category</Form.Label>
			<Form.Control type="text" placeholder="Food/Drinks/Machines/Clothing" required value={category} onChange={e => setCategory(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="source">
			<Form.Label>Image:</Form.Label>
			<Form.Control type="text" value={source} placeholder="https://www.link.com.jpg" onChange={e => setSource(e.target.value)}/>
			</Form.Group>

			<Form.Group>
			<Form.Label className="my-1">Or Upload Photo:</Form.Label>
			<Form.Control type="file" className="my-2"/>
			<Form.Text className="bg-secondary p-1 text-light rounded">Max. File size: 5MB (gif,jpg,jpeg,png)</Form.Text>
			</Form.Group>

			<Form.Group className="text-center d-block">
			{ isActive ? 
				<Button variant="success" type="submit" id="submitBtn" className="my-3 text-center mx-auto">Submit
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center mx-auto" disabled>Submit
				</Button>
			}
			</Form.Group>
		</Form>
		</>
		)
}