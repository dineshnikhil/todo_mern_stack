function daysLeftToFinishTask(startDateStr, endDateStr) {
	const startDate = new Date(startDateStr);
	const endDate = new Date(endDateStr);

	// Calculate the time difference between the end date and start date
	const timeDiff = endDate.getTime() - startDate.getTime();

	// Convert time difference to days
	const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

	return daysLeft;
}

export default daysLeftToFinishTask;
