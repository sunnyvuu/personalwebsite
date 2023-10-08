import NavBar from "./NavBar";

import "../style/AboutMe.css";
import Timeline from "./Timeline";
import TagButton from "./TagButton";
import getNowPlayingItem from "../api/spotify";
import { SpotifyNowPlaying } from "../spotify/SpotifyNowPlaying";
import "../style/NowPlaying.css";

function AboutPage() {
  return (
    <div>
      <NavBar />

      <div className="about-me-container">
        <h3 className="abt-me"> About Me </h3>
        <p>
          Hello! My name is Madeline Yi. I'm a software engineer from Baton
          Rouge, Louisiana. I have a passion for creating intuitive user
          interfaces and exploring the latest web technologies". When I'm not
          coding, you can find me trying new restaurants, playing video games,
          streaming, and crafting jewelry.
          <br />
          <br />
          I started my journey in 2021, and since then, I've collaborated with
          various teams, worked on diverse projects, and continuously expanded
          my skill set.
          <br />
          <br />
          Feel free to explore my portfolio, check out my projects, or get in
          touch with me if you'd like to collaborate or just chat!
        </p>
        <h3> Hobbies </h3>
        <TagButton
          label="Watching Anime"
          link="https://anilist.co/user/SunnyVu/"
        />
        <TagButton
          label="Making Google Reviews"
          link="https://maps.app.goo.gl/VoGbJTqCrGmQ9rWY7"
        />
        <TagButton
          label="Crafting Jewelry"
          link="https://www.instagram.com/sunnybun.png/"
        />
        <TagButton label="Streaming" link="https://www.twitch.tv/sunnybuu" />
        <TagButton
          label="Listening to Music"
          link="https://open.spotify.com/user/12134492202"
        />
        <div className="spotify-now-playing">
          <SpotifyNowPlaying />
        </div>
        <h3> My Journey (In Progress) </h3>
        <Timeline />
      </div>
    </div>
  );
}

export default AboutPage;
