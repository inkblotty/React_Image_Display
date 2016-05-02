const React = require('react');
const ImgArray = require('../imagesArray');
const ThumbSlider = require('./ThumbSlider');
const Link = require('react-router').Link;

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

/* currentIndex is behaving funky */

/*
	<ReactCSSTransitionGroup
						transitionName="slide-left"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
							<img className="big-img" src={currentImg} key={currentImg}/>
						</ReactCSSTransitionGroup>
*/

const Carousel = React.createClass({
	getInitialState: function() {
		return {
			currentIndex: this.props.routeParams ? this.props.routeParams.imgIndex : 0,
			currentImg: this.props.routeParams ? ImgArray[this.props.routeParams.imgIndex] : ImgArray[0]
		}
	},
	prevImage: function() {
		this.setState({
			currentIndex: this.state.currentIndex > 0 ?
				this.state.currentIndex - 1 : ImgArray.length - 1,
			currentImg: ImgArray[this.state.currentIndex]
		})
	},
	nextImage: function() {
		this.setState({
			currentIndex: this.state.currentIndex < ImgArray.length-1 ?
				this.state.currentIndex + 1 : 0,
			currentImg: ImgArray[this.state.currentIndex]
		})
	},
	render: function() {
		let currentImg = '../' + this.state.currentImg;
		//let key = `big-img-wrap${this.state.currentIndex}`;

		return (
			<div className="carousel-container">
				{this.state.currentIndex}

				<div className="lightbox">
					<div onClick={this.prevImage} className="arrow left">
						<i className="fa fa-caret-left" />
					</div>
					<div className="big-img-wrapper">
						<img className="big-img" src={currentImg} key={currentImg}/>
					</div>
					<div onClick={this.nextImage} className="arrow right">
						<i className="fa fa-caret-right" />
					</div>
				</div>
				<ThumbSlider currentImg={currentImg} />
			</div>
		)
	}
});

module.exports = Carousel;