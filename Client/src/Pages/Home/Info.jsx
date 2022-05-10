import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../icons/assets/clock.svg';
import phone from '../../icons/assets/phone.svg';
import marker from '../../icons/assets/marker.svg';

const Info = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 px-12">
      <InfoCard
        cardTitle="Opening Hours"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={clock}
      ></InfoCard>
      <InfoCard
        cardTitle="Our Locations"
        bgClass="bg-accent"
        img={marker}
      ></InfoCard>
      <InfoCard
        cardTitle="Contact Us"
        bgClass="bg-gradient-to-r from-secondary to-primary"
        img={phone}
      ></InfoCard>
    </div>
  );
};

export default Info;
