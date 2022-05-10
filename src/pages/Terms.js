import {Row, Col, Container} from	'react-bootstrap'

export default function Terms(){



	return(
		<>
		<Row className="justify-content-center p-3 banner">
		<Col xs={11} md={10} lg={8}>
		<h3 className="orderbanner text-center">Terms of Use And Data Privacy</h3>
		</Col>
		</Row>

		<Row className="justify-content-center p-3 banner">
		<Col xs={11} md={10} lg={8}>
		<h6 className="orderbanner mb-3 text-center">Terms of Use</h6>
		<Container className="bg-light p-3 text-left">
		<p>Users:</p>
		<p>ShopNetwork offers free services to public non-registered users and registered users.</p>

		</Container>
		</Col>

		<Col xs={11} md={10} lg={8} >
		<h6 className="orderbanner my-3 text-center">Data Privacy</h6>
		<Container className="bg-light p-3 text-left">
		<p>Credentials:</p>
		<p>All credentials (such as passwords, bank, id ) of registered users are confidential and will NEVER be given to any authority.</p>

		</Container>
		</Col>

		<Col xs={11} md={10} lg={8} className="text-left">
		<h6 className="orderbanner mb-3"> </h6>
		<Container className="bg-light p-3 text-left">
		{/*<p>Credentials:</p>*/}
		<p>App versions:</p>
		<p>Updated: Sat May 10 2022 20:43:56 GMT+0800 (Singapore Standard Time)</p>
		
		<p>ver. 1.6.5 : Summer Themes, Upgraded Interactive User Chats</p>
		<p>ver. 1.4.2 : Upgraded ChatBot System</p>
		<p>ver. 1.3.7 : Bug fix, ChatBot System</p>
		<p>ver. 1.3.5 : Bug fix, Logs and Routing updates </p>
		<p>ver. 1.2.0 : Messaging System</p>
		<p>ver. 1.0.0</p>

		</Container>
		</Col>

		</Row>

		{/*<p>Reminders:<br/>
		A displayed name in the Options section is an indication of system working in sync with the logged in user. <br/><br/>

		Undisplayed name happens when session expires and may lead to:<br/>
		-credentials error<br/>
		-routes and redirect error<br/>
		-features/theme error<br/>
		-empty parameters<br/><br/>

		Navbar Badges require page reload to sync. But might affect log in credentials. Take caution.<br/><br/>

		Bugs:<br/>
		Capstone2 Bugs are still alive.<br/><br/>

		Dead Links: (unedited)<br/>
		"About ShopNetwork"<br/>
		"Terms and Data Privacy"</p>*/}
		
		</>


		)
}