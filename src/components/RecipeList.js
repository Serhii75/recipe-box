import React from 'react';
import { Row, Clearfix } from 'react-bootstrap';
import RecipeCard from './RecipeCard';

export default class RecipeList extends React.Component {
	render() {
		let recipes = [];

		const filtered = this.props.recipes.filter(recipe => 
			recipe.title.toLowerCase().indexOf(this.props.filterText) !== -1
		);

		filtered.forEach((recipe, i) => {
			if (i !== 0 && parseInt(i, 10) % 2 === 0) {
				recipes.push(<Clearfix visibleSmBlock key={Date.now()+i} />);
			}
			if (i !== 0 && parseInt(i, 10) % 3 === 0) {
				recipes.push(<Clearfix visibleMdBlock visibleLgBlock key={Date.now()+i} />);
			}
			recipes.push(
				<RecipeCard 
					key={recipe.id} 
					id={recipe.id} 
					recipe={recipe} 
					onEdit={this.props.onEdit}
					onDelete={this.props.onDelete}
				/>
			);
		});

		return (
			<Row>{recipes}</Row>
		);
	}
}