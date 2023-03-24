import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Theme = () => {
	return (
		<div className="theme">
			<Header />

			<Outlet />
		</div>
	)
}

export default Theme
