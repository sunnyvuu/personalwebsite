import React from "react";
import "../style/TagButton.css";

const TagButton = ({ label, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="tag-button"
    >
      {label}
    </a>
  );
};

export default TagButton;
