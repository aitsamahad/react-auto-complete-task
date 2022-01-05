import axios from "axios"

type SearchResponse = {
	id: string
	source: string
	address: string
	formatted: string
	area: string
	lat: string
	lng: string
}

export const searchLocation = async (query: string): Promise<SearchResponse[]> => {
	const { status, data } = await axios.get(`https://aitsamahad.dev/api/location?search=${query}`)

	if (status === 200) return data?.data
	return []
}
