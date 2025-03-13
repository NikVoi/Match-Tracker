import React from 'react'

const PlayerCard = React.memo(({ player }) => (
	<div className='px-4 py-2 rounded-sm flex justify-between bg-[#101318] text-sm md:text-base lg:text-lg w-full'>
		<div className='flex items-center min-w-0'>
			<img
				src={player.avatar || '/avatar_global.png'}
				alt='avatar'
				width='36'
				className='shrink-0'
			/>
			<span className='ml-2 truncate w-full'>{player.name}</span>
		</div>
		<div className='flex items-center'>
			<span className='opacity-50 mr-2'>Убийств:</span>
			<span>{player.kills}</span>
		</div>
	</div>
))

export default PlayerCard
