import React from 'react';
import q from './Image.module.css';
import img from './assets/contacts.jpg';

const Image = () => {

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add('observeElement');
      }
    });
  });

  const boxElList = document.querySelectorAll('q.contactImg');
  boxElList.forEach((el) => {
    observer.observe(el);
    console.log(el);
  })
console.log(boxElList);

  return (
    <div className={q.contactImg}>
      <img src={img} alt="" />
    </div>
    
  );

};




export default Image;
