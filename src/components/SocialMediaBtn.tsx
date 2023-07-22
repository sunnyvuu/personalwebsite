import "../style/SocialBtn.css";

function SocialMediaBtn(props: { logo: any; link: string; altText?: string }) {
  const { logo, link, altText } = props;

  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };
  return (
    <div className="social-btn">
      <button className="square" onClick={() => openInNewTab(link)}>
        <img className="logo" src={logo} alt={altText} />
      </button>
    </div>
  );
}

export default SocialMediaBtn;
