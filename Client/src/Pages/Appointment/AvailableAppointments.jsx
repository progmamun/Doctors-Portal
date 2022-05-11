import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Service from './Service';

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('services.json')
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);
  return (
    <div>
      <h4 className="text-xl text-secondary text-center">
        Available Appointments on {format(date, 'PP')}
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {services.map(service => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
