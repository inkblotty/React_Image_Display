const React = require('react');
const Link = require('react-router').Link;

const Thumbnail = props => {
	let pathname = `carousel/${props.imgIndex}`;

	if (!props.fromCarousel) {
		return (
			<div className="thumb-wrapper">
				<Link to={pathname} >
				<img src={props.imgSrc} className="thumb-img" />
				</Link>
			</div>
		)
	}
	else {
		return (
			<div className="thumb-wrapper">
				<img src={props.imgSrc} className="thumb-img" />
			</div>
		)
	}
}

module.exports = Thumbnail;