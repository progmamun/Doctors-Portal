import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import phone from '../../assets/icons/phone.svg';
import marker from '../../assets/icons/marker.svg';

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary text-white"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-accent text-white"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary text-white"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
