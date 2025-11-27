import React from 'react';
import Avartar from './Avatar';

export default function Profile({ image, name, title, isNew }) {
  return (
    <div className="profile">
      <Avartar image={image} isNew={isNew} />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}
