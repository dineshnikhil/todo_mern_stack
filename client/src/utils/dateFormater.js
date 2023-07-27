function dateFormater(date) {
	const dateObj = new Date(date);

	const monthString = dateObj.toLocaleString('default', { month: 'short' });
	const day = dateObj.getDate();
	const year = dateObj.getFullYear();

	const formatedDate = monthString + ' ' + day + ', ' + year;
	return formatedDate;
}

export default dateFormater;
