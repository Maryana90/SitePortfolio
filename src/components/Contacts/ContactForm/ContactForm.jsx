import React from "react";
import q from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={q.formBox}>
      <div className={q.innerFormBox}>
        <form
          className={q.form}
          method="post"
          action="mailto:savkamaryana@ukr.net"
        >
          <div className={q.name + " " + q.formField}>
            <label className={q.labels}>Name</label>
            <div className={q.input}>
              <input type="text" name="name" />
            </div>
          </div>

          <div className={q.email + " " + q.formField}>
            <label className={q.labels}>E-mail *</label>
            <div className={q.input}>
              <input
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                title="Invalid email address"
                required
              />
            </div>
          </div>

          <div className={q.phone + " " + q.formField}>
            <label className={q.labels}>Phone</label>
            <div className={q.input}>
              <input type="text" name="phone" />
            </div>
          </div>

          <div className={q.message + " " + q.formField}>
            <textarea className={q.labels} placeholder="Message box"></textarea>
          </div>
          <div className={q.submit + " " + q.formField}>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
