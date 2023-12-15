import React from "react";

class Navbar extends React.Component{
    render(){
        return(
            <>
            <div style={{width: "100%", 
                        height: 90, 
                        backgroundColor: "blue", 
                        display: "flex", 
                        justifyContent: "space-between"}}>
                <div>Movie-App</div>
                <div>
                    <img alt="cart icon"/>
                    <span>0</span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;