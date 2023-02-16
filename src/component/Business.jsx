import React from 'react'
import style from '../component/Business.module.css'
import curve_left from '../assets/Curve-shape-left.png'
import curve_right from '../assets/Curve-shape-right.png'
import curve_banner from '../assets/Curve-shape.png'
const Business = () => {
    return (
        <div className={style['Business']}>
            <img src={curve_left} className={style['CurveLeft']} />
            <img src={curve_right} className={style['CurveRight']} />
            <div className={style['BusinessBanner']}>
                <div className={style['BannerContent']}>
                <img src={curve_banner} className={style['CurveBanner']} />
                    <h1 className={style['BannerTitle']}>Improve & Innovate
                        Business Trends</h1>
                    <h3 className={style['BannerCtn']}>Duis aute irure dolor in reprehenderit in voluptate velit cillum nulla pariatur
                        nostrud exercitation.</h3>
                    <div className={style['BannerButton']}>
                        <button className={style['ButtonGet']}>Get Started</button>
                        <button className={style['ButtonLearn']}>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Business