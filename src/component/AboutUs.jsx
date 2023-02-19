import React from 'react'
import style from '../component/AboutUs.module.css'
import AboutSecImg from '../assets/about-sec-img.jpg'
import video from '../assets/video-poster.jpg'

const AboutUs = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className={style['AboutUs']}>
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
                <div className={style['ab-video-none']}></div>
                <div className={style['ab-video-none']}>
                    <img src={video} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutUs