import { statusConfig } from '../constants/statsConfig'

export const getStatus = status => {
	return statusConfig[status] || { text: 'Unknown', bgColor: 'bg-gray-500' }
}

export const getStats = data => [
	{ label: 'Points', value: `+${data.points.home} / +${data.points.away}` },
	{ label: 'Место', value: `${data.rank.home} / ${data.rank.away}` },
	{
		label: 'Всего убийств',
		value: `${data.totalKills.home} / ${data.totalKills.away}`,
	},
]

export const formatMatchData = match => {
	const mapPlayers = (team, type) =>
		team.players.map((player, i) => ({
			id: `${type}-${i}`,
			name: player.username,
			kills: player.kills,
			team: type,
			avatar: '',
		}))

	return {
		homeTeamName: match.homeTeam.name,
		awayTeamName: match.awayTeam.name,
		homeScore: match.homeScore,
		awayScore: match.awayScore,
		status: match.status,
		players: [
			...mapPlayers(match.homeTeam, 'home'),
			...mapPlayers(match.awayTeam, 'away'),
		],
		points: { home: match.homeTeam.points, away: match.awayTeam.points },
		rank: { home: match.homeTeam.place, away: match.awayTeam.place },
		totalKills: {
			home: match.homeTeam.total_kills,
			away: match.awayTeam.total_kills,
		},
		matchTitle: match.title,
		matchTime: match.time,
	}
}
