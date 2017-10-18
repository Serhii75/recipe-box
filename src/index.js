import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBox from './components/RecipeBox';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import './index.css';

const InitRecipes = [
	{ id: 1, title: 'Spicy California', ingredients: 'rice, spice, masaga, fila, fennel', img: 'https://image.ibb.co/mi7cKQ/sushi_01_640.jpg' },
	{ id: 2, title: 'California Tuna Roll', ingredients: 'rice, fila, cucumber, tuna, masaga, nori', img: 'https://image.ibb.co/nB92m5/sushi_02_640.jpg' },
	{ id: 3, title: 'Taibei', ingredients: 'rice, fila, salmon, tuna, avocado, sause', img: 'https://image.ibb.co/mq8v65/sushi_03_640.jpg' },
	{ id: 4, title: 'Ikura', ingredients: 'rice, salmon caviar, wasabi, cucumber, wasabi', img: 'https://image.ibb.co/kPyTR5/sushi_04_640.jpg' },
	{ id: 5, title: 'Green Dragon', ingredients: 'rice, unagi, crabmeat, cucumber, avocado', img: 'https://image.ibb.co/nEKreQ/sushi_05_640.jpg' },
	{ id: 6, title: 'Tuna roll', ingredients: 'rice, masaga, tuna, cucumber, onion, nori', img: 'https://image.ibb.co/hg3TR5/sushi_06_640.jpg' }
];

const RECIPES = JSON.parse(localStorage.getItem('_Serhii75_recipes')) || InitRecipes;

ReactDOM.render(
	<RecipeBox recipes={RECIPES} />,
	document.getElementById('root')
);
