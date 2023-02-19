import React from 'react'
import style from '../component/Form.module.css'
import Curve from '../assets/Curve-shape4.png'

const Form = () => {
    return (
        <div className={style['Form']}>
            <div className={style['FormInner']}>
                <div className={style['FormCurve']}>
                    <img src={Curve} />
                </div>
                <div className={style['Form_']}>
                    <div className={style['FormHeader']}>
                        <h5>Get in Touch</h5>
                        <h2>Send us a Message</h2>
                    </div>
                    <div className={style['FormBody']}>
                        <div className={style['FormInformation']}>
                            <input type="text" placeholder='Name' />
                            <input type="text" placeholder='Phone' />
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className={style['FormContent']}>
                            <input type="text" placeholder='Mesange' />
                        </div>
                    </div>
                    <div className={style['FormButton']}>
                    <a href="">Send Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form