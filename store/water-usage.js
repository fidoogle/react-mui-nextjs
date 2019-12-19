//Inspired from https://blog.logrocket.com/rxjs-with-react-hooks-for-state-management/
//and https://rxjs.dev/api/webSocket/webSocket

import { webSocket } from 'rxjs/webSocket';

//server-side only
if (typeof window === 'undefined') {
    global.WebSocket = require('ws');
}


const subject = webSocket("wss://echo.websocket.org/");


const initialState = {
    data: [], //array of objects like: [{month:"Oct 19", volume: 2500}, ... ]
    newDataCount: 0 
};

let state = initialState;

const waterUsageStore = {
    init: () => {
        state = {...state, newDataCount: 0};
        subject.next(state);
    },

    subscribe: setState => subject.subscribe(setState),

    sendMessage: message => {
        state = {
            ...state,
            data: [...state.data, message],
            newDataCount: state.newDataCount + 1
        };
        subject.next(state);
    },

    getCount: () => state.newDataCount,

    initialState
};


//These functions are used for mocking data that is echoed by the websocket
const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
const getNearest100 = (min, max) => {
    const rnd = getRndInteger(min, max);
    return Math.round(rnd/100)*100; //rounds to nearest 100
}
const buildMsg = () => {
    return ({ month: `Month ${waterUsageStore.getCount()}`, volume: getNearest100(500, 7500), volume2: getNearest100(500, 7500) });
}
const sendMessages = () => {
    //echo a message every 2 seconds
    const sendMsgs = setInterval(() => { waterUsageStore.sendMessage(buildMsg()) }, 2000);
    //stop echoing after 30 seconds
    setTimeout(() => { clearInterval(sendMsgs)}, 30000);
}


export { waterUsageStore, sendMessages }