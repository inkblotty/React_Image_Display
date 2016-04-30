const React = require('react');
const ImgArray = require('../imagesArray');
const Thumbnail = require('./Thumbnail');

const SliderImages = props => {
	let ThumbItems = ImgArray.map((item, index) => {
		let key=`slider-thumb${index}`;
		let url=`../${item}`;

		return (
			<li key={key}>
				<Thumbnail imgSrc={url} fromCarousel='true' imgIndex={index} />
			</li>
		)
	});

	return (
		<ul className='slider-img-container'>
			{ThumbItems}
		</ul>
	)
};

module.exports = SliderImages;