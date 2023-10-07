import "../style/TagButton.css";

type TagButtonProps = {
  label: string;
  link: string;
};

const TagButton = ({ label, link }: TagButtonProps) => {
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
