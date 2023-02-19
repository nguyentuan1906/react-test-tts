import React from 'react'
import style from './Container.module.css'
import AboutUs from './AboutUs'
import Service from './Service'
import Business from './Business'
import Static from './Static'
import Case from './Case'
import Blog from './Blog'

const Container = () => {
    return (
        <div className={style['Container']}>
            <AboutUs/>
            <Service/>
            <Business/>
            <Static/>
            <Case/>
            <Blog/>
        </div>
    )
}

export default Container