import React from 'react'
import style from './Container.module.css'
import AboutUs from './AboutUs'
import Service from './Service'
import Business from './Business'
const Container = () => {
    return (
        <div className={style['Container']}>
            <AboutUs/>
            <Service/>
            <Business/>
        </div>
    )
}

export default Container