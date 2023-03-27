interface NotificationProps {
  active: boolean;
  variant: "small" | "large";
}

const Notification = ({ active, variant }: NotificationProps) => {
  return (
    <>
      {variant === "small" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="44"
          height="44"
          fill="none"
          viewBox="0 0 44 44"
        >
          <path
            fillRule="evenodd"
            stroke="#8E92BC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M14.918 23.49v-.183a3 3 0 01.501-1.516 4.06 4.06 0 00.994-1.928c0-.555 0-1.119.049-1.674.25-2.674 2.894-4.522 5.506-4.522h.065c2.611 0 5.255 1.848 5.514 4.522.048.555 0 1.119.04 1.674.151.72.494 1.389.994 1.936.304.449.477.97.502 1.508v.174a2.971 2.971 0 01-.704 1.992 3.754 3.754 0 01-2.377 1.142c-2.662.286-5.35.286-8.012 0a3.795 3.795 0 01-2.377-1.142 3.003 3.003 0 01-.695-1.984z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#8E92BC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M19.963 29.377a2.573 2.573 0 003.574.42c.162-.122.31-.263.436-.42"
          ></path>
          <circle cx="27" cy="15" r="3" fill="#FF4D5E"></circle>
          <rect
            width="43"
            height="43"
            x="0.5"
            y="0.5"
            stroke="#F5F5F7"
            rx="21.5"
          ></rect>
        </svg>
      )}
      {variant === "large" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="52"
          fill="none"
          viewBox="0 0 52 52"
        >
          <path
            stroke="#8E92BC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M17.5 27.787v-.219a3.6 3.6 0 01.602-1.818 4.87 4.87 0 001.194-2.314c0-.666 0-1.343.058-2.009.3-3.209 3.473-5.427 6.607-5.427h.078c3.133 0 6.306 2.218 6.617 5.427.058.666 0 1.343.048 2.009a4.955 4.955 0 001.193 2.323c.365.538.573 1.164.602 1.81v.209c.022.87-.278 1.719-.844 2.39a4.505 4.505 0 01-2.853 1.37c-3.195.343-6.419.343-9.614 0a4.554 4.554 0 01-2.853-1.37 3.604 3.604 0 01-.834-2.38z"
            clipRule="evenodd"
          ></path>
          <path
            stroke="#8E92BC"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M23.555 34.852a3.088 3.088 0 004.288.505c.196-.146.372-.316.524-.505"
          ></path>
          <circle
            className={`${active ? "animate-pulse" : ""}`}
            cx="32"
            cy="19"
            r="4"
            fill="#FF4D5E"
          ></circle>
          <rect
            width="51"
            height="51"
            x="0.5"
            y="0.5"
            stroke="#F5F5F7"
            rx="25.5"
          ></rect>
        </svg>
      )}
    </>
  );
};

export default Notification;
