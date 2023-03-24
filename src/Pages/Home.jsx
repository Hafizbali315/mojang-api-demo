import axios from 'axios'
import { useState } from 'react'

const Home = () => {
	const [username, setUsername] = useState('')

	const handleUsernameChange = (event) => {
		setUsername(event.target.value)
	}

	const validatePlayer = async () => {
		try {
			const response = await axios.get(`https://api.ashcon.app/mojang/v2/user/${username} `)
			console.log(response.data)
			alert('Player is valid')
		} catch (error) {
			console.error(error)
			alert('Player is not valid')
		}
	}

	return (
		<div className="home">
			<div className="home__container">
				<input type="text" value={username} onChange={handleUsernameChange} />
				<button onClick={validatePlayer}>Validate</button>
			</div>
		</div>
	)
}

export default Home
