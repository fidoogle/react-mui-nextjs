import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

let seriesData = [
    { month: "Aug 18", volume: 6000 },
    { month: "Sep 18", volume: 3000 },
    { month: "Oct 18", volume: 1500 },
    { month: "Nov 18", volume: 2250 },
    { month: "Dec 18", volume: 1500 },
    { month: "Jan 19", volume: 3000 },
    { month: "Feb 19", volume: 2250 },
    { month: "Mar 19", volume: 1500 },
    { month: "Apr 19", volume: 2250 },
    { month: "May 19", volume: 1500 },
    { month: "Jun 19", volume: 2250 },
    { month: "Jul 19", volume: 2250 },
    { month: "Aug 19", volume: 4500 },
    { month: "Sep 19", volume: 7500 }
];

const BarChart = () => {
    return (
    <>
        <Nav />
        <h2>ChartJS</h2>
        <Bar data={barChartData} options={barChartOptions}/>
    </>)
};

const color = Chart.helpers.color;
const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

const barChartData = {
    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6', 'Month 7', 'Month 8', 'Month 9', 'Month 10', 'Month 11', 'Month 12', 'Month 13'],
    
    datasets: [
        {
            label: 'Water Usage 2018',
            backgroundColor: '#0078ad',
            borderColor: '#00adfa',
            borderWidth: 1,
            hoverBackgroundColor: '#00adfa',
            data: [
                7000,
                9000,
                3500,
                5000,
                8000,
                2500,
                4500,
                9000,
                3000,
                5000,
                8000,
                2000,
                6000
            ]
        },

        {
            label: 'Water Usage 2019',
            backgroundColor: '#4caf50',
            borderColor: '#00adfa',
            borderWidth: 1,
            hoverBackgroundColor: '#89f20a',
            data: [
                6000,
                7000,
                5500,
                6000,
                3000,
                4500,
                4000,
                8000,
                3500,
                5000,
                6000,
                2500,
                6500
            ]
            },
    ]
};
export default BarChart;
