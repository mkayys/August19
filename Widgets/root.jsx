import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';

let tabsArr = [{ 
    title: 'hello',
    content: "i'm the first tab"
}, 
{
    title: 'maybe',
    content: "i'm the second"
},
{
    title: 'bye',
    content: "best for last"
}]

const Root = (props) => {
    return (
        <div>
            <h1>Widgets</h1>
            <Clock />
            <Tabs tabsArr={tabsArr} />
            <Weather />
        </div>
    )
}

export default Root;