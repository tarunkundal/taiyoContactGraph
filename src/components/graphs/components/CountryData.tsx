import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { CountryStats } from '../types'; // Assuming you have defined this type

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { Box } from '@chakra-ui/react';

// Define the type of L.Icon.Default.prototype
type IconDefaultPrototype = {
    _getIconUrl?: string;
};

// Fixes issues with marker icons not displaying correctly
delete (L.Icon.Default.prototype as unknown as IconDefaultPrototype)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

interface CountryMapProps {
    countryData: CountryStats[];
}

const CountryMap: React.FC<CountryMapProps> = ({ countryData }) => {
    console.log('countrydatata', countryData);

    return (
        <Box height={'400px'} overflow={'scroll'}>
            <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {countryData.map((country) => (
                    <Marker key={country.country} position={[country.countryInfo.lat, country.countryInfo.long]}>
                        <Popup>
                            <div>
                                <h3>{country.country}</h3>
                                <p>Active Cases: {country.active}</p>
                                <p>Recovered Cases: {country.recovered}</p>
                                <p>Deaths: {country.deaths}</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </Box>
    );
};

export default CountryMap;
