// Promises

function fetchWeather() {
    document.getElementById("status").textContent = "Fetching Weather...";
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.1) {
                const randomTemp = (60 + Math.random() * 20).toFixed(1);
                const randomHumidity = (30 + Math.random() * 20).toFixed(1);
                const conditions = ["☀️ Sunny", "⛅ Cloudy", "🌧️ Rainy", "☁️ Windy"];
                const randomCondition = conditions [Math.floor(Math.random() * conditions.length)];

                resolve({ temperature: randomTemp, humidity: randomHumidity, condition : randomCondition});

            } else {
                reject("Failed to fetch weather data");
            }
        }, 2000);
    });
}

// Async/await  and try/catch

async function updateWeather() {
    try {
        const weather = await fetchWeather();
        document.getElementById("temperature").textContent = weather.temperature;
        document.getElementById("humidity").textContent = weather.humidity;
        document.getElementById("status").textContent = "Update Successfully";
        document.getElementById("status").classList.remove("error");
        document.getElementById("description").textContent = weather.condition;

    } catch (error) { 
        document.getElementById("status").textContent = error;
        document.getElementById("status").classList.add("error");
        console.error(error)
    }
}
// // setInterval
// setInterval(updateWeather, 40000);


