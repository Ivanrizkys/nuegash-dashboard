interface NotificationProps {
  active: boolean;
}

const Notification = ({ active }: NotificationProps) => {
  return (
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
  );
};

export default Notification;
