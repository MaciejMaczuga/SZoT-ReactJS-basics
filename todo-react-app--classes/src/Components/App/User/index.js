import React from 'react';

import './style.css';

const User = (props) => (
  <div className="users">
    <img
      className="users__pic"
      src={props.picture.large}
      alt=""
    />
    <p className="users__name">{`${props.name.first} ${props.name.last}`}</p>
    <p className="users__phone">{`Phone number: ${props.cell}`}</p>
  </div>
);

export default User;