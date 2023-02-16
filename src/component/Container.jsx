import React from 'react'
import style from './Container.module.css'
import AboutSecImg from '../assets/about-sec-img.jpg'
import video from '../assets/video-poster.jpg'

const Container = () => {
    return (
        <div className={style['Container']}>
            <div className="about">
                <div className={style['AboutSection']}>
                    <div className={style['about-left-con']}>
                        <div className={style['TopLeftShape']}></div>
                        <div className={style['about-sec-img']}>
                            <img src={AboutSecImg} alt="" />
                        </div>
                    </div>
                    <div className={style['about-right-con']}>
                        <h5 className={style['ab-title']}>About us</h5>
                        <h2>We are The Best Finance
                            Agency in the Area</h2>
                        <h5 className={style['ab-content']}>Duis aute irure dolor in reprehenderit in voluptate velit cillum nulla pae
                            nostrud exercitation alias consequatur aut perferendis doloribus asperi
                            aut rerum necessitatibus saeo eveniet.
                        </h5>
                        <h5 className={style['ab-content']}>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihio
                            quo minus maxime placeat facere.</h5>
                    </div>
                </div>
                <div className={style['ab-video']}>
                    <div className={style['none']}></div>
                    <img src={video} alt="" />
                </div>
            </div>
            <div className={style['Service']}>
                <div className={style['ServiceSection']}>
                    <div className={style['ser-left-sec']}></div>
                    <div className={style['ser-right-sec']}>
                        
                    </div>
                </div>
                <div className={style['Curve-shape2']}></div>
            </div>
        </div>
    )
}

export default Container