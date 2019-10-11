class Clock {
    constructor() {
        const currentTime = new Date();

        this.hours = currentTime.getHours();
        this.minutes = currentTime.getMinutes();
        this.seconds = currentTime.getSeconds();

        this.printTime();
        // this._tick = this._tick.bind(this);
        setTimeout(this._tick.bind(this), 1000)
    }

    printTime() {
        // Format the time in HH:MM:SS
        // Use console.log to print it.
        const timeString = [this.hours, this.minutes, this.seconds].join(':')
        console.log(timeString);
    }

    _tick() {
        // 1. Increment the time by one second.

        // 2. Call printTime.
        this.printTime();
    }

}

const clock = new Clock();