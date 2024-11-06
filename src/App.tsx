import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Offers } from "./components/Offers/Offers";
import { Search } from "./components/Search/Search";


function App() {

  return (
    <div>
      <Header />
      <Offers />
      <Search />
    </div>
  );
}

export default App;
