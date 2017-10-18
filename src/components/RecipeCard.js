import React from 'react';
import { Col, Thumbnail, Button } from 'react-bootstrap';

export default class RecipeCard extends React.Component {
	render() {
		return (
			<Col sm={6} md={4}>
				<Thumbnail src={this.props.recipe.img} alt={this.props.recipe.title}>
					<h3>{this.props.recipe.title}</h3>
					<p>Ingredients: {this.props.recipe.ingredients}</p>
					<p>
						<Button 
							bsStyle="danger" 
							bsSize="small"
							onClick={() => this.props.onDelete(this.props.recipe)}
						>
							Delete
						</Button>
						<Button 
							bsStyle="primary" 
							bsSize="small"
							className="pull-right"
							onClick={() => this.props.onEdit(this.props.recipe)}
						>
							Edit
						</Button>&nbsp;
					</p>
				</Thumbnail>
			</Col>
		);
	}
}
