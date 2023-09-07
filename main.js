document.addEventListener("DOMContentLoaded", function () {
	// Get the elements
	const dayElement = document.querySelector(
		'[data-testid="currentDayOfTheWeek"]'
	);
	const timeElement = document.querySelector('[data-testid="currentUTCTime"]');

	// Get current day of the week
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	const today = new Date();
	const dayOfWeek = daysOfWeek[today.getUTCDay()];

	/* Get current UTC time */
	// const hours = today.getUTCHours().toString().padStart(2, "0");
	// const minutes = today.getUTCMinutes().toString().padStart(2, "0");
	// const seconds = today.getUTCSeconds().toString().padStart(2, "0");
	// const currentTime = `${hours}:${minutes}:${seconds}`;

	// Get current UTC time in milliseconds

	const currentTime = Date.now();

	// Update the elements
	dayElement.textContent = `Current Day: ${dayOfWeek}`;
	timeElement.textContent = `Current UTC Time: ${currentTime}`;
});
