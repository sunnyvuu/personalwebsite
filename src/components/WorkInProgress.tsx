import "../style/WorkInProgress.css";
import axios from "axios";
import { useEffect, useState } from "react";

function WorkInProgress() {
  const [facts, setFacts] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    // fetching cat fact
    axios
      .get("https://catfact.ninja/fact")
      .then((response: any) => {
        setFacts(response.data.fact);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="entire-container">
      <div className="text">
        <div className="title">
          Oops, this page is currently in progress! Sorry for the inconvenience.
          <br />
        </div>
        <div className="body">
          <div className="emphasis">
            Here is a random cat fact to keep you entertained!{" "}
          </div>
          <br />
          <div className="fact"> {loading ? "Getting cat fact" : facts} </div>
        </div>
      </div>

      <img
        className="img"
        src={
          "https://images.uncyclomedia.co/uncyclopedia/en/thumb/f/fa/Cat_using_computer.jpg/800px-Cat_using_computer.jpg"
        }
      />
    </div>
  );
}

export default WorkInProgress;
