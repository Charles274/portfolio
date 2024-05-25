type SeeMoreButtonProps = {
  path: string;
  text: string;
  display?: boolean;
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ path, text }) => {
  return (
    <a
      href={path}
      className="btn btn-outline-light d-flex gap-2 align-items-center"
    >
      {text}
      <i className="bi bi-box-arrow-up-right"></i>
    </a>
  );
};

export default SeeMoreButton;
