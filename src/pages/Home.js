import { Fragment } from 'react'
import {useContext,  useState } from 'react'
import {Button, Modal, Row} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import Banner from '../components/Banner'
import Highlights from '../components/Highlights'
import AdminHome from '../components/AdminHome'
import Advertisement from '../components/Advertisement'
import UserContext from '../UserContext'

//import LogDisplay from './components/LogDisplay'

export default function Home () {

const [style] = useState({

		width: "10rem",
		height: "10rem",
		objectFit: "cover"
		
	})

const time = new Date().getHours();

let greeting;

if (time < 10) {
  greeting = "Good morning!";
} else if (time < 18) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

const {user} = useContext(UserContext)
  //console.log(user)
function Example() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);



  return (
    <>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        className="myModal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="newfont">{greeting}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="background-play">
         <h5 className="text-center text-danger">Mabuhay!</h5>
         <p>Today is May 9, 2022 Monday. Philippine National Elections 2022</p>


   			<p className="text-center">One Vote can Make a Difference. Vote Wisely!</p>

   			<Row className=" text-center justify-content-center">
   			<Image src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/13/08/Philippines-elections.jpg?width=1200" className="text-center mx-2 shadowbox rounded-circle" style={style}/>
   			<Image src="http://assets.rappler.com/612F469A6EA84F6BAE882D2B94A4B421/img/47FCFE6D14334A7BACE50FB09464A2F8/voter-ballot-20160605-1.jpg" className="text-center mx-2 shadowbox rounded-circle" style={style}/>
   			</Row>
   			<p className="text-secondary mt-5">A Friendly reminder from ShopNetwork</p>

        </Modal.Body>
        <Modal.Footer>
      
        <Button variant="info" onClick={handleClose}>
            Got It!
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

	return (
		<Fragment>

		{(user.isAdmin === true ) ?

		<AdminHome/>

		:
		<>
			{/*<LogDisplay/>*/}
			<Banner/>
			<Highlights/>
			<Advertisement/>

			<Example/>

			
		</>	
		}
		</Fragment>


		)
}