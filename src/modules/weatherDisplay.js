function displayWeather(weatherData) {
	const weatherDiv = document.querySelector(".weather")
	let weatherCondition = document.createElement("h1")
	console.log(weatherData)
	weatherCondition.classList.add("font-bold", "text-lg", "text-center", "weatherCondition")
	let location = document.createElement("h2")
	location.classList.add("text-center", "location")
	let timeElement = document.createElement("h2")
	timeElement.classList.add("text-center", "font-bold", "mt-5", "time")
	let weatherIcon = document.createElement("img")
	weatherIcon.classList.add("mr-auto", "ml-auto", "w-[128px]", "h-auto", "weatherIcon")
	let temperature = document.createElement("h1")
	temperature.classList.add("font-bold", "text-center", "temperature")
	let otherData = document.createElement("p")
	otherData.classList.add("text-center", "otherData")
	weatherDiv.appendChild(weatherCondition)
	weatherDiv.appendChild(location)
	weatherDiv.appendChild(timeElement)
	weatherDiv.appendChild(weatherIcon)
	weatherDiv.appendChild(temperature)
	weatherDiv.appendChild(otherData)
	updateWeather(weatherData)
}

function updateWeather(weatherData) {
	const weatherCondition = document.querySelector(".weatherCondition")
	const location = document.querySelector(".location")
	const timeElement = document.querySelector(".time")
	let time = weatherData.current.last_updated.split(" ")
	time = time[1]
	const weatherIcon = document.querySelector(".weatherIcon")
	const temperature = document.querySelector(".temperature")
	const otherData = document.querySelector(".otherData")
	weatherCondition.textContent = weatherData.current.condition.text
	location.textContent = weatherData.location.name
	timeElement.textContent = time
	weatherIcon.src = "https:" + weatherData.current.condition.icon
	temperature.textContent = weatherData.current.temp_c + "°C"
	otherData.innerHTML = `Humidity: <strong>${weatherData.current.humidity}%</strong>	Wind: <strong>${weatherData.current.wind_kph}kph</strong>`
}



export {
	displayWeather,
	updateWeather
}