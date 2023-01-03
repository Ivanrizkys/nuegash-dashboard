interface ArrowDownProps {
  variant: "small" | "large";
}

const ArrowDown = ({ variant }: ArrowDownProps) => {
  if (variant === "small") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        fill="none"
        viewBox="0 0 12 12"
      >
        <path
          stroke="#54577A"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="1.5"
          d="M9.96 4.475L6.7 7.735a.993.993 0 01-1.4 0l-3.26-3.26"
        ></path>
      </svg>
    );
  }
  if (variant === "large") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="none"
        viewBox="0 0 20 20"
      >
        <path
          stroke="#141522"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M2.5 5.833l7.5 7.5 7.5-7.5"
        ></path>
      </svg>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="#141522"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M2.5 5.833l7.5 7.5 7.5-7.5"
      ></path>
    </svg>
  );
};

export default ArrowDown;
