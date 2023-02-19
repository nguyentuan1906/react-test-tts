import React from 'react'
import style from '../component/Blog.module.css'
import BlogImg1 from '../assets/blog-img.jpg'
import BlogIcon1 from '../assets/blog-icon1.png'

const Blog = () => {
    return (
        <div className={style['Blog']}>
            <div className={style['BlogInner']}>
                <div className={style['BlogHeader']}>
                    <h5>Our News</h5>
                    <h2>Latest Blog Posts</h2>
                </div>
                <div className={style['BlogBody']}>
                    <a className={style['BlogElement']}>
                        <div className={style['BlogImg']}>
                            <img src={BlogImg1} />
                        </div>
                        <div className={style['ElementBody']}>
                            <span className={style['ElementTitle']}>Business</span>
                            <h3>
                                Why Tech Should Behave
                                <br />
                                More Finance.
                            </h3>
                            <p>
                                Modi tempora incidunt ut labore aur
                                <br />
                                dolore magnam aliquam..
                            </p>
                            <div className={style['ElementFooter']}>
                                <div className={style['FooterLeft']}>
                                    <img src={BlogIcon1} />
                                    <span>David William</span>
                                </div>
                                <div className={style['FooterRight']}>
                                    <p>Jan 1, 2022</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={style['BlogElement']}>
                        <div className={style['BlogImg']}>
                            <img src={BlogImg1} />
                        </div>
                        <div className={style['ElementBody']}>
                            <span className={style['ElementTitle']}>Business</span>
                            <h3>
                                Why Tech Should Behave
                                <br />
                                More Finance.
                            </h3>
                            <p>
                                Modi tempora incidunt ut labore aur
                                <br />
                                dolore magnam aliquam..
                            </p>
                            <div className={style['ElementFooter']}>
                                <div className={style['FooterLeft']}>
                                    <img src={BlogIcon1} />
                                    <span>David William</span>
                                </div>
                                <div className={style['FooterRight']}>
                                    <p>Jan 1, 2022</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a className={style['BlogElement']}>
                        <div className={style['BlogImg']}>
                            <img src={BlogImg1} />
                        </div>
                        <div className={style['ElementBody']}>
                            <span className={style['ElementTitle']}>Business</span>
                            <h3>
                                Why Tech Should Behave
                                <br />
                                More Finance.
                            </h3>
                            <p>
                                Modi tempora incidunt ut labore aur
                                <br />
                                dolore magnam aliquam..
                            </p>
                            <div className={style['ElementFooter']}>
                                <div className={style['FooterLeft']}>
                                    <img src={BlogIcon1} />
                                    <span>David William</span>
                                </div>
                                <div className={style['FooterRight']}>
                                    <p>Jan 1, 2022</p>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className={style['BlogButton']}>
                <a href="">View All Blogs</a>
                </div>
            </div>
        </div>
    )
}

export default Blog