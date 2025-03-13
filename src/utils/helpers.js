import { statusConfig } from '../constants/statsConfig'

export const getStatus = status => {
	return statusConfig[status] || { text: 'Unknown', bgColor: 'bg-gray-500' }
}

export const getStats = data => [
	{ label: 'Points', value: `+${data.points}` },
	{ label: 'Место', value: data.place },
	{ label: 'Всего убийств', value: data.totalKills },
]

export const formatMatchData = match => ({
	homeTeamName: match.homeTeam.name,
	awayTeamName: match.awayTeam.name,
	homeScore: match.homeScore,
	awayScore: match.awayScore,
	status: match.status,
	players: match.homeTeam.players.map((player, i) => ({
		id: i,
		name: player.username,
		kills: player.kills,
		avatar: '',
	})),
	points: match.homeTeam.points,
	rank: match.homeTeam.place,
	totalKills: match.homeTeam.total_kills,
})
