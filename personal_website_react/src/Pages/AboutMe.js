import "../Styles/AboutMe.css";
import MyImage from "../Media/myImage.jpeg";

const AboutMe = () => {
  return (
    <div className="about_me_page">
      <h1 className="about_me_h1">About Me</h1>
      <div className="about_me_container">
        <div className="my_info">
          <img className="my_image" src={MyImage} />
          <h1>Hello! I'm Adam</h1>
          <h5>Software Engineer | Fitness Enthusiast</h5>
          <p>
            My path to becoming a web developer began ever since I designed my
            first website using basic HTML and CSS. My goal is to advance in a
            career where I can combine my passions for fitness and problem
            solving. I'm excited and look forward to join a team that celebrates
            creativity and intellectual curiosity. Always a team player, I find
            great satisfaction in working collaboratively as well as taking the
            lead to see a project through from start to finish. If I'm not at
            home coding, you can catch me at my local gym or in the city biking!
          </p>
          <ul className="social">
            <li>
              <a href="https://github.com/AdamTahiri" target="_blank">
                {" "}
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/adam-tahiri-aa8092200/"
                target="_blank"
              >
                {" "}
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
