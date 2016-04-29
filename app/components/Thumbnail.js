const React = require('react');
const Link = require('react-router').Link;

const Thumbnail = props => {
	let pathname = `carousel/${props.imgIndex}`;

	return (
		<div className="thumb-wrapper">
			<Link to={pathname} >
			<img src={props.imgSrc} className="thumb-img" />
			</Link>
		</div>
	)
}

module.exports = Thumbnail;