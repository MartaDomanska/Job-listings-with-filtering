import { useState } from "react";
import { Header } from "./components/Header/Header";
import { JobOffers } from "./components/JobOffers/JobOffers";
import { Filter } from "./components/Filter/Filter";

function App() {
  const [filterKeywords, setFilterKeywords] = useState<string[]>([]);

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
      <JobOffers filterKeywords={filterKeywords} onClick={addFilters} />
    </div>
  );
}
export default App;
