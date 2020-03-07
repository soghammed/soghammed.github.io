import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
export default class ContactMe extends React.Component {
	render() {
		return (
			<section class="contactme">
				<h3 class="section-title">Contact Me</h3>
				<Form>
					<Form.Group as={Row} controlId="formHorizontalName">
						<Form.Label column sm={1}>
							Name
						</Form.Label>
						<Col sm={11}>
							<Form.Control type="text"/>
						</Col>
					</Form.Group>
					<Form.Row>
						<Col sm={6} md={6} lg={6}>
							<Form.Check
								type="radio"
								label="I'm an Individual"
								name="formHorizontalRadios"
								id="formHorizontalRadios1"/>
						</Col>
						<Col sm={6} md={6} lg={6}>
							<Form.Check
								type="radio"
								label="I'm an Organization/Company"
								name="formHorizontalRadios"
								id="formHorizontalRadios2"/>
						</Col>
					</Form.Row>
					<br/>
					<Form.Row as={Row} controlId="formHorizontalMessage">
						<Form.Label column sm={1}>
							Message
						</Form.Label>
					</Form.Row>
					<Form.Row>
						<Col sm={12}>
							<Form.Control as="textarea" rows="10"/>
						</Col>
					</Form.Row>
					<br/>
					<Button variant="outline-light">Send</Button>
				</Form>
			</section>
		)
	}
}