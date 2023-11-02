// Get temperature and wind speed values from HTML
let tempF = parseFloat(document.getElementById('temperature').textContent);
let speed = parseFloat(document.getElementById('windspeed').textContent);

// Check if input values meet the specification limits
if (tempF <= 50 && speed > 3.0) {
    let windChill = calculateWindChill(tempF, speed);
    document.getElementById('windchill').textContent = windChill.toFixed(2);
} else {
    document.getElementById('windchill').textContent = "N/A";
}

// Function to calculate wind chill
function calculateWindChill(tempF, speed) {
    return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
}
