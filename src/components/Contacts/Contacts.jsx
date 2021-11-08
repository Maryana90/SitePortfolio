import React from "react";
import q from "./Contacts.module.css";
import Image from "./Image/Image";

const Contacts = () => {
  return (
    <div className={q.contactPage}>
      <Image />
      <div className={q.textBlock}>
        <p className={q.text}>
          If You have your dream and vision about the photo session, don't
          hesitate
          <br />
          to share Your ideas with me and I will make Your dreams come true.
          <br />
          I'm open minded and I adore fulfilling new ideas in reality.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
