const React = require('react');
const ImgArray = require('../imagesArray');

const Carousel = props => {
	var currentImg = props.routeParams ? ImgArray[props.routeParams.imgIndex] : ImgArray[0];
	currentImg = '../' + currentImg;

	return (
		<div className="carousel-container">
			<div className="lightbox">
				<div className="arrow left">
					<i className="fa fa-caret-left" />
				</div>
				<div className="big-img-wrapper">
					<img className="big-img" src={currentImg} />
				</div>
				<div className="arrow right">
					<i className="fa fa-caret-right" />
				</div>
			</div>
			<div className="slider-img-container">
			</div>
		</div>
	)
}

module.exports = Carousel;