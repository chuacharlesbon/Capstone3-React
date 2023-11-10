import React, {useState, useContext, useEffect} from 'react'
import {Navbar, Container, Nav, NavDropdown, Badge} from 'react-bootstrap'
import {Link} from 'react-router-dom'
/*v5 navlink,link*/
import UserContext from '../UserContext'
import slogo from './s-logo.png'

export default function AppNavbar(){
	
  const {user} = useContext(UserContext)


  const username = user.userName

  const [adminProdList, setAdminProdList] = useState("")

  const [userCartList, setUserCartList] = useState('')

  const [userOrderList, setUserOrderList] = useState('')

useEffect(()=> {
  if(user.isAdmin === true && user.id !== null){
    fetch('https://nomadic-autumn-404208.uc.r.appspot.com/products/getAllProductsLists',{
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setAdminProdList(data.length)

    })
  }//end of if statement
  else if (user.isAdmin !== true && user.id !== null){
    fetch('https://nomadic-autumn-404208.uc.r.appspot.com/orders/getCart', {
      method: "GET",
      headers: {
          /*Authorization: `Bearer ${token}`*/
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setUserCartList(data.length)
    })
    fetch('https://nomadic-autumn-404208.uc.r.appspot.com/orders/getUserOrders', {
      method: "GET",
      headers: {
          /*Authorization: `Bearer ${token}`*/
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
    })
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setUserOrderList(data.length)
    })

  }//end of else if statement
  else{
    console.log("User Clear")
  }


})

  return (
   (user.isAdmin === true && user.id !== null)?
    <>
		<Navbar className="bg-info" expand="lg" sticky="top" >
    <Container>
    <Navbar.Brand href="/" className=" p-1 align-items-center d-flex">
            <img
              src={slogo}
              className="d-inline-block align-top clogo rounded-circle img-fluid"
              alt="S Logo"
            />
            <span className="mx-2">ShopNetwork</span>
          </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/" className="adminhome-btn text-center">Home</Nav.Link>
      <NavDropdown title="Manage Products" id="navbarScrollingDropdown"  className=" admin-btn text-center">
          <NavDropdown.Item  as={Link} to="/products/adminProducts" >Show Products List <Badge className="ml-2 bg-danger">{adminProdList}</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/products/getSingleProductByName" >Search Products</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/products/addProducts" >
           Create New item
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/products/addProducts" disabled >
           Products Database
          </NavDropdown.Item>
        </NavDropdown>
        </Nav>
         <Nav className="">
         <NavDropdown title="Manage Orders" id="navbarScrollingDropdown"  className="admin-btn text-center">
          <NavDropdown.Item  as={Link} to="/orders/searchOrder" >Search Client Order</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders/searchOrder" >Inspect Client Order<Badge bg="danger"></Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders/searchOrder" disabled >Modify Client Order</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/" disabled className="text-center">
            Orders Database
            {/*<p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">NEW</p>*/}
          </NavDropdown.Item>
          
        </NavDropdown>
        {/*<Nav.Link as={Link} to="/orders"  className="nav-btn">Orders</Nav.Link>*/}
        <NavDropdown title="Options" id="navbarScrollingDropdown"  className="admin-btn text-center">


          {
          (user.id === undefined || user.isAdmin === undefined || user.email === undefined)?
          <>
          <p className="text-center">Session expired</p>
          <p className="text-center"><Link to="/refreshlog" className="text-center mx-auto">Click here</Link></p>
          </>
          :

          <h6 className="p-1 mx-auto text-center">Admin {username}</h6>



          }



          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/" >Notifications <Badge bg="danger"></Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/messages/AdminMes" >Client Messages <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/messages/AdminMesClear" >Inbox <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/messages" >Send Announcements <br/>via Group Message </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/messages" disabled>Update User to Seller </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/messages" disabled>Users Database </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center">
            <Nav.Link as={Link} to="/logout"  className=" text-center">
            Logout
            </Nav.Link>
          </NavDropdown.Item>
          
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>

  </Container>
</Navbar>

</>

: (user.isAdmin !== true && user.id !== null && user.id !== undefined)?

<>
<Navbar className="bg-warning" expand="lg" sticky="top" >
    <Container>
    <Navbar.Brand href="/" className=" p-1 align-items-center d-flex">
            <img
              src={slogo}
              className="d-inline-block align-top clogo rounded-circle img-fluid"
              alt="S Logo"
            />
            <span className="mx-2">ShopNetwork</span>
          </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/" className="navhome-btn text-center">Home</Nav.Link>
       <NavDropdown title="Products" id="navbarScrollingDropdown"  className=" nav-btn text-center">
          <NavDropdown.Item  as={Link} to="/products/categoryFood" >Show Products</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/products/getSingleProductByName2" >Search Product</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/products/categoryClothing" className="text-center">
            What's New
              <p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">Hot deals!</p>
          </NavDropdown.Item>
        </NavDropdown>
        </Nav>
         <Nav className="">
          <NavDropdown title="My Orders" id="navbarScrollingDropdown"  className="nav-btn text-center">
          <NavDropdown.Item  as={Link} to="/orders/getCart" >My Cart <Badge className="ml-2 bg-danger">{userCartList}</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders" >Show Order List <Badge className="ml-2 bg-danger">{userOrderList}</Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/orders/getUserTransactions" >Transactions</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center" disabled>
            FAQs
            {/*<p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">NEW</p>*/}
          </NavDropdown.Item>
          
        </NavDropdown>
        {/*<Nav.Link as={Link} to="/orders"  className="nav-btn">Orders</Nav.Link>*/}
        <NavDropdown title="Options" id="navbarScrollingDropdown"  className="nav-btn text-center">


          {
          (user.id === undefined || user.isAdmin === undefined || user.email === undefined)?
          <>
          <p className="text-center">Session expired</p>
          <p className="text-center"><Link to="/refreshlog" className="text-center mx-auto">Click here</Link></p>
          </>
          :

          <h6 className="p-1 mx-auto text-center">{username}</h6>



          }



          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/orders" >Notifications <Badge bg="danger">9+</Badge></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/messages/UserMes" >New Messages <Badge bg="danger"></Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/messages/UserMesClear" >Message Inbox <Badge bg="danger"></Badge></NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/messages/newMessage" >Create Message </NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/chatList" >Chats </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item  as={Link} to="/messages/newMessage" disabled>Request Admin<br/>to Retailer Account </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5" className="text-center">
            <Nav.Link as={Link} to="/logout"  className=" text-center">
            Logout
            </Nav.Link>
          </NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</>

: (user.id === null)?

<>
<Navbar className="bg-warning" expand="lg" sticky="top" >
    <Container>
    <Navbar.Brand href="/" className=" p-1 align-items-center d-flex">
            <img
              src={slogo}
              className="d-inline-block align-top clogo rounded-circle img-fluid"
              alt="S Logo"
            />
            <span className="mx-2">ShopNetwork</span>
          </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/" className="navhome-btn text-center">Home</Nav.Link>
       <NavDropdown title="Products" id="navbarScrollingDropdown"  className=" nav-btn text-center">
          <NavDropdown.Item  as={Link} to="/products/categoryFood" >Show Products</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/products/getSingleProductByName2" >Search Product</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/products/categoryClothing" className="text-center">
            What's New
              <p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">Hot deals!</p>
          </NavDropdown.Item>
        </NavDropdown>
        </Nav>
         <Nav className="">
        <Nav.Link as={Link} to="/register"  className="nav-btn text-center">Register</Nav.Link>
        <Nav.Link as={Link} to="/login"  className="nav-btn text-center">LOGIN</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</>

:

<>
<Navbar className="bg-warning" expand="lg" sticky="top" >
    <Container>
    <Navbar.Brand href="/" className=" p-1 align-items-center d-flex">
            <img
              src={slogo}
              className="d-inline-block align-top clogo rounded-circle img-fluid"
              alt="S Logo"
            />
            <span className="mx-2">ShopNetwork</span>
          </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">
      <Nav.Link as={Link} to="/" className="navhome-btn text-center">Home</Nav.Link>
       <NavDropdown title="Products" id="navbarScrollingDropdown"  className=" nav-btn text-center">
          <NavDropdown.Item  as={Link} to="/products/categoryFood" >Show Products</NavDropdown.Item>
          <NavDropdown.Item  as={Link} to="/products/getSingleProductByName2" >Search Product</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to="/products/categoryClothing" className="text-center">
            What's New
              <p id="newhead" className="row p-1  mx-auto justify-content-center align-items-center">Hot deals!</p>
          </NavDropdown.Item>
        </NavDropdown>
        </Nav>
         <Nav className="">
        <Nav.Link as={Link} to="/register"  className="nav-btn text-center">Register</Nav.Link>
        <Nav.Link as={Link} to="/login"  className="nav-btn text-center">LOGIN</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

</>





	)
}

