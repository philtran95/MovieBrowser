import Hero from './Hero';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieView = () => {
    const { id } = useParams();
    const [ movieDetails, setMovieDetails ] = useState ({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect (() => {
        // console.log('make an api request',id) Kalob does not use this line
        
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=f6deef2257efbcc5775b11cac365e9f4`)
            .then((response) => response.json())
            .then((data) => {

                    setTimeout(() => {

                    }, 2000)
                    setMovieDetails(data);
                    setIsLoading(false);
            });
    }, [id]);

    function renderMovieDetails() {
      if(isLoading) {
        return <Hero text="Loading..." />
      }
      if(movieDetails) {
        // TODO: What happens if no poster path comes back (null)? What should we do?
        const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
        const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
      
        return (
          <>
              <Hero text={movieDetails.original_title} backdrop={backdropUrl} />
              <div className="container my-5">
                  <div className="row">
                        <div className="col-md-3">
                              <img src={posterPath} 
                              alt="..." 
                              className="img-fluid shadow rounded" />
                        </div>
                        <div className="col-md-9">
                              <h2>{movieDetails.original_title} </h2>
                              <p className="lead">
                                  {movieDetails.overview}
                              </p>
                        </div>
                  </div>
              </div>
          </>
        ) 
      }
    }

    return renderMovieDetails() 

    
  };

  export default MovieView;
