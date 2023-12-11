import { Component } from "react";

class MovieCard extends Component{

    constructor(){            
        super();
        this.state = {
            title: "The Avangers",          //craeting this.state
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
        }
    }

    render(){
        const {title, plot, price, rating} = this.state;
        return(
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://www.themoviedb.org/t/p/original/qMxAmzGQO722q0UlssCOPhrXmvX.jpg" alt="poster"/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">{price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/11942/11942825.png" alt="decrease"/>

                                <img src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" 
                                alt="star" className="stars"/>

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3161/3161837.png" alt="increase"/>

                                <span>0</span>

                            </div>
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