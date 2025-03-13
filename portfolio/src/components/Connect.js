import React from 'react';
import '../styles/Connect.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { MdMail } from 'react-icons/md';

const Connect = () => {
  return (
    <div className="min-vh-100 w-bg" 
    // style={{  backgroundColor: '#f0f0f0'}}
    >
      <div className="connect-container">
        <div className="scrolling-text">
          "We want to see the newest things. That is because we want to see the future, even if only momentarily" — Takashi Murakami
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-auto">
              <Button
                variant="light"
                href="https://www.linkedin.com/in/farrah-p-138166245/"
                target="_blank"
                className="icon-button"
              >
                <FaLinkedin />
              </Button>
            </div>
            <div className="col-auto">
              <Button
                variant="light"
                href="https://github.com/farrahpepino"
                target="_blank"
                className="icon-button"
              >
                <FaGithub />
              </Button>
            </div>
            <div className="col-auto">
              <Button
                variant="light"
                href="mailto:pepinoalyssa@gmail.com"
                className="icon-button"
              >
                <MdMail />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Connect;
