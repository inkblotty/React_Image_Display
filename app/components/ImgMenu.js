const React = require('react');
const Link = require('react-router').Link;

const ImgMenu = props => {
	return (
		<div>
			<div className='image-menu'>
				<Link to='/' className='btn menu-btn'>
					<span className='fa fa-th' />
				</Link>
				<Link to='/carousel/1' className='btn menu-btn'>
					<span className='fa fa-picture-o' />
				</Link>
			</div>
			{props.children}
		</div>
	)
}

module.exports = ImgMenu;