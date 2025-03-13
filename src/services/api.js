const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const fetchMatchesFromAPI = async () => {
	try {
		const response = await fetch(`${API_BASE_URL}/fronttemp`)
		if (!response.ok) {
			throw new Error('Ошибка: не удалось загрузить информацию')
		}
		const result = await response.json()
		return result.data.matches
	} catch (error) {
		throw new Error(error.message)
	}
}
