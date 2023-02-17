import React from 'react'
import style from './Static.module.css'

const Static = () => {
    return (
        <div className={style['Static']}>
            <div className={style['StaticSection']}>
                <div className={style['StaticText']}>
                    <ul>
                        <li>
                            <div className={style['StaticPrice']}>200</div>
                            <span>
                                Project
                                <br />
                                Done
                            </span>
                        </li>
                        <li>
                            <div className={style['StaticPrice']}>100  %</div>
                            <span>
                                Customer
                                <br />
                                Satisfication
                            </span>
                        </li>
                        <li>
                            <div className={style['StaticPrice']}>610</div>
                            <span>
                                Data
                                <br />
                                Analyst Input
                            </span>
                        </li>
                        <li>
                            <div className={style['StaticPrice']}>6  +</div>
                            <span>
                                World Class
                                <br />
                                Base
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Static