import React from 'react';
import logo from '../logo.svg';


const Header = (props) => {
	return (
			<div className="App-header">
				<div className="App-header-inner">
					{/*<img src={logo} className="App-logo" alt="logo" />*/}
					<h2>{props.title}</h2>
				</div>
			</div>
	);
}


export default Header;