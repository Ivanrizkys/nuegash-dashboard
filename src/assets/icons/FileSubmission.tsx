interface FileSubmissionProps {
  variant: "success" | "error";
}

const FileSubmission = ({ variant }: FileSubmissionProps) => {
  const color = variant === "error" ? "#FF5454" : "#546FFF";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="none"
      viewBox="0 0 32 32"
    >
      <g stroke={color} strokeMiterlimit="10" strokeWidth="1.5" opacity="0.28">
        <path d="M28.894 19.067l-.534 6.666c-.2 2.04-.36 3.6-3.973 3.6H7.614c-3.614 0-3.774-1.56-3.974-3.6l-.533-6.666a4.041 4.041 0 01.867-2.92L4 16.12a3.966 3.966 0 013.08-1.454h17.84c1.24 0 2.334.56 3.054 1.427.013.014.026.027.026.04a3.9 3.9 0 01.894 2.934z"></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.666 15.24V8.373c0-4.533 1.133-5.666 5.667-5.666h1.693c1.693 0 2.08.506 2.72 1.36l1.693 2.266c.427.56.68.907 1.814.907h3.4c4.533 0 5.666 1.133 5.666 5.666v2.387M12.574 22.666h6.854"
        ></path>
      </g>
    </svg>
  );
};

export default FileSubmission;
