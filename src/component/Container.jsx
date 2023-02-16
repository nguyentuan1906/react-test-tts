import React from 'react'
import style from './Container.module.css'
import AboutSecImg from '../assets/about-sec-img.jpg'

const Container = () => {
  return (
    <div className={style['Container']}>
        <div className="AboutSection">
            <div className={style['TopLeftShape']}></div>
            <div className="about-sec-img">
                <img src={AboutSecImg} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Container