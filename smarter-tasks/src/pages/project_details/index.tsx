import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
import { Outlet } from "react-router-dom";
import { CommentsProvider } from "../../context/comment/context";

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <CommentsProvider>
        <ErrorBoundary>
          <Suspense
            fallback={<div className="suspense-loading">Loading...</div>}
          >
            <ProjectDetails />
          </Suspense>
        </ErrorBoundary>
        <Outlet />
      </CommentsProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
