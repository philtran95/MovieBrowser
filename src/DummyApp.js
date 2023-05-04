import "./App.css";
import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
// import { Routes, Route } from "react-router-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";


function App() {

  const [searchResults, setSearchResults] = useState ([])
  const [searchText, setSearchText] = useState ('');

  console.log(searchText, "si the default")
  setTimeout (() => {
    setSearchText("New Text")
    console.log(searchText, "is the next text")
  }, 2000)
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search" component={SearchView} />       
      </Routes>
    </div>
  );
}


export default App;
