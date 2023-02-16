import React from 'react'
import style from './Container.module.css'
import AboutUs from './AboutUs'

const Container = () => {
    return (
        <div className={style['Container']}>
            <AboutUs/>
        </div>
    )
}

export default Container