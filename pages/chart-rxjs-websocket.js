import  React, { useState, useEffect, useLayoutEffect } from  "react";
import '@progress/kendo-theme-default/dist/all.css'
import Nav from '../components/nav'
import ChartContainer from '../components/chart-container'
import { waterUsageStore, sendMessages} from '../store/water-usage'
import JSONPretty from 'react-json-prettify'

const Chart = () => {
    const [waterState, setWaterState] = useState(waterUsageStore.initialState);

    useEffect(()=> {
        waterUsageStore.subscribe(setWaterState);
        waterUsageStore.init();
        sendMessages(); // start simulated messages from backend
    },[]);

    return (
        <>
            <Nav/>
            <ChartContainer seriesData={waterState.data} />
            <div>
                This is the data fed thru a websocket every 2 seconds:
                <JSONPretty json={waterState.data} />
            </div>
            <style jsx>{`
                canvas {
                    height: 800;
                }
            `}</style>
        </>
    )
}

export default Chart;