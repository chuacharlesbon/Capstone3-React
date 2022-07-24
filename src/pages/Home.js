import { Fragment } from 'react'
import {useContext,  useState } from 'react'
import {Helmet} from "react-helmet";
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
         <h5 className="text-center text-danger">It's Summer Time</h5>
         <p className="text-center">Time to checkout the New Featured Items on the Shop today!</p>


   			<p className="text-center">Summer fun has begun.</p>

   			<Row className=" text-center justify-content-center">
   			<Image src="https://www.fashionhombre.com/wp-content/uploads/2019/07/Cool-And-Stylish-Beach-Outfit-For-Men-1.png" className="text-center mx-2 shadowbox rounded-circle" style={style}/>
   			<Image src="https://i.insider.com/5d0d47d39c51010d09528d05?width=700" className="text-center mx-2 shadowbox rounded-circle" style={style}/>
   			</Row>
   			

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
      <Helmet>
        <meta
          name="title"
          content="ShopNetwork Inc. | PH" />
        <meta
          name="description"
          content="Checkout the New Featured Items on Sale today!"
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:title"
          content="ShopNetwork PH | Home"
        />
        <meta
          property="og:image"
          content="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/online-grocery-store-shopping-ad-template-design-b684c058a210822ad6fc29cb19952daf_screen.jpg?ts=1589560466"
        />
        <meta
          property="og:description"
          content="Checkout the New Featured Items on Sale today!"
        />
        <meta
          property="og:url"
          content="https://react-shopnetwork-chua.vercel.app"
        />
      </Helmet>
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