import "../src/style/App.css";
import NavBar from "./components/NavBar";
import SocialMediaBtn from "./components/SocialMediaBtn";
import LinkedInLogo from "../src/assets/linkedin.png";
import GitHubLogo from "../src/assets/github.png";

function App() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="intro-container">
        <div className="intro-text">
          <div className="name">
            Hello, I'm <span> Madi </span> | Software Engineer
          </div>
          <div className="intro-para">
            <p>
              {" "}
              I'm a junior at Louisiana State University majoring in computer
              science with a passion for full-stack development, with a focus on
              front-end and mobile technologies. In addition to being an
              aspiring developer, I'm also a UI/UX design intern at Vigilus. In
              my free time, I'm hanging out with my feline bestie,{" "}
              <a
                href="https://sunnyvuu.github.io/MoonyTheCat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Moony 🐱
              </a>
              .
            </p>
            <div className="social-btns">
              <SocialMediaBtn
                logo={LinkedInLogo}
                link={"https://www.linkedin.com/in/madi-yi/"}
                altText={"LinkedIn Logo"}
              />
              <SocialMediaBtn
                logo={GitHubLogo}
                link={"https://github.com/sunnyvuu"}
                altText={"GitHub Logo"}
              />
            </div>
          </div>
        </div>
        <div className="intro-image">
          <img
            src={
              "https://professional-images.s3.us-east-2.amazonaws.com/MYi_Headshot.jpg"
            }
          />
        </div>
      </div>
    </>
  );
}

export default App;
