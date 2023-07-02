import "../src/style/App.css";
import NavBar from "./components/NavBar";
import "../src/assets/MYi_Headshot.jpg";
function App() {
  return (
    <>
      <div className="header">
        <NavBar />
      </div>
      <div className="intro-container">
        <div className="intro-text">
          <div className="title"> Software Engineer</div>
          <div className="name">Hello, I'm Madi</div>
          <div className="intro-para">
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Netus blandit viverra
              praesent in. Varius eget nibh a massa mauris consequat
              sollicitudin. Ultrices diam tempus lacus mauris consequat. Sed id
              nunc vestibulum quam aliquet posuere enim tempus eu.{" "}
            </p>
            <div className="social-btns">make social btn components lol</div>
          </div>
        </div>
        <div className="intro-image">
          <img src={"./src/assets/MYi_Headshot.jpg"} />
        </div>
      </div>
    </>
  );
}

export default App;
