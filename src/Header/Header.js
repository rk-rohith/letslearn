import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css"; // Make sure to create a corresponding CSS file for styling
import logo from "../assets/website-logo.png";

// const Header = () => {
//     const navigate = useNavigate();
  
//     const handleTitleClick = () => {
//       navigate("/");
//     };
  
//     return (
//       <header className="header">
//         <div className="logo">
//           <img src={logo} alt="Logo" width={240} />
//         </div>
//         <span className="title" onClick={handleTitleClick}>
//           Let's Learn
//         </span>
//         <div className="sign-in">
//           <button>Sign In</button>
//         </div>
//       </header>
//     );
//   };

//   export default Header;

import youtubeLogo from '../assets/youtube-logo.png'; // Ensure you have the logo in the assets folder
import githubLogo from '../assets/github-logo.png'; // Ensure you have the logo in the assets folder

const Header = () => {
  return (
    <header className="header">
        <div className="logo">
            <img src={logo} alt="Logo" />
        </div>
      <span className="title" onClick={() => window.location.href = '/'}>
        Let's Learn
      </span>
      <div className="social-links">
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={youtubeLogo} alt="YouTube" className="social-logo" />
        </a>
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="social-logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;