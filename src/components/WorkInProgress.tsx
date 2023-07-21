import "../style/WorkInProgress.css";

function WorkInProgress() {
  return (
    <div className="entire-container">
      <div className="text">
        Oops, this page is currently in progress! Sorry for the inconvenience.
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
