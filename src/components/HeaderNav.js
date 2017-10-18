import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';

export default class HeaderNav extends React.Component {
	handleSearchChange(e) {
		this.props.onSearch(e.target.value.toLowerCase());
	}

	render() {
		return(
			<Navbar fixedTop>
				<Navbar.Header>
					<Navbar.Brand>
						Recipe Box
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullRight>
						<FormGroup controlId="search">
							<FormControl 
								type="text" 
								placeholder="Search..." 
								onChange={this.handleSearchChange.bind(this)}
							/>
						</FormGroup>
					</Navbar.Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
