import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

export default class AddRecipe extends React.Component {
	render() {
		return (
			<Row>
				<Col sm={12}>
					<Button bsStyle="info" className="pull-right" onClick={this.props.onAdd}>
						<i className="fa fa-plus" aria-hidden="true"></i>
					</Button>
				</Col>
			</Row>
			
		);
	}
}
