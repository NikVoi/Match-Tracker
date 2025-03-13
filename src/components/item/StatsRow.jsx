import React from 'react'

const StatsRow = React.memo(({ stats }) => (
	<div className='bg-[#101318] flex justify-between px-6 py-2 mt-2 rounded-sm'>
		{stats.map((stat, index) => (
			<div key={index} className='w-[33%] flex justify-center'>
				<span className='opacity-50 mr-2'>{stat.label}:</span>
				<span>{stat.value}</span>
			</div>
		))}
	</div>
))

export default StatsRow
