import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div className="header">
			<div className="navbar">
				<div className="logo">
					<Link className="link" to="/">
						Minecraft
					</Link>
				</div>
				<ul className="navbar__links">
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<Link className="link" to="/players">
							Players
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Header
