import React from 'react'
import style from '../component/Footer.module.css'
import FooterImgLeft from '../assets/Vector-Smart-right-Object-Left.png'
import FooterImgRight from '../assets/Vector-Smart-right-Object-Right.png'
import FooterImg from '../assets/footer-img.png'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
    return (
        <div className={style['Footer']}>
            <img src={FooterImgLeft} className={style['FooterImgLeft']} />
            <div className={style['FooterInner']}>
                <div className={style['FooterCol']}>
                    <div className={style['FooterCol-1']}>
                        <img src={FooterImg} className={style['FooterImg']} />
                        <p>Duis aute irure dolor in reprehenderit <br />
                            in voluptate velit esse cillum dolore <br />
                            eu fugiat nulla pariatur.</p>
                    </div>
                    <div className={style['FooterCol-1']}>
                        <h3>Useful Links</h3>
                        <a href="">About us</a>
                        <a href="">Services</a>
                        <a href="">Team</a>
                        <a href="">News</a>
                        <a href="">Contact us</a>
                    </div>
                    <div className={style['FooterCol-1']}>
                        <h3>Contact Info</h3>
                        <a href="" className={style['FooterInfo']}> <LocalPhoneIcon fontSize="small" className={style['InfoIcon']}/> +61 3 8376 6284</a>
                        <a href="" className={style['FooterInfo']}> <MailIcon fontSize="small" className={style['InfoIcon']}/> Info@finanzocom</a>
                        <div className={style['FooterInfo']}>
                            <LocationOnIcon fontSize="small" className={style['InfoIcon']}/>
                            <h5> 21 King Street Melbourne, <br />
                                3000, Australia</h5>
                        </div>
                    </div>
                    <div className={style['FooterCol-1']}>
                        <h3>Social Networks</h3>
                        <div className={style['FooterLink']}>
                            <a href=""> <FacebookOutlinedIcon fontSize="small" className={style['Link']} /> </a>
                            <a href=""> <TwitterIcon fontSize="small" className={style['Link']} /> </a>
                            <a href=""> <LinkedInIcon fontSize="small" className={style['Link']} /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <img src={FooterImgRight} className={style['FooterImgRight']} />
        </div>
    )
}

export default Footer