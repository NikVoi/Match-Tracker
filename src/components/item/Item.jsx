import React, { useMemo, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { getStats } from '../../utils/helpers'
import CardStatus from './CardStatus'
import PlayerCard from './PlayerCard'
import StatsRow from './StatsRow'

const Item = React.memo(({ data }) => {
	const [isOpen, setIsOpen] = useState(false)

	const stats = useMemo(() => getStats(data), [data])

	return (
		<div
			className={`w-full bg-[#0F1318] my-2 px-4 py-4 rounded-lg cursor-pointer duration-200 hover:bg-[#11161D] active:bg-[#0D1115] ${
				isOpen ? 'bg-[#11161D]' : ''
			}`}
			onClick={() => setIsOpen(!isOpen)}
		>
			<div className='flex justify-between items-center'>
				<div className='flex items-center'>
					<img src='/icon.png' alt='icon' className='mr-2' />
					<span>{data.homeTeamName}</span>
				</div>

				<CardStatus
					status={data.status}
					homeScore={data.homeScore}
					awayScore={data.awayScore}
				/>

				<div className='flex items-center'>
					<span>{data.awayTeamName}</span>
					<img src='/icon.png' alt='icon' className='mx-2' />
					<IoIosArrowDown
						className={`text-xl duration-500 transform ${
							isOpen ? 'rotate-180' : 'rotate-0'
						}`}
					/>
				</div>
			</div>

			<section
				className={`overflow-hidden transition-[max-height] mt-2 duration-1000 ${
					isOpen ? 'max-h-96' : 'max-h-0'
				}`}
			>
				<div className='mt-4 flex justify-between gap-2'>
					<div className='w-[49%]'>
						<div className='flex  gap-2'>
							{data.players
								.filter(player => player.team === 'home')
								.map(player => (
									<PlayerCard key={player.id} player={player} />
								))}
						</div>
						<StatsRow
							stats={[
								{ label: 'Points', value: data.points.home },
								{ label: 'Rank', value: data.rank.home },
								{ label: 'Total Kills', value: data.totalKills.home },
							]}
						/>
					</div>

					<div className='w-[49%]'>
						<div className='flex  gap-2'>
							{data.players
								.filter(player => player.team === 'away')
								.map(player => (
									<PlayerCard key={player.id} player={player} />
								))}
						</div>
						<StatsRow
							stats={[
								{ label: 'Points', value: data.points.away },
								{ label: 'Rank', value: data.rank.away },
								{ label: 'Total Kills', value: data.totalKills.away },
							]}
						/>
					</div>
				</div>
			</section>
		</div>
	)
})

export default Item
