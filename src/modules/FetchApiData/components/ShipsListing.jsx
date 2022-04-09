import React from 'react';
import PropTypes from 'prop-types';

const ShipsListing = ({ ships }) => {
  return (
    <ul>
      {ships.map((ship) => {
        return <li key={ship.name}>{ship.name}</li>;
      })}
    </ul>
  );
};

ShipsListing.propTypes = {
  ships: PropTypes.array.isRequired,
};

export default ShipsListing;
