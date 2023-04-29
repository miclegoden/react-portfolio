import React from "react";
import { FaGithub, FaTelegram, FaDiscord } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <footer>
      <a href="#home" className="footer__logo">
        Brooks-Miracle
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://github.com/brooksMiracle"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://t.me/WolfMiracle"
          target="_blank"
          rel="noreferrer"
        >
          <FaTelegram />
        </a>
        <a
          href="https://discordapp.com/users/1099883890119802901"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; A.B.M {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
