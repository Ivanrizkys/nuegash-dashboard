interface ProfileProps {
  loading?: boolean;
}

const Profile = ({ loading }: ProfileProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={loading ? "animate-pulse" : "animate-none"}
    >
      <rect
        opacity="0.8"
        x="0.5"
        y="0.5"
        width="43"
        height="43"
        rx="21.5"
        fill="white"
        stroke="#8E92BC"
      />
      <path
        d="M22 12C19.38 12 17.25 14.13 17.25 16.75C17.25 19.32 19.26 21.4 21.88 21.49C21.96 21.48 22.04 21.48 22.1 21.49C22.12 21.49 22.13 21.49 22.15 21.49C22.16 21.49 22.16 21.49 22.17 21.49C24.73 21.4 26.74 19.32 26.75 16.75C26.75 14.13 24.62 12 22 12Z"
        fill="#546FFF"
      />
      <path
        d="M27.08 24.1499C24.29 22.2899 19.74 22.2899 16.93 24.1499C15.66 24.9999 14.96 26.1499 14.96 27.3799C14.96 28.6099 15.66 29.7499 16.92 30.5899C18.32 31.5299 20.16 31.9999 22 31.9999C23.84 31.9999 25.68 31.5299 27.08 30.5899C28.34 29.7399 29.04 28.5999 29.04 27.3599C29.03 26.1299 28.34 24.9899 27.08 24.1499Z"
        fill="#546FFF"
      />
    </svg>
  );
};

export default Profile;
