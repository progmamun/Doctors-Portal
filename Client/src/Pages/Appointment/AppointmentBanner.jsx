import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';

const AppointmentBanner = ({ date, setDate }) => {
  // const [date, setDate] = useState(new Date());
  return (
    <div
      style={{
        background: `url(${bg})`,
        backgroundSize: 'cover',
      }}
      className="hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div>
          <DayPicker mode="single" selected={date} onSelect={setDate} />
          {/* <p>You have Selected: {format(date, 'pp')}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
