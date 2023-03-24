import React, { useState } from 'react'
import axios from 'axios'

const MinecraftPlayerList = () => {
	const [playerName, setPlayerName] = useState('')
	const [players, setPlayers] = useState([])

	const handlePlayerNameChange = (e) => {
		setPlayerName(e.target.value)
	}

	const handleAddPlayer = async () => {
		try {
			const response = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${playerName}`)

			const newPlayer = {
				name: response.data.name,
				uuid: response.data.id,
				isAdmin: false,
			}

			setPlayers([...players, newPlayer])
		} catch (error) {
			alert('Player not found!')
		}

		setPlayerName('')
	}

	const handleDeletePlayer = (uuid) => {
		setPlayers(players.filter((player) => player.uuid !== uuid))
	}

	const handleToggleAdmin = (uuid) => {
		setPlayers(players.map((player) => (player.uuid === uuid ? { ...player, isAdmin: !player.isAdmin } : player)))
	}

	return (
		<div className="minecraft-player-list-container">
			<h1 className="minecraft-player-list-heading">Minecraft Player List</h1>
			<div className="minecraft-player-list-form">
				<input
					className="minecraft-player-list-input"
					type="text"
					placeholder="Enter player name"
					value={playerName}
					onChange={handlePlayerNameChange}
				/>
				<button className="minecraft-player-list-button" onClick={handleAddPlayer}>
					Add Player
				</button>
			</div>

			<div className="minecraft-player-list-grid">
				{players.map((player) => (
					<div className="minecraft-player-list-card" key={player.uuid}>
						<img className="minecraft-player-list-avatar" src={`https://crafatar.com/avatars/${player.uuid}`} alt="" />
						<div className="minecraft-player-list-name">{player.name}</div>
						{player.isAdmin ? (
							<button className="minecraft-player-list-admin-button" onClick={() => handleToggleAdmin(player.uuid)}>
								Remove Admin
							</button>
						) : (
							<button className="minecraft-player-list-admin-button" onClick={() => handleToggleAdmin(player.uuid)}>
								Make Admin
							</button>
						)}
						<button className="minecraft-player-list-delete-button" onClick={() => handleDeletePlayer(player.uuid)}>
							Delete Player
						</button>
						{player.isAdmin && <div className="minecraft-player-list-admin-indicator">Admin</div>}
					</div>
				))}
			</div>
		</div>
	)
}

export default MinecraftPlayerList
