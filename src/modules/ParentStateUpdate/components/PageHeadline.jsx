import React from 'react';
import PropTypes from 'prop-types';

const PageHeadline = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

PageHeadline.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeadline;
