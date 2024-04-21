import GoogleMapReact from 'google-map-react';
import './Map.css';
import { Icon } from '@iconify/react';
import locationIcon from '../../../assets/locationIcon.svg';
import { googleMapsApiKey } from '../../../keys.ts';

const Map = () => {
  const location = {
    address: 'Hauptstrasse 69, 5734 Reinach',
    lat: 47.2501198,
    lng: 8.1810669,
  };

  const LocationPin = ({ text }: { text: string }) => (
    <div className='pin'>
      <Icon icon={locationIcon} className='pin-icon' />
      <p className='pin-text'>{text}</p>
    </div>
  );

  return (
    <div className='map'>
      <div className='google-map'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: googleMapsApiKey }}
          defaultCenter={{ lat: location.lat, lng: location.lng }}
          defaultZoom={17}
        >
          <LocationPin text={location.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
