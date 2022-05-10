import React from 'react';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import Service from './Service';

const Services = () => {
  const services = [
    { _id: 1, name: 'Fluoride', description: '', image: fluoride },
    { _id: 2, name: 'Cavity', description: '', image: cavity },
    { _id: 3, name: 'Whitening', description: '', image: whitening },
  ];
  return (
    <div>
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold-uppercase">
          Our Services
        </h3>
        <h2>Services We Provide</h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map(service => (
          <Service key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
