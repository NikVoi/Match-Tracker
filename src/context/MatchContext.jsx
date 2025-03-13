import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from 'react'
import { fetchMatchesFromAPI } from '../services/api'

const MatchContext = createContext()

export const MatchProvider = ({ children }) => {
	const [matches, setMatches] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	const fetchMatches = useCallback(async () => {
		setLoading(true)
		setError(null)

		try {
			const data = await fetchMatchesFromAPI()

			console.log(data)

			setTimeout(() => {
				setMatches(data)
				setLoading(false)
			}, 3000)
		} catch (err) {
			setTimeout(() => {
				setError(err.message)
				setLoading(false)
			}, 3000)
		}
	}, [])

	useEffect(() => {
		fetchMatches()
	}, [fetchMatches])

	return (
		<MatchContext.Provider value={{ matches, loading, error, fetchMatches }}>
			{children}
		</MatchContext.Provider>
	)
}

export const useMatches = () => useContext(MatchContext)
