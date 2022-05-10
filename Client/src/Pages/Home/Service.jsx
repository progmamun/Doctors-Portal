import React from 'react';

const Service = ({ service }) => {
  return (
    <div class="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure>
        <img src={service.image} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{service.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  );
};

export default Service;
