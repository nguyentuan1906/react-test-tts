import React from 'react'
import style from './Container.module.css'
import AboutUs from './AboutUs'
import Service from './Service'
const Container = () => {
    return (
        <div className={style['Container']}>
            <AboutUs/>
            <Service/>
        </div>
    )
}

export default Container