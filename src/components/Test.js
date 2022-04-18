import { Container, InputGroup, FormControl } from 'react-bootstrap'

export default function Test () {
	return (
		<Container className="text-center border border-secondary mb-5">
		<h2>Test Content</h2>
		<p>This is a test</p>

		<p>Input text</p>
		<>
		<InputGroup className="mb-3">
    	<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
    	<FormControl
      		placeholder="Username"
      		aria-label="Username"
      		aria-describedby="basic-addon1"
    	/>
  		</InputGroup>
  		</>

		</Container>
		)

}