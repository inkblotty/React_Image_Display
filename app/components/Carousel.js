const React = require('react');
const ImgArray = require('../imagesArray');
const ThumbSlider = require('./ThumbSlider');
//const ActiveImage = require('./ActiveImage');
const Link = require('react-router').Link;

const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Carousel = React.createClass({
	getInitialState: function() {
		return {
			currentIndex: this.props.routeParams.imgIndex,
			currentImg: ImgArray[this.props.routeParams.imgIndex]
		}
	},
	prevImage: function() {
		this.setState({
			currentIndex: this.state.currentIndex > 0 ?
				Number(this.state.currentIndex) - 1 : ImgArray.length - 1,
			currentImg: this.state.currentIndex > 0 ?
				ImgArray[Number(this.state.currentIndex) - 1]
				: ImgArray[ImgArray.length - 1]
		})
	},
	nextImage: function() {
		this.setState({
			currentIndex: this.state.currentIndex < ImgArray.length-1 ?
				Number(this.state.currentIndex) + 1 : 0,
			currentImg: this.state.currentIndex < ImgArray.length-1 ?
				ImgArray[Number(this.state.currentIndex) + 1] : ImgArray[0]
		});
	},
	render: function() {
		let currentImg = '../' + this.state.currentImg;
		//let key = `big-img-wrap${this.state.currentIndex}`;

		return (
			<div className="carousel-container">
				<div className="lightbox">
					<div onClick={this.prevImage} className="arrow left">
						<i className="fa fa-caret-left" />
					</div>
					<ReactCSSTransitionGroup
						className='big-img-wrapper'
						transitionName="slide"
						transitionEnterTimeout={1000}
						transitionLeaveTimeout={1000}
						transitionAppear={false}>
							<img className='big-img' src={currentImg} key={currentImg}/>
					</ReactCSSTransitionGroup>
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