import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HomeCards } from "./components/HomeCards";
import "./App.css";
import { JobListings } from "./components/JobListings";
import { ViewAllJobs } from "./components/ViewAllJobs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>
  );
}

export default App;
