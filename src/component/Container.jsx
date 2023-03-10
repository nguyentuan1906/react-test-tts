import React from 'react'
import style from './Container.module.css'
import AboutUs from './AboutUs'
import Service from './Service'
import Business from './Business'
import Static from './Static'
import Case from './Case'
import Blog from './Blog'
import Form from './Form'
import Footer from './Footer'

const Container = () => {
    return (
        <div className={style['Container']}>
            <AboutUs/>
            <Service/>
            <Business/>
            <Static/>
            <Case/>
            <Blog/>
            <Form/>
            <Footer/>
        </div>
    )
}

export default Container