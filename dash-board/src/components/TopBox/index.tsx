import React from 'react';
import { TopUsers } from '../../data';
import { Avatar } from '@mui/material';
import './style.scss';
const FirstTopBox = () => {
  return (
    <div className="firstTopBox">
      <h1>Top Deals</h1>
      {TopUsers?.map((val, index) => {
        return (
          <div className="listItem" key={index}>
            <div className="user">
              <Avatar alt={val.userName} src={val.img} />
              <div className="nameEmail">
                <span className="name">{val.userName}</span>
                <span className="email">{val.email}</span>
              </div>
            </div>
            <h5>
              {val.amount}
              {''}RS
            </h5>
          </div>
        );
      })}
    </div>
  );
};

export default FirstTopBox;
