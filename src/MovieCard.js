import { Component } from "react";

class MovieCard extends Component{

    

    // we don't have to bind this because it's a arrow function
    addStars = () => {         
        if(this.state.stars >= 5){
            return;
        }               
        //using setState 1sr form

        // this.setState({
        //     stars: this.state.stars + 0.5
        // })


        //using setState 2nd form

        this.setState((prevState) => {
            return{
                stars: prevState.stars + 0.5,
            }
        })
    }

    decreaseStars = () => {
        if(this.state.stars <= 0){
            return;
        }
        //using setState 1st form

        // this.setState({
        //     stars : this.state.stars - 0.5,
        // })

        //using setState 2nd form
        this.setState((prevState) => {
            return{
                stars: prevState.stars - 0.5,
            }
        })
    }

    handleFav = () => {
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart =()=>{
        this.setState({
            isInCart: !this.state.isInCart
        })
    }

    render(){
        const {title, plot, price, rating, stars, fav, isInCart, poster} = this.props.movies;
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

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/11942/11942825.png" alt="decrease" onClick={this.decreaseStars}/>

                                <img src="https://t3.ftcdn.net/jpg/01/09/84/42/240_F_109844239_A7MdQSDf4y1H80cfvHZuSa0zKBkZ68S7.jpg" 
                                alt="star" className="stars"/>

                                <img className="str-btn" src="https://cdn-icons-png.flaticon.com/128/3161/3161837.png" alt="increase" onClick={this.addStars}/>

                                <span>{stars}</span>

                            </div>
                            
                            <button className={fav ? "unfavourite-btn":"favourite-btn"} onClick={this.handleFav}>
                                {fav ? "Un-favourite" : "Favourite"} </button>

                            <button className={isInCart ? "unfavourite-btn":"cart-btn"} 
                            onClick={this.handleCart}>{isInCart? "Remove from cart" : "Add to cart"}</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;