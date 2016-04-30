const React = require('react');
const ImgArray = require('../imagesArray');
const ThumbSlider = require('./ThumbSlider');
const Link = require('react-router').Link

const Carousel = props => {
	var currentImg = props.routeParams ? ImgArray[props.routeParams.imgIndex] : ImgArray[0];

	// previous when on the first img will route to last, etc.
	let prevImgIndex = Number(props.routeParams.imgIndex) > 0 ?
		(Number(props.routeParams.imgIndex) - 1).toString() :
		ImgArray.length - 1;
	let nextImgIndex = Number(props.routeParams.imgIndex) < ImgArray.length-1 ?
		(Number(props.routeParams.imgIndex) + 1).toString() :
		0;

	let prevLink = `/carousel/${prevImgIndex}`;
	let nextLink = `/carousel/${nextImgIndex}`;

	currentImg = '../' + currentImg;

	return (
		<div className="carousel-container">
			<div className="lightbox">
				<Link to={prevLink} className="arrow left">
					<i className="fa fa-caret-left" />
				</Link>
				<div className="big-img-wrapper">
					<img className="big-img" src={currentImg} />
				</div>
				<Link to={nextLink} className="arrow right">
					<i className="fa fa-caret-right" />
				</Link>
			</div>
			<ThumbSlider currentImg={currentImg} />
		</div>
	)
}

module.exports = Carousel;