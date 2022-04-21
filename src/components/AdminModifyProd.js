import { useState, useEffect, useContext } from 'react'
import { Form, Button} from 'react-bootstrap'
import { Navigate, useParams } from 'react-router-dom'
import Swal from "sweetalert2"
import UserContext from '../UserContext'

export default function AdminModifyProd(){

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

	const [newname , setnewName ] = useState('')
  	const [ newdescription, setnewDescription ] = useState('')
	const [ newprice, setnewPrice ] = useState('')
	const [ newstockAvailable, setnewStockAvailable ] = useState('')
	const [ newcategory, setnewCategory ] = useState('')
	/*const [ source, setSource ] = useState('')*/

	const {courseId} = useParams()

	function modifyItem(e){
		e.preventDefault()

		fetch(`http://localhost:4000/products/${courseId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${localStorage.getItem("token")}`
			},
			body: JSON.stringify({
				name: newname,
				description:  newdescription,
				price: newprice,
				stockAvailable:  newstockAvailable,
				category: newcategory
				/*source: source*/
			})
		})
		.then(res => {
			//console.log(res)
			return res.json()
		})
		.then(data => {
			
			setCreated(true)
			Swal.fire({
					title: "Item Modified Successful",
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

			fetch(`http://localhost:4000/products/getSingleProduct/${courseId}`)
.then(res => res.json())
.then(data => {

	setName(data.name)
	setDescription(data.description)
	setStockAvailable(data.stockAvailable)
	setPrice(data.price)
	setCategory(data.category)
})
		}, [name, description, price, stockAvailable, category, courseId])

useEffect(()=>{
			if(newname !== '' && newprice !== '' && newstockAvailable !== '' && newcategory !== ''){
				setIsActive(true)
			}else{
				setIsActive(false)
			}
		}, [newname, newprice, newstockAvailable, newcategory, isActive])


	return (
		
		(created === true && user.isAdmin === true)?

		<>

		<Navigate to="/products/adminProducts"/>

		</>

		: (user.isAdmin !== true)?

		<Navigate to="/error"/>

		:
		
		<>

		<Form id="form-create" className="border border-secondary p-3 my-3 mx-auto" onSubmit={e => modifyItem(e)}>
			<h1 className="text-center">Modify Product</h1>
			<Form.Group controlId="newname">
			<Form.Label>Product Name: </Form.Label>
			<Form.Control type="text" placeholder={name} required value={newname} onChange={e => setnewName(e.target.value)}/>
			<Form.Text className="text-muted"> Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' "" )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="newdescription">
			<Form.Label>Description: </Form.Label>
			<Form.Control type="text" placeholder={description} required value={newdescription} onChange={e => setnewDescription(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Group controlId="newprice">
			<Form.Label>Input Product Price: </Form.Label>
			<Form.Control type="number" placeholder={price} required value={newprice} onChange={e => setnewPrice(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="newstockAvailable">
			<Form.Label>Stock Available: </Form.Label>
			<Form.Control type="number" placeholder={stockAvailable} required value={newstockAvailable} onChange={e => setnewStockAvailable(e.target.value)}/>
			</Form.Group>

			<Form.Group controlId="newcategory">
			<Form.Label>Product Category: </Form.Label>
			<Form.Control type="text" placeholder={category} required value={newcategory} onChange={e => setnewCategory(e.target.value)}/>
			<Form.Text className="text-muted">Must not contain special characters ( &#60; 	&#62; &#38;	&#34; &#39; ' " )
			</Form.Text>
			</Form.Group>

			<Form.Text className="bg-danger p-1 rounded text-light">Reminders:</Form.Text>
			<Form.Text className="text-dark mx-2">Please be reminded that all fields should not be empty</Form.Text>

			{/*<Form.Group controlId="source">
			<Form.Label>Source:</Form.Label>
			<Form.Control type="text" value={source} onChange={e => setSource(e.target.value)}/>
			</Form.Group>*/}

			<Form.Group className="text-center d-block">
			
			{ isActive ? 
				<Button variant="success" type="submit" id="submitBtn" className="my-3 text-center mx-auto">Submit
				</Button>
				:
				<Button variant="secondary" type="submit" id="submitBtn" className="my-3 text-center mx-auto" disabled>Submit
				</Button>
			}


				{/*<Button variant="success" type="submit" id="submitBtn" className="my-3 text-center mx-auto">Submit
				</Button>*/}
			
			</Form.Group>
		</Form>
		</>
		)
}