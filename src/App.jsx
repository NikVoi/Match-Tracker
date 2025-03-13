import Header from './components/Header'
import List from './components/List'
import { MatchProvider } from './context/MatchContext'

function App() {
	return (
		<MatchProvider>
			<main className='container mx-auto'>
				<Header />
				<List />
			</main>
		</MatchProvider>
	)
}

export default App
