import React from "react";
import q from "./Contacts.module.css";
import Image from "./Image/Image";
import ContactForm from "./ContactForm/ContactForm";
import qa from './ContactsAnimation.module.css';
import ContactsAnimation from './ContactsAnimation';

const Contacts = () => {
  return (
    <div className={q.contactPage}>
      <Image />
      <div className={q.textBlock}>
        <p className={q.text}>
          If You have your dream and vision about the photo session, don't
          hesitate
          to share Your ideas with me and I will make Your dreams come true.
          I'm open minded and I adore fulfilling new ideas in reality.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default Contacts;
