import React from "react";
// import styled from "styled-components";
import styles from "./Navbar.module.css";




class Navbar extends React.Component{
    render(){
        return(
        <div className={styles.nav}>
            <div className={styles.title}>Movie-App</div>
            <div className={styles.cartContainer}>
          <img
            className={styles.cartIcon}
            src="https://cdn-icons-png.flaticon.com/128/2838/2838694.png"
            alt="cart-icon"
          />
          <span className={styles.cartCount}>3</span>
        </div>
      </div>
        )
    }
}


export default Navbar;