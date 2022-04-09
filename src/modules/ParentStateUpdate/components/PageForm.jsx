import React from 'react';
import PropTypes from 'prop-types';

const PageForm = ({ title, updateTitle }) => {
  const onUpdateTitle = (event) => {
    updateTitle(event.target.value);
  };

  return (
    <section>
      <form action="post">
        <label htmlFor="title">Neue Headline</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={onUpdateTitle}
        />
      </form>
    </section>
  );
};

PageForm.propTypes = {
  title: PropTypes.string.isRequired,
  updateTitle: PropTypes.func.isRequired,
};

export default PageForm;
