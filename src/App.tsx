import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { JobOffers, Job } from "./components/JobOffers/JobOffers";
import { Filter } from "./components/Filter/Filter";

function App() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

  const filteredJobs = jobs.filter((job) => {
    const categories = [job.role, job.level, ...job.languages, ...job.tools];
    return filterKeywords.every((filter) => categories.includes(filter));
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setJobs(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  const addFilters = (key: string) => {
    if (!filterKeywords.includes(key)) {
      setFilterKeywords([...filterKeywords, key]);
    }
  };

  const removeKeywords = (keyword: string) => {
    setFilterKeywords(filterKeywords.filter((k) => k !== keyword));
  };

  const clearAll = () => {
    setFilterKeywords([]);
  };

  return (
    <div>
      <Header />
      <Filter
        keywords={filterKeywords}
        removeKeywords={removeKeywords}
        clearAll={clearAll}
      />
      <JobOffers jobs={filteredJobs} onClick={addFilters} />
    </div>
  );
}
export default App;
