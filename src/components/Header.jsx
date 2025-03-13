import { BiError } from 'react-icons/bi'
import { useMatches } from '../context/MatchContext'
import Button from './ui/Button'

const Header = () => {
	const { error, fetchMatches, loading } = useMatches()

	return (
		<section className='flex justify-between mt-4 mb-10'>
			<h1 className='text-3xl font-bold'>Match Tracker</h1>

			<div className='flex'>
				{error && (
					<div className='flex items-center p-2 rounded-sm bg-[#0F1318] mr-5'>
						<BiError className='text-red-600 mr-2 text-xl' />
						<span>{error}</span>
					</div>
				)}

				<Button text='Обновить' onClick={fetchMatches} loading={loading} />
			</div>
		</section>
	)
}

export default Header
