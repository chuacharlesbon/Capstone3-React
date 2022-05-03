import { Container } from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import person from './person.jpg'
import botchan from './botchan.jpg'

export default function Replies({chatProp}) {

	const {content, adminContent} = chatProp


	return(
		<>
		<Container className="p-0 m-0 text-end">
		<Image src={person} className="botchan rounded-circle mx-2" title="Hi there!"/>
		<span className="rounded-pill chatreply p-1 d-inline-block marginR bg-primary text-light mt-1">{content}</span><br/>
		</Container>
		
		<Container className="p-0 m-0">
		<Image src={botchan} className="botchan" title="Hi there!"/>
		<span className="rounded chatreply p-2 d-inline-block marginL">{adminContent}</span><br/>
		</Container>

		<Container className="p-0 my-1">

		<Image src={botchan} className="botchan" title="Hi there!"/>
		<span className="rounded-pill chatreply p-2 d-inline-block">How can I help you?</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(A)How to Get Started</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(B)How to Buy Products</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(C)Transaction Error</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(D)Order Concerns (Track, Status, Refund)</span><br/>
		<span className="rounded-pill chatreply p-2 d-inline-block marginL">(E)Need Assistance</span><br/>
		</Container>
		</>
		)
}