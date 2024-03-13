import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const ChartComponent = () => {
	const chartRef = useRef(null);
	const [delayed, setDelayed] = useState(false);

	useEffect(() => {
		const labels = [
			'Label 1',
			'Label 2',
			'Label 3',
			'Label 4',
			'Label 5',
			'Label 6',
			'Label 7',
		];

		const chartData = {
			labels: labels,
			datasets: [
				{
					label: 'Dataset 1',
					data: generateRandomNumbers(7),
					backgroundColor: 'rgba(255, 99, 132, 0.2)',
					borderColor: 'rgba(255, 99, 132, 1)',
					borderWidth: 1,
				},
				{
					label: 'Dataset 2',
					data: generateRandomNumbers(7),
					backgroundColor: 'rgba(54, 162, 235, 0.2)',
					borderColor: 'rgba(54, 162, 235, 1)',
					borderWidth: 1,
				},
				{
					label: 'Dataset 3',
					data: generateRandomNumbers(7),
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 192, 1)',
					borderWidth: 1,
				},
			],
		};

		const ctx = chartRef.current.getContext('2d');

		// Ensure the canvas has a size
		chartRef.current.width = 400;
		chartRef.current.height = 200;

		// Create the chart
		const myChart = new Chart(ctx, {
			type: 'bar',
			data: chartData,
			options: {
				animation: {
					onComplete: () => {
						setDelayed(true);
					},
					delay: (context) => {
						let delay = 0;
						if (
							context.type === 'data' &&
							context.mode === 'default' &&
							!delayed
						) {
							delay =
								context.dataIndex * 300 +
								context.datasetIndex * 100;
						}
						return delay;
					},
				},
				scales: {
					x: {
						type: 'category',
						stacked: true,
					},
					y: {
						stacked: true,
					},
				},
			},
		});

		return () => {
			// Cleanup when component is unmounted
			myChart.destroy();
		};
	}, [delayed]);

	const generateRandomNumbers = (count) => {
		return Array.from(
			{ length: count },
			() => Math.floor(Math.random() * 200) - 100
		);
	};

	const randomizeData = () => {
		const myChart = chartRef.current.chart;
		myChart.data.datasets.forEach((dataset) => {
			dataset.data = generateRandomNumbers(7);
		});
		myChart.update();
	};

	return (
		<div>
			<canvas ref={chartRef}></canvas>
			<button onClick={randomizeData}>Randomize</button>
		</div>
	);
};

export default ChartComponent;
