"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import madLocator from './mad_locator.jpg'
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import Spinner from '@/components/spinner';

const containerStyle = {
  width: '100%',
  height: '90vh',
};

const center = {
  lat: 42.0, 
  lng: 13.4,
};

type Location = {
  id: number;
  latitude: number;
  longitude: number;
  regione: string;
  nome: string;
  indirizzo: string;
  localita: string;
  telefono: string;
  email: string;
  web: string;
};

export default function MapPage() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API! 
  });

  useEffect(() => {
    fetch('/api/locations')
      .then((res) => res.json())
      .then((data) => {
        console.log('Dati ricevuti:', data);
        setLocations(data);
      })
      .catch(console.error);
  }, []);

  if (!isLoaded) return <div className='container'><h1 className='blue py-4 font-bold'>Laboratori abilitati M.A.D.</h1><Spinner /></div>;

  const validLocations = locations.filter(loc => {
    const lat = parseFloat(String(loc.latitude));
    const lng = parseFloat(String(loc.longitude));
    return !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0;
  });

  return (
    <>
    <div className="container">
        <h1 className='blue py-4 font-bold'>Laboratori abilitati M.A.D.</h1>
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
      {validLocations.map((loc) => {
        const lat = parseFloat(String(loc.latitude));
        const lng = parseFloat(String(loc.longitude));
        
        return (
          <Marker
            key={loc.id}
            position={{ lat, lng }}
            title={loc.nome}
            onClick={() => setSelectedLocation(loc)}
          />
        );
      })}

      {selectedLocation && (
        <InfoWindow
          position={{ 
            lat: parseFloat(String(selectedLocation.latitude)), 
            lng: parseFloat(String(selectedLocation.longitude)) 
          }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div>
            <h3 className="font-bold text-lg mb-2">{selectedLocation.nome}</h3>
            <div className="space-y-1 text-sm">
              <p><strong>Indirizzo:</strong> {selectedLocation.indirizzo}</p>
              <p><strong>Località:</strong> {selectedLocation.localita}</p>
              <p><strong>Regione:</strong> {selectedLocation.regione}</p>
              {selectedLocation.telefono && (
                <p><strong>Telefono:</strong> {selectedLocation.telefono}</p>
              )}
              {selectedLocation.email && (
                <p><strong>Email:</strong> {selectedLocation.email}</p>
              )}
              {selectedLocation.web && (
                <p>
                    <a 
                    href={selectedLocation.web.startsWith('http') ? selectedLocation.web : `https://${selectedLocation.web}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                    >
                    Sito web
                    </a>
                </p>
                )}
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
    </div>
    </>
  );
}