import React from 'react'
import style from './NavBar.module.css'
import Finanzo from '../assets/Finanzo.png'
import ContactIcon from '../assets/contact-icon.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const NavBar = () => {
    return (
        <div className={style['Header']}>
            <div className={style['TopLeftShape']}></div>
            <div className={style['NavBar']}>
                <a className={style['Logo']} href=""><img src={Finanzo} /></a>
                <div className={style['Menu']}>
                    <div className={style['MenuList']}>
                        <a href="" className={style['HomeBtn']}>Home</a>
                        <a href="">About Us</a>
                        <a href="">News</a>
                        <a href="">Services <ArrowDropDownIcon fontSize="large" /></a>
                        <a href="">Pages <ArrowDropDownIcon fontSize="large" /></a>
                        <a href="">Team</a>
                    </div>
                    <div className={style['ContactBox']}>
                        <div className={style['NavBtn']}><a href="">Contact Us</a></div>
                        <div className={style['ContactSec']}>
                            <div className={style['ContactIcon']}>
                                <img src={ContactIcon} alt="" />
                            </div>
                            <div className={style['ContactPhone']}>
                                <span className={style['Span1']}>Call us at:</span>
                                <span className={style['Span2']}>+613 8376 628</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style['Banner']}>
                <div className={style['BannerLink']}>
                    <a href=""> <FacebookOutlinedIcon fontSize="small" className={style['Link']} /> </a>
                    <a href=""> <TwitterIcon fontSize="small" className={style['Link']} /> </a>
                    <a href=""> <LinkedInIcon fontSize="small" className={style['Link']} /> </a>
                </div>
                <div className={style['BannerContainer']}>
                    <div className={style['BannerContent']}>
                        <h1>
                            <div className={style['Curve']}></div>
                            Create New Ways
                            <br />
                            to Better Invest
                        </h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit cillum
                            <br />
                            nulla pariatur nostrud exercitation.
                        </p>
                    </div>
                    <div className={style['BannerBtn']}>
                        <div className={style['NavBtn1']}><a href="">Get Started</a></div>
                        <div className={style['NavBtn2']}><a href="">Lern More</a></div>
                    </div>
                </div>
            </div>

            <div className={style['BottomRightShape']}></div>
        </div>
    )
}

export default NavBar