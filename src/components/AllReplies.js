import { useContext} from 'react'
import { Container } from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import person from './person.jpg'
import botchan from './botchan.jpg'
import UserContext from '../UserContext'

export default function Replies({chatProp}) {

	const {user} = useContext(UserContext)

	const {contentA, sender, receiver, dateSent, view} = chatProp


	return(

		(sender === user.id)?

		<>
		<Container className="p-0 m-0 text-end">
		
		<span className="rounded chatreply p-2 d-inline-block marginR bg-primary text-light mt-1" title={dateSent}>{contentA}</span>
		<Image src={person} className="botchan rounded-circle mx-2" title="Hi there!"/><br/>
		</Container>
		</>
		
		:(receiver === user.id)?

		<>
		<Container className="p-0 m-0">
		<Image src={person} className="botchan rounded-circle mx-2" title="Hi there!"/>
		<span className="rounded chatreply p-2 d-inline-block marginL"  title={dateSent}>{contentA}</span><br/>
		</Container>
		</>

		:

		<>
		<Container className="p-0 m-0">
		<Image src={person} className="botchan rounded-circle mx-2" title="Hi there!"/>
		<span className="rounded chatreply p-2 d-inline-block marginL"  title={dateSent}>{contentA}</span><br/>
		</Container>
		</>
		
		)
}