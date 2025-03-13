import React, { useEffect } from 'react';
import style from '../styles/style.css';

const Hero = () => {
  useEffect(() => {
    // Dynamically load the Three.js script
    const threeScript = document.createElement("script");
    threeScript.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js";
    threeScript.async = true;
    document.body.appendChild(threeScript);

    // Dynamically load the Vanta effect script
    const vantaScript = document.createElement("script");
    vantaScript.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js";
    vantaScript.async = true;
    document.body.appendChild(vantaScript);

    vantaScript.onload = () => {
      const setVanta = () => {
        if (window.VANTA) {
          window.VANTA.CLOUDS({
            el: ".vanta-background",  // Target the correct element
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            backgroundColor: 0x0,
            skyColor: 0x0,
            cloudColor: 0x0,
            cloudShadowColor: 0xffffff,
            sunColor: 0x0,
            sunGlareColor: 0x0,
            sunlightColor: 0xffffff
          });
        }
      };

      // Apply the Vanta effect once the script is loaded
      setVanta();
    };

    // Cleanup scripts on unmount
    return () => {
      document.body.removeChild(threeScript);
      document.body.removeChild(vantaScript);
    };
  }, []);

  return (
    <div className='min-vh-100 main-black vanta-background'>
<div className="container d-flex flex-column justify-content-end h-100">
  <div className="row text-sm-left">
          <div className='col-12 col-sm-7'>
            <h1 className='t-main'>FARRAH PEPINO</h1>
            <p className='p-main'>
              A recent Computer Science graduate from New Jersey City University, passionate
              about software development and graphic design.
            </p>
            <p className='p-main'>
              Farrah Pepino loves exploring new technology stacks and drawing inspiration
              from diverse cultures to fuel her creativity. She thrives in positive, creative environments
              that inspire innovation and growth. Check out her featured works!
            </p>
            <button className='b-main b-main-hover'>
              <a href='#projects'>Browse projects</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
