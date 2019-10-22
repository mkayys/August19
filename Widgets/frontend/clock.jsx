import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date(),
        };

        this.tick = this.tick.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick() {
        this.setState({ time: new Date() });
    }

    timeString() {
        let time = `${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()}`
        return time;
    }

    render() {
        return (
            <div className='clock-container'>
                <h1>clock</h1>
                <div>
                    {this.timeString()}
                </div>
            </div>
        )
    }
};

export default Clock;