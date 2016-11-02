import React from 'react';
import FlightCardsList from './Cards/FlightCardsList';
import Filter from './Filter';

const Container = () => {
  return (
    <div>
      <div className="col-xs-12" id="container-filter">
        <Filter />
      </div>
      <div className="col-xs-12" id="container-cards">
        <FlightCardsList />
      </div>
    </div>
  );
};

export default Container;
