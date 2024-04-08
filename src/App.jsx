import { ViewAllJobs } from "./components/ViewAllJobs";
import { NotFoundPage } from "./pages/NotFoundPage";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { MainLayout } from "./layouts/MainLayout";
import { JobsPage } from "./pages/JobsPage";
import { JobPage, jobLoader } from "./pages/JobPage";
import { AddJobPage } from "./pages/AddJobPage";

/* ADD NEW JOB TO JSON SERVER*/
const App = () => {
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  /* DELETE  JOB FROM JSON SERVER*/
  const deleteJob = async (id) => {
    // console.log("Delete Job Called",id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobsSubmit={addJob} />} />
        <Route path="/jobs/:id" element={<JobPage deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
