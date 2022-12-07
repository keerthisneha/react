import React from 'react';
import { useState } from 'react';
import "./experience.css";
let Header = (props) => {
  return (
    <>
      <div>
          <p className='names'>{props.name}</p>
          <h4 className='headings'>{props.heading}</h4>
          <p className='dates'>{props.date}</p>
          <div>
               <p className='desc'>
                <li>{props.description}</li>
                <li>{props.description1}</li>
                <li>{props.description2}</li>
                </p>
          </div>
      </div>
    </>
  );
};

export default Header;