import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { JobOffers } from "./components/JobOffers/JobOffers";
import { Search } from "./components/Search/Search";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const jsonData = await response.json();
        console.log(jsonData); 
        setData(jsonData);
      } catch (error) {
        console.log(error, "error"); 
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <JobOffers data={data}/>
    </div>
  );
}

export default App;
