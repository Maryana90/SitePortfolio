import React from "react";

const ContactsAnimation = (props) => {
  const contactsAnimation = document.querySelectorAll(".contactsAnimation");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toogle("observe", entry.isIntersecting);
    });
  });
  contactsAnimation.forEach((element) => {
    observer.observe(element);
  });
  return <></>;
};

export default ContactsAnimation;

// (function () {
//     const formBox = document.querySelector('.formBox');
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         const entryInnerFormBox = entry.target.querySelector('.innerFormBox');
//         if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()){
//           return;
//         }
//         if (entry.isIntersecting){
//           entryInnerFormBox.classList.add('innerFormBox-animation');
//           return;
//         }
//         entryInnerFormBox.classList.remove('innerFormBox-animation');
//       })
//     })
//     observer.observe(formBox);
//   }
//   )();
