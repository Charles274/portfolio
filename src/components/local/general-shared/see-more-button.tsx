type SeeMoreButtonProps = {
  path: string;
  text: string;
  visibility?: "hidden" | "visible";
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({
  path,
  text,
  visibility,
}) => {
  return (
    <a
      href={path}
      className="btn btn-outline-light d-flex gap-2 align-items-center"
      style={{ visibility: visibility }}
    >
      {text}
      <i className="bi bi-box-arrow-up-right"></i>
    </a>
  );
};

export default SeeMoreButton;
