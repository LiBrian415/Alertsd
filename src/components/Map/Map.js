import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import AlertPin from '../AlertPin/AlertPin';

import { GOOGLEAPIKEY } from '../../api_keys.js';

const mapStyleJson = require('./GoogleMapStyles.json');

const mapOptions = {
    styles: mapStyleJson
};

const mapFormat = {
    center: {
        lat: 32.8801,
        lng: -117.2340
    },
    zoom: 15,
    bounds: {
        nw: {
            lat: 32.89,
            lng: -117.24
        },
        se: {
            lat: 32.87,
            lng: -117.22
        },
        sw: {
            lat: 32.89,
            lng: -117.22
        },
        ne: {
            lat: 32.87,
            lng: -117.24
        }
    }
};

class Map extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const alertPins = this.props.alerts.map((alrt) => {
            return (
                <AlertPin 
                    lat={alrt.latitude}
                    lng={alrt.longitude}
                />
            );
        })
        return(
            <div style={{ height: '90vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLEAPIKEY }}
                    options={mapOptions}
                    defaultCenter={mapFormat.center}
                    defaultZoom={mapFormat.zoom}
                    bounds={mapFormat.bounds}
                    onChildMouseEnter={this.onChildMouseEnter}
                    onChildMouseLeave={this.onChildMouseLeave}
                >
                {alertPins}
                </GoogleMapReact>
            </div>
        );
    }
    
}

export default Map;
