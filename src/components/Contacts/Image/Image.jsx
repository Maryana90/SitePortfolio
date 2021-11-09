import React from 'react';
import q from './Image.module.css';
import img from './assets/contacts.jpg';

const Image = () => {
  return (
    <div className={q.contactImg}>
      <img src={img} alt="" />
    </div>
  );
};


export default Image;
