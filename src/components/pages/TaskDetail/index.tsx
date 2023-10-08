import { Suspense } from "react";
import TaskDetailLoader from "./loader";
import TaskDetailContent from "./content";

const TaskDetail = () => {
  return (
    <Suspense fallback={<TaskDetailLoader />}>
      <TaskDetailContent />
    </Suspense>
  );
};

export default TaskDetail;
