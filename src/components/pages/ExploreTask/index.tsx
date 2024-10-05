import { Suspense } from "react";
import ExploreTaskContent from "./content";
import ExploreContentLoader from "./loader";

const ExploreContent = () => {
  return (
    <Suspense fallback={<ExploreContentLoader />}>
      <ExploreTaskContent />
    </Suspense>
  );
};

export default ExploreContent;
