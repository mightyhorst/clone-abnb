import React from 'react';
import GoogleMapReact from 'google-map-react';

import './Map.css';

import { GOOGLE_MAP_KEY } from './config';

interface TodoMakeMarkerProps{
    label: string, 
    lat: number; 
    lng: number;
}
const TodoMakeMarker = ({ label, lat, lng }: TodoMakeMarkerProps) => <div>{label}</div>;

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
                        label="My Marker"
                    />
                </GoogleMapReact>
            </section>
        </>
    );
}
