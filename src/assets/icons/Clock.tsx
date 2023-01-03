interface ClockProps {
  variant: "small" | "medium"
}

const Clock = ({variant}: ClockProps) => {
  if (variant === "small") {
    return (
      <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        stroke="#54577A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.667 8.5a6.669 6.669 0 01-6.666 6.667A6.67 6.67 0 011.334 8.5a6.67 6.67 0 016.667-6.667A6.669 6.669 0 0114.667 8.5z"
      ></path>
      <path
        stroke="#54577A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.474 10.62L8.407 9.387c-.36-.213-.653-.727-.653-1.147V5.507"
      ></path>
    </svg>
    )
  }
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        stroke="#54577A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M21.25 12A9.25 9.25 0 0112 21.25 9.25 9.25 0 012.75 12 9.25 9.25 0 0112 2.75 9.25 9.25 0 0121.25 12z"
        clipRule="evenodd"
      ></path>
      <path
        stroke="#54577A"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.431 14.943l-3.77-2.25V7.848"
      ></path>
    </svg>
  );
};

export default Clock;
