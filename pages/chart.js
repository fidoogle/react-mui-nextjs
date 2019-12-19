import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';
import ChartContainer from '../components/chart-container'

let seriesData = [
    { month: "Aug 18", volume: 6000, volume2: 3000 },
    { month: "Sep 18", volume: 3000, volume2: 5000 },
    { month: "Oct 18", volume: 1500, volume2: 2000 },
    { month: "Nov 18", volume: 2250, volume2: 6000 },
    { month: "Dec 18", volume: 1500, volume2: 4000 },
    { month: "Jan 19", volume: 3000, volume2: 1000 },
    { month: "Feb 19", volume: 2250, volume2: 3500 },
    { month: "Mar 19", volume: 1500, volume2: 7000 },
    { month: "Apr 19", volume: 2250, volume2: 4000 },
    { month: "May 19", volume: 1500, volume2: 4500 },
    { month: "Jun 19", volume: 2250, volume2: 3000 },
    { month: "Jul 19", volume: 2250, volume2: 5500 },
    { month: "Aug 19", volume: 4500, volume2: 4000 },
    { month: "Sep 19", volume: 7500, volume2: 2000 }
];

const BarChart = () => {
    return (
    <>
        <Nav />
        <h2>ChartJS</h2>
        <p>React Material UI does not currently provide chart components. 
            A popular chart library to use with React is <a href="https://www.chartjs.org/">ChartJS</a>, which is highly customizable. This is an out-of-the-box example, with little to no further customization. </p>
            <ChartContainer seriesData={seriesData} />
    </>)
};

export default BarChart;
