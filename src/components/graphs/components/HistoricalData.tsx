import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { HistoricalCases } from '../types';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

interface LineGraphProps {
    data?: HistoricalCases;
}

const HistoricalData: React.FC<LineGraphProps> = ({ data }) => {

    if (!data) {
        return <div>No data available</div>; // Handle loading or no data state
    }

    // Convert the data into arrays for Chart.js
    const labels = Object.keys(data.cases).map(date => new Date(date).toLocaleDateString());
    const casesData = Object.values(data.cases);
    const deathsData = Object.values(data.deaths);
    const recoveredData = Object.values(data.recovered);

    const chartData = {
        labels,
        datasets: [
            {
                label: 'Cases',
                data: casesData,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
            {
                label: 'Deaths',
                data: deathsData,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            },
            {
                label: 'Recovered',
                data: recoveredData,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            tooltip: {
                callbacks: {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    label: (context: any) => {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value}`;
                    },
                },
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Number',
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default HistoricalData;
