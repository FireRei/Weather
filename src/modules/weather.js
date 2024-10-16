async function getWeatherData(key, location, params) {
	try {
		const weatherAPI = "http://api.weatherapi.com/v1/" + params + "?key=" + key + "&q=" + location
		let weatherResponse = await fetch(weatherAPI)
		let weatherData = await weatherResponse.json()
		return weatherData
	} catch (error) {
		console.log(error)
	}
}

async function showWeatherData(key = "", location, params = "current.json") {
	try {
		let weatherData = await getWeatherData(key, location, params)
		return weatherData
	} catch(error) {
		console.log(error)
	}
}

export {
	showWeatherData
}