import "../style/Timeline.css";

const Timeline = () => {
  const academicJourney = [
    {
      date: "Aug 2020",
      subtitle: "Enrolled in the University of North Florida",
      ptext:
        "Fresh out of high school and uncertain about my path, I pursued a major in graphic design. Reflecting on my high school report cards, I felt that art was the only thing I excelled at.",
    },
    {
      date: "Aug 2021",
      subtitle: "Transferred to the Louisiana State University",
      ptext:
        "I was originally from Baton Rouge, Louisiana and returned my sophomore year due to personal reasons. I continued to declare art as my major and chose graphic design for my concentration. However, graphic design was not my passion sadly so I dropped it and pursued a general art degree.",
    },
    {
      date: "Sep 2021",
      subtitle: "Began working as a UI/UX Design Intern",
      ptext:
        "I considered a career as a UI/UX designer post-college when I began this internship, but I eventually found programming more enjoyable and shifted my focus towards becoming a software engineer. However, the thought of changing majors and possibly postponing my graduation made me hesitant. ",
    },
    {
      date: "January 2022",
      subtitle: "Started self-studying CS",
      ptext:
        "Not wanting to let my passion for coding to die out, I began following online resources to learn the basics of programming. It was hard to find the right resource initially as I jumped from FreeCodeCamp to TheOdinProject but eventually I discovered Harvard's Intro to CS course online.",
    },
    {
      date: "April 2022",
      subtitle:
        "Joined the Society of Asian Scientists and Engineers executive board as the graphic designer",
      ptext:
        "SASE was a welcoming club and provided many opportunities to make friends and gain new experiences as a transfer student. Despite not being an engineer, it was still enjoyable and I was able to contribute with many graphics and even designed a first Geaux Hack hackathon t-shirt.",
    },
    {
      date: "Sep 2022",
      subtitle: "Received advice to swap to CS",
      ptext:
        "Attended a resume review workshop hosted by SASE and made the decision to swap majors when I recieved advice from a Technical Division Manager at ExxonMobil. He told me that it would be a life long regret if I didn't swap. That singular advice changed the trajectory of my life.",
    },

    // Add more milestones as needed
  ];

  return (
    <div className="timeline">
      {academicJourney.map((milestone, index) => (
        <div key={index} className="timeline-item">
          <p>
            <span className="date">{milestone.date}</span>
            <br />
            <span className="subtitle">{milestone.subtitle}</span>
            <br />
            <span className="ptext">{milestone.ptext}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
