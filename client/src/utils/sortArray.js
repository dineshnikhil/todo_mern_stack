function sortArray(arr) {
	// Define a function to convert priority to numerical values
	const getPriorityValue = (priority) => {
		switch (priority) {
			case 'Low':
				return 1;
			case 'Medium':
				return 2;
			case 'High':
				return 3;
			default:
				return 0; // Handle any other cases, if needed
		}
	};

	arr.sort(
		(a, b) => getPriorityValue(a.priority) - getPriorityValue(b.priority)
	);
	return arr;
}

export default sortArray;
