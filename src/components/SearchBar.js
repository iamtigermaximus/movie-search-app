import React, {useState, useEffect} from 'react'
import axios from 'axios'




const SearchBar = () => {
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("")
    const [url, setUrl] = useState(`https://api.themoviedb.org/3/search/movie?api_key=89112843133b22b96a96ab6de6cc8f5f&language=en-US&page=1&include_adult=false&query=${query}`)
   
    const handleChange = (e) => {
        e.preventDefault()
        setQuery(e.target.value)

    }
    useEffect(() => {
        axios
        .get(url)
        .then(response => {
            console.log(response);
            setData(response.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    },[url])

    return (
    <>
        <div className="searchbar container text-center">
            <form className="searchbar-form">
                <input 
                type="text" 
                placeholder="Search for Movie"
                value={query}
                onChange={handleChange}
                />
                <button 
                className="btn btn-block"
                type="button"
                onClick={() =>
                   setUrl(`https://api.themoviedb.org/3/search/movie?api_key=89112843133b22b96a96ab6de6cc8f5f&language=en-US&page=1&include_adult=false&query=${query}`)}
                >
                SEARCH
                </button>
            </form>
        </div>
        <div className="container ">
            <div className="row text-center my-5 ">
            {data.map(movie => (
            
                <div className="col-sm-3 col-lg-2 ">
                    <div className="movie-image text-center card">
                        <img className="card-image-top" src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt="..."/>
                    </div>
                    <div className="card-body ">
                    <h6 className="card-text movie-title">{movie.title}</h6>
                    </div>
                </div>
        ))}
        
            </div>
        </div>
    </>
    )
}

export default SearchBar