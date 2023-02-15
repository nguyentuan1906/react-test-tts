import React from 'react'
import style from './NavBar.module.css'
import TopLeftShape from '../assets/Top-Left-Shape.png'
import Finanzo from '../assets/Finanzo.png'

const NavBar = () => {
    return (
        <div className={style['Header']}>
            <div className={style['TopLeftShape']}></div>
            <div className={style['NavBar']}>
                <a className={style['Logo']} href=""><img src={Finanzo} /></a>
                <div className={style['Menu']}>
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">News</a>
                    <a href="">Services</a>
                    <a href="">Pages</a>
                    <a href="">Team</a>
                    <button>Contact Us</button>
                    <div className="ContactBox">
                        This contact
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NavBar