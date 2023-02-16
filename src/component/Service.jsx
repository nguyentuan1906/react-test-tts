import React from 'react'
import style from '../component/Service.module.css'
import service_icon1 from '../assets/service-icon1.png'
import service_icon2 from '../assets/service-icon2.png'
import service_icon3 from '../assets/service-icon3.png'
import service_icon4 from '../assets/service-icon4.png'

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
                    <div className={style['ser-sec-gr']}>
                        <a className={style['ser-sec-elm']} href="">
                            <img src={service_icon1} alt="" />
                            <div className={style['ser-sec-content']}>
                                <h3>Business Growth</h3>
                                <h5>Nostrud exercitation alia consequatur auor...</h5>
                            </div>
                        </a>
                        <a className={style['ser-sec-elm']} href="">
                            <img src={service_icon2} alt="" />
                            <div className={style['ser-sec-content']}>
                                this content2
                            </div>
                        </a>
                    </div>
                    <div className={style['ser-sec-gr']}>
                        <a className={style['ser-sec-elm']} href="">
                            <img src={service_icon3} alt="" />
                            <div className={style['ser-sec-content']}>
                                this content3
                            </div>
                        </a>
                        <a className={style['ser-sec-elm']} href="">
                            <img src={service_icon4} alt="" />
                            <div className={style['ser-sec-content']}>
                                this content4
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service