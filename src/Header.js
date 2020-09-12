import React from 'react'
import './header.css'
import amzonlogo from './56-565024_amazon-logo-png-amazon-png-transparent-png.png'
// import PageviewIcon from '@material-ui/icons/Pageview'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            <img className="header_logo" src={amzonlogo} />

            <div className="search_bar">
                <input className="search_input" type="text" />
                <SearchIcon className="search__icon" />
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="line_one">Hello Devansh</span>
                    <span className="line_two">Sign In</span>
                </div>
                <div className="header_option">
                    <span className="line_one">Returns </span>
                    <span className="line_two"> and Orders</span>
                </div>
                <div className="header_option">
                    <span className="line_one">Your </span>
                    <span className="line_two">Prime</span>
                </div>
                <div className="header_baskt">
                    <ShoppingBasketIcon />
                    <span className="line_two header_basketCount">
                        0
                    </span>
                </div>
            


            </div>


        </div>
    )
}

export default Header
