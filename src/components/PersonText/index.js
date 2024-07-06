import React from 'react';
import './person-text.scss';

function PersonText({ person = null }) {
  const Person = () => {
    const social = person.social.length != 0 ? Object.values(person.social[0])[0] : '';
    return (
      <a className="person-text" href={social}>
        {person.name}
      </a>
    );
  };
  return <Person />;
}

export default PersonText;
