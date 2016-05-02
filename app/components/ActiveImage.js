const React = require('react');

const ActiveImage = props => {
	return (
		<div className="big-img-wrapper">
			<img className="big-img" src={props.src}/>
		</div>
	)
}

module.exports = ActiveImage;