import React from 'react'
import style from './NavBar.module.css'
import Finanzo from '../assets/Finanzo.png'
import SettingsPhoneTwoToneIcon from '@mui/icons-material/SettingsPhoneTwoTone';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

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
                    <div className={style['ContactBox']}>
                        <SettingsPhoneTwoToneIcon className={style['icon']} fontSize="large" />
                        <div>
                            <p>Call us at:</p>
                            <p >+613 8376 628</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style['Banner']}>
                <div className={style['BannerLink']}>
                    <a href=""> <FacebookOutlinedIcon fontSize="large" className={style['Link']} /> </a>
                    <a href=""> <TwitterIcon fontSize="large" className={style['Link']} /> </a>
                    <a href=""> <LinkedInIcon fontSize="large" className={style['Link']} /> </a>
                </div>
                <div className={style['BannerContent1']}>
                    <div className={style['Curve']}></div>
                    <div className={style['BannerContent']}>
                        <h1>Create New Ways to Better Invest</h1>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit cillum
                            nulla pariatur nostrud exercitation.</p>
                    </div>
                    <div className={style['BannerBtn']}>
                        <button className={style['btn1']}>Get Start</button>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
            <div className="none"></div>
            <div className={style['BottomRightShape']}></div>
        </div>
    )
}

export default NavBar