interface TaskProps {
  active: boolean;
}

const Task = ({ active }: TaskProps) => {
  if (active) {
    return (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 16.7402V4.67019C22 3.47019 21.02 2.58019 19.83 2.68019H19.77C17.67 2.86019 14.48 3.93019 12.7 5.05019L12.53 5.16019C12.24 5.34019 11.76 5.34019 11.47 5.16019L11.22 5.01019C9.44 3.90019 6.26 2.84019 4.16 2.67019C2.97 2.57019 2 3.47019 2 4.66019V16.7402C2 17.7002 2.78 18.6002 3.74 18.7202L4.03 18.7602C6.2 19.0502 9.55 20.1502 11.47 21.2002L11.51 21.2202C11.78 21.3702 12.21 21.3702 12.47 21.2202C14.39 20.1602 17.75 19.0502 19.93 18.7602L20.26 18.7202C21.22 18.6002 22 17.7002 22 16.7402Z"
          stroke="#141522"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5.49023V20.4902"
          stroke="#141522"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.75 8.49023H5.5"
          stroke="#141522"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 11.4902H5.5"
          stroke="#141522"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22 16.7399V4.66994C22 3.46994 21.02 2.57994 19.83 2.67994H19.77C17.67 2.85994 14.48 3.92994 12.7 5.04994L12.53 5.15994C12.24 5.33994 11.76 5.33994 11.47 5.15994L11.22 5.00994C9.44 3.89994 6.26 2.83994 4.16 2.66994C2.97 2.56994 2 3.46994 2 4.65994V16.7399C2 17.6999 2.78 18.5999 3.74 18.7199L4.03 18.7599C6.2 19.0499 9.55 20.1499 11.47 21.1999L11.51 21.2199C11.78 21.3699 12.21 21.3699 12.47 21.2199C14.39 20.1599 17.75 19.0499 19.93 18.7599L20.26 18.7199C21.22 18.5999 22 17.6999 22 16.7399Z"
        stroke="#8E92BC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 5.48999V20.49"
        stroke="#8E92BC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.75 8.48999H5.5"
        stroke="#8E92BC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 11.49H5.5"
        stroke="#8E92BC"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Task;
