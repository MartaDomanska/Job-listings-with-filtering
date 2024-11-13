import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { JobOffers, Jobs } from "./components/JobOffers/JobOffers";
import { Filter } from "./components/Filter/Filter";


function App() {
  const [jobs, setJobs] = useState<Jobs[]>([]);
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

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

  const addFilters = (data: string) => {
    if (!filterKeywords.includes(data)) {
      setFilterKeywords([...filterKeywords, data]);
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
        addKeywords={addFilters}
      />
      <JobOffers jobs={jobs} onClick={addFilters} />
    </div>
  );
}
export default App;