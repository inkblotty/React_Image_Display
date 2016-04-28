const React = require('react');

const Thumbnail = props => {
	return (
		<div className="thumb-wrapper">
			<img src={props.imgSrc} className="thumb-img" />
		</div>
	)
}

module.exports = Thumbnail;