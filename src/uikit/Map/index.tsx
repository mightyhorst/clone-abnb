import React from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

import { GOOGLE_MAP_KEY } from './config';

const TodoMakeMarker = ({ text, lat, lng }) => <div>{text}</div>;

interface IMap {
    center: {
        lat: number;
        lng: number;
    };
    zoom: number;
}
export function Map(props: IMap) {

    return (
        <>
            <section className="Map">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAP_KEY }}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
                >
                    <TodoMakeMarker
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </section>
        </>
    );
}
