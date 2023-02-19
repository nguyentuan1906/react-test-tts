import React from 'react'
import AOS from 'aos';
import style from '../component/Case.module.css'
import CaseImg1 from '../assets/case-report1-img.jpg'
import CaseImg2 from '../assets/case-report2-img.jpg'
import CaseImg3 from '../assets/case-report3-img.jpg'
import CaseImg4 from '../assets/case-report4-img.jpg'
import CaseImg5 from '../assets/case-report5-img.jpg'
import CaseImg6 from '../assets/case-report6-img.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Case = () => {
    return (
        <div className={style['Case']}>
            <div className={style['CaseInner']}>
                <div className={style['CaseHeading']}>
                    <h5>Recently Completed</h5>
                    <h2>Our Latest Case Studies</h2>
                </div>
                <div className={style['CaseBody']}>
                    <div className={style['Group']}>
                        <a className={style['CaseLink']} href="">
                            <div className={style['CaseCurve']}></div>

                            <div className={style['CasePicture']}>
                                <img src={CaseImg1} alt="" />
                            </div>
                            <div className={style['CaseText']}>
                                <p>Business, Finance</p>
                                <h3>Financial Report 2019</h3>
                            </div>
                            <div className={style['CaseBackground']}></div>
                            <div className={style['CaseIcon']}><ArrowForwardIcon fontSize="large" /></div>
                        </a>
                        <a className={style['CaseLink']} href="">
                            <div className={style['CaseCurve']}></div>

                            <div className={style['CasePicture']}>
                                <img src={CaseImg2} alt="" />
                            </div>
                            <div className={style['CaseText']}>
                                <p>Business, Finance</p>
                                <h3>M0 Insuarance Finance</h3>
                            </div>
                            <div className={style['CaseBackground']}></div>
                            <div className={style['CaseLink']} href=""></div>
                            <div className={style['CaseIcon']}><ArrowForwardIcon fontSize="large" /></div>
                        </a>
                        <a className={style['CaseLink']} href="">
                            <div className={style['CaseCurve']}></div>

                            <div className={style['CasePicture']}>
                                <img src={CaseImg3} alt="" />
                            </div>
                            <div className={style['CaseText']}>
                                <p>Business, Finance</p>
                                <h3>Enterprise Loan 2016</h3>
                            </div>
                            <div className={style['CaseBackground']}></div>
                            <div className={style['CaseIcon']}><ArrowForwardIcon fontSize="large" /></div>
                        </a>
                    </div>
                    <div className={style['Group']}>
                        <a className={style['CaseLink']} href="">
                            <div className={style['CaseCurve']}></div>

                            <div className={style['CasePicture']}>
                                <img src={CaseImg4} alt="" />
                            </div>
                            <div className={style['CaseText']}>
                                <p>Business, Finance</p>
                                <h3>Business Growth Solutions</h3>
                            </div>
                            <div className={style['CaseBackground']}></div>
                            <div className={style['CaseIcon']}><ArrowForwardIcon fontSize="large" /></div>
                        </a>
                        <a className={style['CaseLink']} href="">
                            <div className={style['CaseCurve']}></div>

                            <div className={style['CasePicture']}>
                                <img src={CaseImg5} alt="" />
                            </div>
                            <div className={style['CaseText']}>
                                <p>Business, Finance</p>
                                <h3>Marketing Solusion Advice</h3>
                            </div>
                            <div className={style['CaseBackground']}></div>
                            <div className={style['CaseIcon']}><ArrowForwardIcon fontSize="large" /></div>
                        </a>
                        <a className={style['CaseLink']} href="">
                            <div className={style['CaseCurve']}></div>

                            <div className={style['CasePicture']}>
                                <img src={CaseImg6} alt="" />
                            </div>
                            <div className={style['CaseText']}>
                                <p>Business, Finance</p>
                                <h3>Minda Business Consultinglting</h3>
                            </div>
                            <div className={style['CaseBackground']}></div>
                            <div className={style['CaseIcon']}><ArrowForwardIcon fontSize="large" /></div>
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="3000" className={style['CaseButton']}>
                    <a href="">View All Cases</a>
                </div>
            </div>
        </div>
    )
}

export default Case