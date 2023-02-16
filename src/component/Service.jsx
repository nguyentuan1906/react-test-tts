import React from 'react'
import style from '../component/Service.module.css'
import ser_img from '../assets/service-left-img.jpg'

const Service = () => {
    return (
        <div className={style['Service']}>
            <div className={style['Curve-shape2']}></div>
            <div className={style['ServiceSection']}>
                <div className={style['ser-left-sec']}>
                    <div className={style['ServiceContent']}>
                        <h5>What We Do</h5>
                        <h2>Services we Provide</h2>
                        <p>Quis autem vel eum iure repren
                            derit qui in ea voluptate velit as
                            se ruam nihil molestiae....</p>
                    </div>
                    <button>Get Started</button>
                </div>
                <div className={style['ser-right-sec']}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Service