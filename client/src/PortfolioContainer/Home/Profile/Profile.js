import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/programacion.com.pe">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="https://www.linkedin.com/in/softwareengineer-dalton-soto-canales/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://www.twitch.tv/zend_inny">
                <i className="fa fa-twitch" />                             
              </a>
              <a href="youtube.com/@zend_inny">
                <i className="fa fa-youtube-square" />
              </a>
              <a href="https://twitter.com/DaltonDiiv">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Dalton</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Mern stack Dev 📱",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
            Habilidad para crear aplicaciones con operaciones front-end y back-end.
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="cv.dalton.pdf" download="Dalton cv.dalton.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">
          </div>
        </div>
      </div>
    </div>
  );
}
