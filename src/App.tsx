import { useState, useEffect } from "react";
import { Header } from "./components/Header/Header";
import { JobOffers } from "./components/JobOffers/JobOffers";
import { Filter } from "./components/Filter/Filter";


function App() {
  const [data, setData] = useState([]);

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
      <Filter keywords={[]} removeKeywords={() => {} } clearAll={() => {} } />
      <JobOffers data={data} onClick={handleClick} />
    </div>
  );
}

export default App;
