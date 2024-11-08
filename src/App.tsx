import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { JobOffers } from "./components/JobOffers/JobOffers";
import { Search } from "./components/Search/Search";

export interface JobOffersData {
  id: number;
  logo: string;
  company: string;
  new: boolean;
  featured: boolean;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  role: string;
  level: string;
  languages: string[];
  tools: string[];
}

function App() {
  const [data, setData] = useState<JobOffersData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error, "error");
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    
  };

  return (
    <div>
      <Header />
      <Search />
      <JobOffers data={data} onClick={handleClick} />
    </div>
  );
}

export default App;
