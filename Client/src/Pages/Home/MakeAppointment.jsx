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
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-100px]" src={doctor} alt="" />
      </div>
      <div className="flex-1 px-5">
        <h3 className="text-xl text-primary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white py-5">Make an Appointment Today</h2>
        <p className="text-white pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
          pariatur voluptatum velit reprehenderit amet provident rerum deserunt
          facere veniam ea tempora possimus aliquam odit aliquid iste
          accusantium porro delectus eos animi alias nobis culpa praesentium
          minus. Ab quaerat labore delectus.
        </p>
        <button className="primaryBtn">Get Started</button>
      </div>
    </section>
  );
};

export default MakeAppointment;
