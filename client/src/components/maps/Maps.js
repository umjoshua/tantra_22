import React,{ useMemo } from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

import './Maps.css';

function Map(){
    const center=useMemo(()=>({lat:12.098172020519588,lng:75.56040164959403}),[]);
    return(
        <GoogleMap zoom={9} center={center} mapContainerClassName='map_container'>
            <Marker position={{lat:12.098172020519588,lng:75.56040164959403}}></Marker>
        </GoogleMap>
    )
}
export default Map;