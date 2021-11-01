import Calculator from "../Media/Calculator.gif";
import EcoRent from "../Media/EcoRent.gif";
import uBelong from "../Media/uBelong.png";
import YouTube from "../Media/YoutubeClone.gif";
import TBA from "../Media/TextBased.gif";
import SnowMan from "../Media/snowMan.gif";
import "../Styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects_page">
      <h1 className="projects_h1">Projects</h1>
      <div className="projects_container">
        <div className="proj proj1">
            <img src={EcoRent} />
            <div className="proj_info_wrapper">
                <h5>EcoRent</h5>
                <h3>EcoRent is a one-of-a-kind full-stack shared economy application that allows users to seamlessly list an item to a Rentee or rent an item from a Renter</h3>
                <a href="https://ecorent.netlify.app/" target="_blank"><i class="fas fa-link link_proj"></i></a>
            </div>
        </div>
        <div className="proj proj2">
            <img src={Calculator} />
            <div className="proj_info_wrapper">
                <h5>Calculator</h5>
                <h3>Beautifully designed and fully functioning calculator that can handle most calculations</h3>
                <a href="https://adam-tahiri-calc.netlify.app/" target="_blank"><i class="fas fa-link link_proj"></i></a>
            </div>
        </div>
        <div className="proj proj3">
          <img src={uBelong} />
          <div className="proj_info_wrapper">
                <h5>uBelong</h5>
                <h3>uBelong aims to provide a safe space to seek inspiration, motivation, and a positive voice</h3>
                <a href="https://github.com/kenia-r/affirmation-app/tree/main/ubelong" target="_blank"> <i class="fab fa-github-square link_proj"></i></a>
          </div>
        </div>
        <div className="proj proj4">
          <img src={YouTube} />
            <div className="proj_info_wrapper">
                <h5>YouTube Clone</h5>
                <h3>My first clone project that incorporates many of youtubes design and capabilities</h3>
                <a href="https://ado-youtube-clone.netlify.app/" target="_blank"><i class="fas fa-link link_proj"></i></a>
            </div>
        </div>
          {/* <img src={TBA} />
          <img src={SnowMan} /> */}
      </div>
    </div>
  );
};

export default Projects;
