import { Component } from "react";
import MovieCard from "./MovieCard";

class MovieList extends Component{

    //craeting this.state
    constructor(){            
        super();
        this.state = {
            title: "The Avangers",          
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0,
            fav: false,
            isInCart: false,
        }
    }


    render(){
        return(
            <>
             <MovieCard movies={this.state}/>
            </>
        )
    }
}  

export default MovieList;