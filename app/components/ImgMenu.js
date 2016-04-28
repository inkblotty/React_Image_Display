const React = require('react');
const Link = require('react-router').Link;

const ImgMenu = props => {
	return (
		<div>
			<div className='image-menu'>
				<Link to='/' className='btn menu-btn'>
					<i className='fa fa-th' />
				</Link>
				<Link to='/carousel' className='btn menu-btn'>
					<i className='fa fa-picture-o' />
				</Link>
			</div>
			{props.children}
		</div>
	)
}

module.exports = ImgMenu;