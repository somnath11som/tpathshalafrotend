import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComponentTwo = () => {
	const chartContainer = useRef(null);

	useEffect(() => {
		const DATA_COUNT = 7;
		const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

		const labels = Array.from(
			{ length: DATA_COUNT },
			(_, i) => `Label ${i + 1}`
		);
		const data = {
			labels: labels,
			datasets: [
				{
					label: 'Dataset 1',
					animations: {
						y: {
							duration: 2000,
							delay: 500,
						},
					},
					data: Array.from(
						{ length: DATA_COUNT },
						() =>
							Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min) +
							NUMBER_CFG.min
					),
					borderColor: 'rgba(75, 192, 192, 1)', // Green color
					backgroundColor: 'rgba(255, 99, 132, 0.2)', // Red color with reduced opacity
					fill: 1,
					tension: 0.5,
				},
				{
					label: 'Dataset 2',
					data: Array.from(
						{ length: DATA_COUNT },
						() =>
							Math.random() * (NUMBER_CFG.max - NUMBER_CFG.min) +
							NUMBER_CFG.min
					),
					borderColor: 'blue', // Blue color
					backgroundColor: 'rgba(0, 0, 255, 0.5)', // Blue color with reduced opacity
					fill: 1,
				},
			],
		};

		const options = {
			animations: {
				y: {
					easing: 'easeInOutElastic',
					from: (ctx) => {
						if (ctx.type === 'data') {
							if (ctx.mode === 'default' && !ctx.dropped) {
								ctx.dropped = true;
								return 0;
							}
						}
					},
				},
			},
			maintainAspectRatio: false, // Allow chart to resize based on the container dimensions
		};

		const ctx = chartContainer.current.getContext('2d');
		chartContainer.current.height = 300; // Set the desired height value
		const chartInstance = new Chart(ctx, {
			type: 'line',
			data: data,
			options: options,
		});

		return () => {
			// Clean up chart instance on component unmount
			chartInstance.destroy();
		};
	}, []);

	return (
		<div>
			<canvas ref={chartContainer}></canvas>
		</div>
	);
};

export default ChartComponentTwo;
