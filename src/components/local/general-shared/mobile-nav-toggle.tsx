type MobileNavTogglePropes = {
  onClick: () => void;
};

const MobileNavToggle: React.FC<MobileNavTogglePropes> = ({ onClick }) => {
  return (
    <div onClick={onClick} className="">
      <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
    </div>
  );
};

export default MobileNavToggle;
