import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";

import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_k2qawqh",
        "template_c6rkpn6",
        formRef.current,
        "X7K7ebhIeOy3YwHki"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h5>albrooks.miracle@gmail.com</h5>
          </article>
          <article className="contact__option">
            <FaSkype className="contact__option-icon" />
            <h5>live:.cid.aeacf9ca33be6570</h5>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
