import "./App.css";
import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Route, Routes } from "react-router-dom";
import MovieView from "./components/MovieView"
import PageNotFound from "./components/NotFound";
// import Hero from "./components/Hero";


// Change breakpoint values for BOOTSTRAP change via device screen size. Columns vs rows and card sizes. Bootstrap 
// sizes and 


function App() {

  const [searchResults, setSearchResults] = useState ([""]);
  const [searchText, setSearchText] = useState ("");
  
  useEffect (() => {
    // console.log(searchText, "is the search text")  
    if(searchText) {

    
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=f6deef2257efbcc5775b11cac365e9f4&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setSearchResults(data.results)
      })
    }
  }, [searchText])
 

  return (
    <div className="App">
       
          <Navbar searchText={searchText} setSearchText={setSearchText} />
          
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/search" element={<SearchView keyword={searchText} 
                searchResults={searchResults} />} />
                {/* Could this be part of the reason why 404 doesnt work? can the element have both searchText and
                searchResults in the same curly? */}
                
            <Route path="/movies/:id" element={<MovieView />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        
    </div>
  );
};


export default App;
