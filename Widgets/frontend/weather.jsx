import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            city: 'loading...'
        };
    };

    componentDidMount() {
        let that = this;
        // console.log(this);
        navigator.geolocation.getCurrentPosition(function(pos) {
            // console.log(this);
            let xml = new XMLHttpRequest();
            let lat = pos.coords.latitude;
            let lng = pos.coords.longitude;

            xml.onreadystatechange = function() {
                if (xml.readyState === 4) {
                    if (xml.status === 200) {
                        // console.log(xml);
                        const weatherData = JSON.parse(xml.responseText);
                        let temp = Math.floor((weatherData.main.temp - 273.15) * 9 / 5 + 32);

                        that.setState({
                            temp: temp,
                            city: weatherData.name
                        });
                    } else if (xml.status === 400) {
                        console.log('400');

                    } else {
                        console.log('error');
                    }
                }
            }
            let apiKey = 'f816d7f39052e3a98b21952097a43076';
            let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&id=524901&APPID=${apiKey}`;

            xml.open('GET', url, true);
            xml.send();
        });

    }

    render() {
        return (
            <div>
                Hello i'm weather
                <br/>
                {this.state.city}
                <br/>
                {this.state.temp}&deg;F
            </div>
        )
    }
};

export default Weather;