import React from 'react';

import Papa from 'papaparse';

import { Button } from '@mui/material';

function CsvExportButton({ data, fileName }) {
	const downloadCsv = () => {
		const csv = Papa.unparse(data);
		const blob = new Blob([csv], { type: 'text/csv' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = fileName || 'data.csv';
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
		URL.revokeObjectURL(url);
	};

	function demo() {
		console.log('downloadin file..!');
	}
	return (
		<Button onClick={downloadCsv} variant="contained">
			Download CSV 👇
		</Button>
	);
}

export default CsvExportButton;
