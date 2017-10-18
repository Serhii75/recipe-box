import React from 'react';
import { Grid } from 'react-bootstrap';
import HeaderNav from './HeaderNav';
import AddRecipe from './AddRecipe';
import RecipeList from './RecipeList';
import RecipeForm from './RecipeForm';
import Footer from './Footer';

export default class RecipeBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			recipesToDisplay: [],
			edited: {},
			showModal: false,
			filterText: ''
		};

		this.closeModal = this.closeModal.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleForm = this.handleForm.bind(this);
		this.handleSave = this.handleSave.bind(this);
	}

	componentDidMount() {
		this.setState({ recipesToDisplay: this.props.recipes });
	}

	closeModal() {
		this.setState({ 
			showModal: false,
			edited: {}
		});
	}

	handleSearch(needle) {
		this.setState({ filterText: needle });
	}

	handleForm(recipe) {
		const edited = recipe.id ? recipe : {};
		this.setState({
			showModal: true,
			edited: edited
		});
	}

	removeRecipe(recipe) {
		return this.state.recipesToDisplay.filter(item => 
			recipe.id !== item.id
		);
	}

	handleDelete(recipe) {
		const newRecipes = this.removeRecipe(recipe);

		localStorage.setItem('_Serhii75_recipes', JSON.stringify(newRecipes));
		
		this.setState({ recipesToDisplay: newRecipes });
	}

	handleSave(recipe) {
		let updatedRecipes;

		if (!recipe.id) {
			recipe.id = Date.now();
			updatedRecipes = this.state.recipesToDisplay.concat([recipe]);
		} else {
			updatedRecipes = this.state.recipesToDisplay.map(item => {
				return recipe.id === item.id ? recipe : item;
			});
		}

		localStorage.setItem('_Serhii75_recipes', JSON.stringify(updatedRecipes));
		
		this.setState({
			recipesToDisplay: updatedRecipes
		});
	}

	render() {
		return (
			<div>
				<HeaderNav onSearch={this.handleSearch} onAdd={this.handleForm} />
				<Grid className="main-content">
					<AddRecipe onAdd={this.handleForm} />
					<RecipeList 
						recipes={this.state.recipesToDisplay}
						filterText={this.state.filterText}
						onEdit={this.handleForm}
						onDelete={this.handleDelete}
					/>
				</Grid>
				<Footer />
				<RecipeForm 
					show={this.state.showModal} 
					edited={this.state.edited} 
					onClose={this.closeModal}
					onSave={this.handleSave} 
				/>
			</div>
		);
	}
}
