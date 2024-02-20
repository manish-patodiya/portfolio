import React from 'react';
import {BsInstagram, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.linkedin.com/in/manish-patodiya" target='_blank'><BsLinkedin /></a>
    </div>
    <div>
      <a href="https://github.com/manish-patodiya" target='_blank'><BsGithub /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/manish_patodiya__/" target='_blank'><BsInstagram /></a>
    </div>
  </div>
);

export default SocialMedia;
