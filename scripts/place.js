const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `<span>${today.getFullYear()}</span> `;

document.addEventListener('DOMContentLoaded', function() {
    var lastModifiedElement = document.getElementById('lastModified');
    var lastModifiedDate = document.lastModified;
    lastModifiedElement.textContent = 'Last Modified: ' + lastModifiedDate;});

document.addEventListener('DOMContentLoaded', (event) => {
    function calculateWindChill(tempF, windSpeed) {
        if (tempF <= 50 && windSpeed > 3) {
            const windChill = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * tempF * Math.pow(windSpeed, 0.16));
            return windChill.toFixed(2);
        } else {
            return 'N/A';
        }
    }
    
    function displayWindChill() {
        const tempElement = document.getElementById('temperature');
        const windSpeedElement = document.getElementById('wind-speed');
        const windChillElement = document.getElementById('wind-chill');
    
        const temperature = parseFloat(tempElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);
    
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = windChill;
    }
    
    displayWindChill();
});