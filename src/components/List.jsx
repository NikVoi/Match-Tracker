import { useCallback } from 'react'
import { useMatches } from '../context/MatchContext'
import { formatMatchData } from '../utils/helpers'
import Item from './item/Item'

const List = () => {
	const { matches, loading } = useMatches()

	const formattedMatches = useCallback(
		() => matches.map(formatMatchData),
		[matches]
	)

	if (loading) {
		return <div className='text-center text-gray-400'>Загрузка матчей...</div>
	}

	return (
		<section className='flex flex-col h-full'>
			{formattedMatches().length > 0 ? (
				formattedMatches().map((match, index) => (
					<Item key={index} data={match} />
				))
			) : (
				<div className='text-center text-gray-400'>Нет матчей</div>
			)}
		</section>
	)
}

export default List
