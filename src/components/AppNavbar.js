import React, {useState, useContext, useEffect} from 'react'
import {Navbar, Container, Nav, NavDropdown, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
/*v5 navlink,link*/
import UserContext from '../UserContext'

export default function AppNavbar(){
	
  const {user} = useContext(UserContext)
  console.log(user)

  const username = user.userName

  const admin = user.isAdmin

  const login = user.id

  const [bg, setBg] = useState("")

  useEffect(() => {
    if(login === null){
  
    setBg("bg-warning")

    }else if (login !== null && admin === true) {
    setBg("bg-info")
    }else {
      setBg("bg-warning")
    }
    
  }, [bg])

  /*const [username, setUsername] = useState('')*/

  const [style, setStyle] = useState({
    width: "4rem",
    height: "4rem"
  })

/*useEffect(() => {
fetch(`http://localhost:4000/users/getDetails`)
.then(res => res.json())
.then(data => {
  console.log(data)
  setUsername(data.email)

  
})

}, [username])*/


  return (

		<Navbar className={bg} expand="lg" sticky="top" >
    <Container>
    <Navbar.Brand as={Link} to="/">ShopNetwork</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">

        { (user.isAdmin === true && user.id !== null)?

          <Nav.Link as={Link} to="/" className="adminhome-btn text-center">Home</Nav.Link>

          :
          <Nav.Link as={Link} to="/" className="navhome-btn text-center">Home</Nav.Link>
        }
        
        
        

        { (user.isAdmin === true && user.id !== null)?

        <>
        <NavDropdown title="Manage Products" id="navbarScrollingDropdown"  className=" admin-btn text-center">
          <NavDropdown.Item  as={Link} to="/products/adminProducts" >Show Products List</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/products/getSingleProductByName" >Search Products</NavDropdown.Item>
         {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center">
           Delete Products
          </NavDropdown.Item>*/}
        </NavDropdown>
        </>

       

        :

        <>
        <NavDropdown title="Products" id="navbarScrollingDropdown"  className=" nav-btn text-center">
          <NavDropdown.Item  as={Link} to="/courses" >Show Products</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/products/getSingleProductByName" >Search Product</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/courses" className="text-center">
            What's New
              <p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">Hot deals!</p>
          </NavDropdown.Item>
        </NavDropdown>
        </>
        }

        </Nav>
        

        <Nav className="">
        { (user.isAdmin !== true && user.id !== null) ?
        <>
        <NavDropdown title="My Orders" id="navbarScrollingDropdown"  className="nav-btn text-center">
          <NavDropdown.Item  as={Link} to="/orders/getCart" >My Cart <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders" >Show Order List</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders" >Transactions</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center">
            FAQs
            {/*<p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">NEW</p>*/}
          </NavDropdown.Item>
          
        </NavDropdown>
        {/*<Nav.Link as={Link} to="/orders"  className="nav-btn">Orders</Nav.Link>*/}
        <NavDropdown title="Options" id="navbarScrollingDropdown"  className="nav-btn text-center">
          <h6 className="p-1 mx-auto text-center">{username}</h6>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/orders" >Notifications <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders" >Transactions <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders" >Messages <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center">
            <Nav.Link as={Link} to="/logout"  className=" text-center">
            Logout
            </Nav.Link>
          </NavDropdown.Item>
          
        </NavDropdown>
        {/*<Nav.Link as={Link} to="/logout"  className="nav-btn text-center">Logout</Nav.Link>*/}
        </>

        : (user.isAdmin === true && user.id !== null) ?

        <>

        <NavDropdown title="Manage Orders" id="navbarScrollingDropdown"  className="admin-btn text-center">
          <NavDropdown.Item  as={Link} to="/orders/searchOrder" >Search Client Order</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/" >Inspect Client Order<Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/" >Modify Client Order</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/"  className="text-center">
            Others
            {/*<p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">NEW</p>*/}
          </NavDropdown.Item>
          
        </NavDropdown>
        {/*<Nav.Link as={Link} to="/orders"  className="nav-btn">Orders</Nav.Link>*/}
        <NavDropdown title="Options" id="navbarScrollingDropdown"  className="admin-btn text-center">
          <h6 className="p-1 mx-auto text-center">Admin:{username}</h6>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/" >Notifications <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/" >Client Messages<Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/" >Cleared Issues<Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center">
            <Nav.Link as={Link} to="/logout"  className=" text-center">
            Logout
            </Nav.Link>
          </NavDropdown.Item>
          
        </NavDropdown>
        {/*<Nav.Link as={Link} to="/logout"  className="nav-btn text-center">Logout</Nav.Link>*/}

        </>

        :
        <>
        <Nav.Link as={Link} to="/register"  className="nav-btn text-center">Register</Nav.Link>
        <Nav.Link as={Link} to="/login"  className="nav-btn text-center">LOGIN</Nav.Link>
        </>
        }

      </Nav>
    </Navbar.Collapse>

  </Container>
</Navbar>


	)
}

