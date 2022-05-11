import React from 'react';

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-secondary">{name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slots Available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? 'spaces' : 'space'}Try another date
        </p>
        <div className="card-actions justify-center">
          <button disabled={slots.length === 0} className="primaryBtn btn">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
