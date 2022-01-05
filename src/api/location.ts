import axios from "axios"
let cancelToken

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
	if (typeof cancelToken != typeof undefined) {
		cancelToken.cancel("Aborting previous req.")
	}
	cancelToken = axios.CancelToken.source()
	try {
		const { status, data } = await axios.get(`https://aitsamahad.dev/api/location?search=${query}`, {
			cancelToken: cancelToken.token,
		})

		if (status === 200) return data?.data
		return []
	} catch (err) {
		return []
	}
}
