import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from '../../assets/images/doctor.png';

const MakeAppointment = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl text-primary">Appointment</h3>
        <h2 className="text-3xl">Make an Appointment Today</h2>
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          pariatur voluptatum velit reprehenderit amet provident rerum deserunt
          facere veniam ea tempora possimus aliquam odit aliquid iste
          accusantium porro delectus eos animi alias nobis culpa praesentium
          minus. Ab quaerat labore delectus.
        </p>
      </div>
    </section>
  );
};

export default MakeAppointment;
