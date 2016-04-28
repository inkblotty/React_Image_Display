const React = require('react');
const Router = require('react-router').Router;
const Route = require('react-router').Route;
const Link = require('react-router').Link;
const IndexRoute = require('react-router').IndexRoute;
const browserHistory = require('react-router').browserHistory;

const ImgMenu = require('./ImgMenu');
const Thumbs = require('./Thumbs');
const Carousel = require('./Carousel');

const App = props => {
	return (
		<Router history={browserHistory}>
			<Route path="/" component={ImgMenu} >
				<IndexRoute component={Thumbs} />
				<Route path="carousel" component={Carousel} />
			</Route>
		</Router>
	)
}

module.exports = App;