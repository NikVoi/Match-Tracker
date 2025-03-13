import React from 'react'
import { getStatus } from '../../utils/helpers'

const CardStatus = React.memo(({ status, homeScore, awayScore }) => {
	const { text, bgColor } = getStatus(status)

	return (
		<div className='flex flex-col items-center'>
			<div className='mb-2'>
				{homeScore}:{awayScore}
			</div>
			<div className={`px-8 py-1 ${bgColor} rounded-lg text-white font-bold`}>
				{text}
			</div>
		</div>
	)
})

export default CardStatus
