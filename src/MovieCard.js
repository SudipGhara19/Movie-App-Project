import { Component } from "react";

class MovieCard extends Component{
    render(){
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg" alt="poster"/>
                    </div>
                    <div className="right">
                        <div className="title">The Avangers</div>
                        <div className="plot">Supernatural powers shown in the movie</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="stars">Star</div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;