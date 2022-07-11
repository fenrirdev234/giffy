

const fromApiResponseToGifs = apiResponse => {
    const { data = [] } = apiResponse
    return data
}

export default function getTrendingTerms() {
    const apiURL = `${import.meta.env.VITE_API_URL}/trending/searches?api_key=${import.meta.env.VITE_GIPHY_KEY}`
    return fetch(apiURL)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}


