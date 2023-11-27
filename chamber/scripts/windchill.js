document.addEventListener('DOMContentLoaded', function () {
    // Get windspeed and temperature from the page
    // Call the windchill function
    const temperatureSpan = document.getElementById("temperature");
    const windspeedSpan = document.getElementById("windspeed");
    const windchillSpan = document.getElementById("windchill");

    // Check if all necessary elements are available
    if (temperatureSpan && windspeedSpan && windchillSpan) {
        const temperature = parseInt(temperatureSpan.textContent);
        const windspeed = parseInt(windspeedSpan.textContent);

        showWindChill(temperature, windspeed, windchillSpan);
    }
});

function showWindChill(temp, speed, windchillSpan) {
    // Set default windchill message
    let message = "N/A";

    // Check for valid temp/windspeed    
    if (temp <= 50 && speed > 3) {
        // Get chillfactor and windchill calculation
        let chillfactor = Math.pow(speed, 0.16);
        let chill = Math.round(35.74 + (0.6215 * temp) - (35.75 * chillfactor) + (0.4275 * temp * chillfactor));

        // Create windchill message
        message = `${chill}`;
    }
    // Set the DOM element windchillmessage
    windchillSpan.textContent = message;
}
