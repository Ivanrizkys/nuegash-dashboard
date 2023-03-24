interface BackdropProps {
  zIndex?: number;
  onClick: () => void;
}

const Backdrop = ({ zIndex, onClick }: BackdropProps) => {
  return (
    <div
      onClick={onClick}
      className={`fixed inset-0 z-${zIndex ? zIndex : "40"} flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center`}
    ></div>
  );
};

export default Backdrop;
