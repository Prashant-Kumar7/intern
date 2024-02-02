import React from "react";
import TopSection from "./TopSection"
import CenterSection from "./CenterSection";
import Table from "./Table";
import Footer from "./Footer";
function App() {
  return (
   <div className="container">
    <TopSection/>
    <CenterSection/>
    <Table/>
    <Footer/>
   </div>
  );
}

export default App;
