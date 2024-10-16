import { showWeatherData } from "./modules/weather"
import { displayWeather, updateWeather } from "./modules/weatherDisplay"

let key = "6c72ed21cfdd45b0a0752337231909"

async function init(location = "Kuala Lumpur") {
	try {
		let weatherData = await showWeatherData(key, location)
		if (weatherData.error) return alert(weatherData.error.message)
		if (document.querySelector(".weatherCondition" != null) || document.querySelector(".weatherCondition" != undefined)) {
			updateWeather(weatherData)
			return
		}
		displayWeather(weatherData)
	} catch(error) {
		console.log(error)
	}
}

function locationSearch() {
	const locationSearch = document.querySelector(".locationSearch")
	locationSearch.addEventListener("keypress", function(event) {
		if (event.key == "Enter") {
			event.preventDefault
			init(event.target.value)
			event.target.value = ""
		}
	})
}
locationSearch()

init()
