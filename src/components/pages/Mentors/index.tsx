import { Suspense } from "react";
import MentorsLoader from "./loader";
import MentorsContent from "./content";

const Mentors = () => {
  return (
    <Suspense fallback={<MentorsLoader />}>
      <MentorsContent />
    </Suspense>
  );
};

export default Mentors;
