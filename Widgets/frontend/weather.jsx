import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
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

                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                Hello i'm weather
            </div>
        )
    }
};

export default Weather;