import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './styles.scss';
import { menu } from '../../data';
const Menu = () => {
  return (
    <div className="menu">
      {menu?.map((value: any, index: number) => (
        <div className="item" key={index}>
          <span className="title">{value?.title} </span>
          {value?.listItem?.map((val: any, i: number) => (
            <Link className="listItem" to={val.url} key={i}>
              {val.icons && (
                <Button
                  className="buttonContainer"
                  variant="outlined"
                  startIcon={<val.icons />}
                >
                  {val?.title}
                </Button>
              )}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
