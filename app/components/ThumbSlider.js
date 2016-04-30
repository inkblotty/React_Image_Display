const React = require('react');
const Thumbnail = require('./Thumbnail');
const SliderImages = require('./SliderImages');
const Link = require('react-router').Link;
const ImgArray = require('../imagesArray');

const ThumbSlider = props => {
	return (
		<div className='slider-container'>
			<div className="little arrow right">
				<i className="fa fa-caret-left" />
			</div>

			<SliderImages active={props.currentImg} />

			<div className="little arrow right">
				<i className="fa fa-caret-right" />
			</div>
		</div>
	)
}

module.exports = ThumbSlider;