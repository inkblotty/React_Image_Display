const React = require('react');
const Thumbnail = require('./Thumbnail');
const SliderImages = require('./SliderImages');
const Link = require('react-router').Link;
const ImgArray = require('../imagesArray');

const ThumbSlider = React.createClass({
	getInitialState: function() {
		return {
			activeRange: [0, 5],
			slideClass: 'slide'
		}
	},
	scrollRight: function() {
		if (this.state.activeRange[1] + 6 > ImgArray.length-1) {
			this.setState({
				activeRange: [ImgArray.length-6, ImgArray.length-1]
			})
		}
		else {
			this.setState({
				activeRange: [this.state.activeRange[0]+6, this.state.activeRange[1]+6]
			})
		}
	},
	scrollLeft: function() {
		if (this.state.activeRange[0] - 6 < 0) {
			this.setState({
				activeRange: [0, 5]
			})
		}
		else {
			this.setState({
				activeRange: [this.state.activeRange[0]-6, this.state.activeRange[1]-6]
			})
		}
	},
	render: function() {
		return (
			<div className='slider-container'>
				<div onClick={this.scrollLeft} className="little arrow right">
					<i className="fa fa-caret-left" />
				</div>

				<SliderImages slideClass={this.state.slideClass} activeRange={this.state.activeRange} active={this.props.currentImg} />

				<div onClick={this.scrollRight} className="little arrow right">
					<i className="fa fa-caret-right" />
				</div>
			</div>
		)
	}
})

module.exports = ThumbSlider;