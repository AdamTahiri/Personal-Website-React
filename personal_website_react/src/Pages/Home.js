import "../Styles/Home.css";
import myPhoto from "../Media/myImage2.jpeg";

const Home = () => {
  return (
    <div className="home_container">
      {/* <div className="home_img">
        <img src={myPhoto} />
      </div> */}
      <div className="text_container">
          <h1>Welcome</h1><h2> to my site, where I share a little about who I am, what I love
          to do, and who I aspire to be!
        </h2>
      </div>
    </div>
  );
};

export default Home;
