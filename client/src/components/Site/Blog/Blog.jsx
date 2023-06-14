import React from 'react'
import "./Blog.scss"
import { Link } from 'react-router-dom'
const Blog = () => {
    return (
        <div className="blog">
            <div className="blog__up">
                <h2>From Our Blog</h2>
            </div>
            <div className="blog__down">
                <div className="blog__down__card">
                    <div className="blog__down__card__img">
                        <img src="https://opencart.workdo.io/diamond/image/cache/catalog/blog/5-1000x670.jpg" alt="" />
                    </div>
                    <div className="blog__down__card__items">
                        <div className="blog__down__card__item1">
                        <Link>Best bracelet and necklaces</Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>

                        </div>
                        <div className="blog__down__card__item2">
                            <button>Read More</button>
                            <p>13 Dec,2022</p>
                        </div>
                    </div>
                </div>
                <div className="blog__down__card">
                    <div className="blog__down__card__img">
                        <img src="https://opencart.workdo.io/diamond/image/cache/catalog/blog/5-1000x670.jpg" alt="" />
                    </div>
                    <div className="blog__down__card__items">
                        <div className="blog__down__card__item1">
                        <Link>Best bracelet and necklaces</Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>

                        </div>
                        <div className="blog__down__card__item2">
                            <button>Read More</button>
                            <p>13 Dec,2022</p>
                        </div>
                    </div>
                </div>
                <div className="blog__down__card">
                    <div className="blog__down__card__img">
                        <img src="https://opencart.workdo.io/diamond/image/cache/catalog/blog/5-1000x670.jpg" alt="" />
                    </div>
                    <div className="blog__down__card__items">
                        <div className="blog__down__card__item1">
                        <Link>Best bracelet and necklaces</Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>

                        </div>
                        <div className="blog__down__card__item2">
                            <button>Read More</button>
                            <p>13 Dec,2022</p>
                        </div>
                    </div>
                </div>
                <div className="blog__down__card">
                    <div className="blog__down__card__img">
                        <img src="https://opencart.workdo.io/diamond/image/cache/catalog/blog/5-1000x670.jpg" alt="" />
                    </div>
                    <div className="blog__down__card__items">
                        <div className="blog__down__card__item1">
                        <Link>Best bracelet and necklaces</Link>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry....</p>

                        </div>
                        <div className="blog__down__card__item2">
                            <button>Read More</button>
                            <p>13 Dec,2022</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog