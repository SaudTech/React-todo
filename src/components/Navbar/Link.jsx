import React from 'react'
import { Link } from 'react-router-dom';

const EachLink = (props) => {

	return (
		<Link to={`/${props.link}`}>
			<h1>{props.text}</h1>
		</Link>
	)
}

export default EachLink