import React from 'react';
import { Modal, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

export default class RecipeForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			ingredients: '',
			img: ''
		}
	}

	componentWillReceiveProps(nextProps) {
		const { id, title, ingredients, img } = nextProps.edited;
		this.setState({
			id,
			title,
			ingredients,
			img
		});
	}

	onTitleChange(e) {
		const title = e.target.value;
		this.setState({ title });
	}

	onImageUrlChange(e) {
		const img = e.target.value;
		this.setState({ img });
	}

	onIngredientsChange(e) {
		const ingredients = e.target.value;
		this.setState({ ingredients });
	}

	onSubmitClick(e) {
		e.preventDefault();
		if (this.state.title.trim() === '' || this.state.title.ingredients === '') {
			console.log('Title and ingredients are required');
		}

		this.props.onSave({
			id: this.state.id,
			title: this.state.title,
			ingredients: this.state.ingredients,
			img: this.state.img
		});

		this.setState({
			title: '',
			ingredients: '',
			img: ''
		});

		this.props.onClose();
	} 

	render() {
		const { title, ingredients, img } = this.state;

		return (
			<Modal 
				show={this.props.show}
				onHide={this.props.onClose}
			>
				<form onSubmit={this.onSubmitClick.bind(this)}>
				<Modal.Header closeButton>
					<Modal.Title>Details</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					
						<FormGroup controlId="recipeTitle">
							<ControlLabel>Title</ControlLabel>
							<FormControl 
								type="text"
								placeholder="Recipe Title"
								value={title || ''}
								onChange={this.onTitleChange.bind(this)}
							/>
						</FormGroup>
						<FormGroup controlId="recipeImageURL">
							<ControlLabel>Image URL</ControlLabel>
							<FormControl 
								type="text"
								placeholder="Recipe Image URL"
								value={img || ''}
								onChange={this.onImageUrlChange.bind(this)}
							/>
						</FormGroup>
						<FormGroup controlId="recipeIngredients">
							<ControlLabel>Ingredients</ControlLabel>
							<FormControl 
								componentClass="textarea"
								placeholder="Ingredients separated by commas"
								value={ingredients || ''}
								onChange={this.onIngredientsChange.bind(this)}
							/>
						</FormGroup>
					
				</Modal.Body>
				<Modal.Footer>
					<Button bsStyle="default" className="pull-left" onClick={this.props.onClose}>Close</Button>
					<Button bsStyle="primary" type="submit">{this.props.edited.id ? 'Edit' : 'Add'}</Button>
				</Modal.Footer>
				</form>
			</Modal>
		);
	}
}
