import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { GlobalCovidData } from '../types';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface BarChartProps {
    data: GlobalCovidData;
}

const WorldWideData: React.FC<BarChartProps> = ({ data }) => {

    function convertPascalCaseToUppercase(arr: string[]): string[] {
        return arr.map(str => {
            return str.replace(/([A-Z])/g, ' $1').replace(/^./, match => match.toUpperCase());
        });
    }
    const labels = convertPascalCaseToUppercase(Object.keys(data));

    const colors = [];
    for (let i = 0; i < labels.length; i++) {
        colors.push(`rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`); // Generate a random color
    }

    console.log('lables', Object.values(data).filter((i) => i !== 'updated'));


    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Metrics',
                data: Object.values(data).filter((i) => i < 100000),
                backgroundColor: colors,
                borderColor: colors.map(color => color.replace('0.2', '1')),
                borderWidth: 1,
            }
        ],
    };

    return <Bar data={chartData} />
};

export default WorldWideData;
