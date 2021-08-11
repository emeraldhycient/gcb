import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
    labels: ['Credits', 'Debits'],
    datasets: [
        {
            label: 'Transactions',
            data: [30, 19],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const DoughnutChart = () => (
    <div style={{ width: '220px' }}>
        <Doughnut data={data} />
    </div>
);

export default DoughnutChart;