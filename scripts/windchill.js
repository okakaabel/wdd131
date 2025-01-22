// Function to calculate wind chill (one line of code as per rubric)
const calculateWindChill = (t, v) => (t <= 10 && v > 4.8) ? (13.12 + 0.6215 * t - 11.37 * v ** 0.16 + 0.3965 * t * v ** 0.16).toFixed(1) : "N/A";

// Update wind chill on page load
document.addEventListener("DOMContentLoaded", () => {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("windspeed").textContent);
    const windchill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windchill;

    // Update footer year and last modified date
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;
});
