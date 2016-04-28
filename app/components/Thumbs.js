const React = require('react');
const ImgArray = require('../imagesArray');
const Thumbnail = require('./Thumbnail');

const Thumbs = props => {
	let ThumbItems = ImgArray.map((item, index) => {
		let key=`thumb${index}`;
		return (
			<li key={key}><Thumbnail imgSrc={item} /></li>
		)
	});

	return (
		<ul className="thumb-container">
			{ThumbItems}
		</ul>
	)
}

module.exports = Thumbs;