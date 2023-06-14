import React from 'react'
import About1 from "../../../../images/about/about-1.jpg"
import About2 from "../../../../images/about/about-2.jpg"
import "./AboutUs.scss"
const AboutUs = () => {
    return (
        <div className="about">
            <div className="about__header">
                <div className="about__header__head">
                <h2>ABOUT US</h2>
                </div>
                <div className="about__header__body">
                <div className="about__header__left">
                <p>Plenty of jewelers may say customers are like family but to us this phrase truly means something. Too often, jewelers are eager to sell you the diamond that they want you to buy and not what is best for you. At Kwiat, we want you to get the diamond that is right for you and your budget.
                    Our intention is to share our knowledge and expertise as we welcome you into the Kwiat family. An emphasis is placed on providing advice that fits your situation, with personal recommendations for selecting the right diamond jewelry for any of your special occasions. We take pride in our name and what it has come to stand for—diamond jewelry crafted with honesty and integrity. This is why customers keep coming back, generation after generation.</p>
                </div>
                <div className="about__header__right">
                <p>Plenty of jewelers may say customers are like family but to us this phrase truly means something. Too often, jewelers are eager to sell you the diamond that they want you to buy and not what is best for you. At Kwiat, we want you to get the diamond that is right for you and your budget.
                    Our intention is to share our knowledge and expertise as we welcome you into the Kwiat family. An emphasis is placed on providing advice that fits your situation, with personal recommendations for selecting the right diamond jewelry for any of your special occasions. We take pride in our name and what it has come to stand for—diamond jewelry crafted with honesty and integrity. This is why customers keep coming back, generation after generation.</p>
                </div>

                </div>
            </div>
            <div className="about__body">
                <div className="about__body__sec">
                    <div className="about__body__sec__left">
                        <h2>LOWELL KWIAT
                            CHAIRMAN</h2>
                        <p>

                            As the patriarch of the Kwiat family, Lowell set the bar as he led the company into a new era. Over his 45 years, he took Kwiat from a renowned jeweler that supplied diamonds to some of the most prominent industry names and created a distinguished brand that sells the finest diamond jewelry directly to clients.

                            One of Lowell’s most exciting moments through the years was a collaboration with artist Vik Muniz for the Diamond Diva series, which raised $175,000 for Jewelers for Children (JFC). But his crowning achievement is watching his three sons continue the family legacy.</p>
                    </div>
                    <div className="about__body__sec__right">
                        <img src={About1} alt="" />
                    </div>
                </div>
                <div className="about__body__sec">
                    <div className="about__body__sec__left">
                        <img src={About2} alt="" />
                    </div>
                    <div className="about__body__sec__right">
                        <h2>GREG KWIAT
                            CHIEF EXECUTIVE OFFICER</h2>
                        <p>From beautiful diamonds to the Beatles, Greg’s passions run far and wide. Before joining Kwiat in 2004, Greg received his bachelor’s degree and MBA from the University of Pennsylvania. From there, he went on to become an investment banker and one of the youngest Vice Presidents in Goldman Sachs’ history.

                            Not long after Greg joined Kwiat, he took on the role of CEO. In this position, he manages all aspects of the business, from jewelry design to educating clients about diamonds. Every once in a while, you can spot Greg sharing his expertise in the media, including 60 minutes and The New York Times. When he is not giving interviews, he enjoys his role as lead singer of a Beatles and Rolling Stones cover band and devoting time to his family.</p>
                    </div>
                </div>
                <div className="about__body__sec3">
                    <div className="about__body__sec3__left"></div>
                    <div className="about__body__sec3__right"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs