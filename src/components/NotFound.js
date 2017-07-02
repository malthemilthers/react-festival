import React from 'react';

class NotFound extends React.Component {
	
	render() {
		return (
			<h2>"{this.props.location.pathname}" Not found!</h2>	
		)
	}
}

export default NotFound;