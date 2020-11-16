import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom'

const Content = props => {
  const { title } = props;
  const { thingName } = useParams();

  return (
    <section>
      <p>{title.toUpperCase()} for {thingName.toUpperCase()}</p>
      <p>some description about "{thingName}"</p>
    </section>
  )
};

Content.propTypes = {
  title: PropTypes.string.isRequired
};

export default Content;
