import { Suspense } from "react";
import MentorsLoader from "./loader";
import MentorsContent from "./content";
import PrivateRoute from "@/src/components/atoms/PrivateRoute";

const Mentors = () => {
  return (
    <PrivateRoute>
      <Suspense fallback={<MentorsLoader />}>
        <MentorsContent />
      </Suspense>
    </PrivateRoute>
  );
};

export default Mentors;
