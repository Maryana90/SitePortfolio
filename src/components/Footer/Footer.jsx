import React from "react";
import q from "./Footer.module.css";
import fb from "./icons/facebook.png";
import inst from "./icons/instagram.png";
import vb from "./icons/viber.png";

const Footer = () => {
  return (
    <div className={q.footer}>
      <div className={q.innerFooter}>
        <p className={q.footerItem + " " + q.contactsData}>
          <p className={q.contacts}>
            Email: <span className={q.contact}>lilia.minenko@gmail.com</span>
          </p>
          <p className={q.contacts}>
            Phone: <span className={q.contact}>(066)218-69-48</span>
          </p>
        </p>
        <p className={q.footerItem + " " + q.copyRight}>
          © Photography Lilia Minenko
        </p>
        <p className={q.footerItem + " " + q.links}>
          <p className={q.link}>
            <a
              className={q.icon}
              href="https://www.instagram.com/minenkolilia/"
              target="_blank"
            >
              <img src={inst} alt="instagram" />
            </a>
            <a
              className={q.icon}
              href="https://www.facebook.com/LiaMinenko"
              target="_blank"
            >
              <img src={fb} alt="facebook" />
            </a>
            <a
              className={q.icon}
              href="viber://chat?number=0662186948"
              target="_blank"
            >
              <img src={vb} alt="viber" />
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
