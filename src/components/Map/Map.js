import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import { GOOGLEAPIKEY } from '../../../api_keys.js';

const mapStyleJson = require('./GoogleMapStyles.json');

const mapOptions = {
    styles: mapStyleJson
};

class Map extends Component {
    static defaultProps = {
        center: {
            lat: 32.8801,
            lng: -117.2340
        },
        zoom: 11
    };

    render(){
        return(
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLEAPIKEY }}
                    options={mapOptions}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                </GoogleMapReact>
            </div>
        );
    }
    
}

export default Map;
