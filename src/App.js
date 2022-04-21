import { useState, useEffect} from 'react'
import { Container } from 'react-bootstrap'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import CourseView from './components/CourseView'
import OrderViewFull from './components/OrderViewFull'
import AppNavbar from './components/AppNavbar'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Logout from './pages/Logout'
import ErrorPage from './pages/Error'
import Footer from './components/Footer'
import './App.css';
// import Banner from './components/Banner'
// import Highlights from './components/Highlights'
import Courses from "./pages/Courses"
import AdminMessages from "./pages/AdminMessages"
import UserMessages from "./pages/UserMessages"
import AdminMessagesClear from "./pages/AdminMessagesClear"
import UserMessagesClear from "./pages/UserMessagesClear"
import AdminCreateProd from "./pages/AdminCreateProd"
import AdminModifyProd from "./components/AdminModifyProd"
import UserOrders from "./pages/UserOrders"
import UserTransactions from "./pages/UserTransactions"
import CategoryFood from "./pages/CategoryFood"
import CategoryClothing from "./pages/CategoryClothing"
import CategoryMachines from "./pages/CategoryMachines"
import ClearOrder from './pages/ClearOrder'
import ClearMessage from './pages/ClearMessage'
import PublicMessage from './pages/PublicMessage'
import UserPvtMessages from './pages/UserPvtMessages'
import CartOrder from './pages/CartOrder'
import PayOrder from './components/PayOrder'
import CancelOrder from './components/CancelOrder'
import SearchItem from './pages/SearchItem'
import SearchItem2 from './pages/SearchItem2'
import AdminProducts from "./pages/AdminProducts"
import SearchOrder from './pages/SearchOrder'
import RefreshLog from './pages/RefreshLog'
import About from './pages/About'

import { UserProvider } from './UserContext'

function App() {

  const [user, setUser] = useState({id: null, isAdmin: null})

  const unsetUser = () => {
    localStorage.clear()
  }




useEffect(() => {
  fetch('https://immense-lake-17505.herokuapp.com/users/details', {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)

    if(typeof data !== "undefined") {
      setUser({
        id: data._id,
        isAdmin: data.isAdmin
      })
    }else {
      setUser({
      id: null,
      isAdmin: null
      })
     
    }
  })
}, [])
  return (
    <UserProvider value={{user, setUser, unsetUser}}>
    <Router>
      <AppNavbar/>
      
      <Container id="top" className="pb-5">
      <Routes>
{/*v5 routing
  <route eact path ="/" component={Page}/>
*/}
       {/* <Banner/>
        <Highlights/>*/}
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/courses" element={<Courses/>}/>
        <Route exact path="/messages/AdminMes" element={<AdminMessages/>}/>
        <Route exact path="/messages/UserMes" element={<UserMessages/>}/>
        <Route exact path="/messages/AdminMesClear" element={<AdminMessagesClear/>}/>
        <Route exact path="/messages/UserMesClear" element={<UserMessagesClear/>}/>
        <Route exact path="/courses/categoryFood" element={<CategoryFood/>}/>
        <Route exact path="/courses/categoryClothing" element={<CategoryClothing/>}/>
        <Route exact path="/courses/categoryMachines" element={<CategoryMachines/>}/>
        <Route exact path="/products/:courseId" element={<CourseView/>}/>
        <Route exact path="/products/getSingleProductByName" element={<SearchItem/>}/>
        <Route exact path="/products/getSingleProductByName2" element={<SearchItem2/>}/>
        <Route exact path="/products/orderFull/:courseId" element={<OrderViewFull/>}/>
        <Route exact path="/products/adminProducts" element={<AdminProducts/>}/>
        <Route exact path="/products/addProducts" element={<AdminCreateProd/>}/>
        <Route exact path="/products/modifyProducts/:courseId" element={<AdminModifyProd/>}/>
        <Route exact path="/orders" element={<UserOrders/>}/>
        <Route exact path="/orders/clearOrder" element={<ClearOrder/>}/>
        <Route exact path="/orders/searchOrder" element={<SearchOrder/>}/>
        <Route exact path="/orders/payOrder/:courseId" element={<PayOrder/>}/>
        <Route exact path="/orders/cancelOrder/:courseId" element={<CancelOrder/>}/>
        <Route exact path="/orders/getCart" element={<CartOrder/>}/>
        <Route exact path="/orders/getUserTransactions" element={<UserTransactions/>}/>
        {/*<Route exact path="/orders/:courseId" element={<UserOrders/>}/>*/}
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/refresh" element={<RefreshLog/>} />
        <Route exact path="/messages" element={<PublicMessage/>} />
        <Route exact path="/messages/clearMessage" element={<ClearMessage/>} />
        <Route exact path="/messages/newMessage" element={<UserPvtMessages/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="*" element={<ErrorPage/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
    </UserProvider>
    )
}

export default App;
