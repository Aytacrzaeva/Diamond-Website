import React from 'react';
import { useState } from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiDownArrow } from "react-icons/bi";
import "./FAQ.scss";
import { AiFillHome } from "react-icons/ai";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const FAQ = () => {
  const accordionData = [
    {
      title: "How to setup a page with custom fields?",
      content: "To set up a page with custom fields, follow these steps:\n\n1. Create a new page or open an existing one in your content management system.\n\n2. Identify the custom fields you want to add to the page."
    },
    {
      title: "What is diamond certification?",
      content: "Diamond certification is an independent evaluation of a diamond's quality conducted by gemological laboratories. It provides detailed information about the diamond's characteristics, including the 4Cs (Cut, Clarity, Color, and Carat weight). Certification ensures that the diamond meets industry standards and can help you make an informed purchasing decision."
    },
    {
      title: "Do you offer customization options for diamond jewelry?",
      content: "Yes, we offer customization services for diamond jewelry. You can contact our customer support to discuss your requirements and design preferences. Our team will guide you through the customization process and provide you with options to create a unique piece of jewelry that suits your style and preferences."
    },
    {
      title: "What is your return policy?",
      content: "We have a 30-day return policy for our products. If you are not satisfied with your purchase, you can return it within 30 days for a refund or exchange. Please note that the item must be in its original condition and packaging. For more details, please refer to our Returns and Exchanges page or contact our customer support."
    },
    {
      title: "How do I care for my diamond jewelry?",
      content: "To care for your diamond jewelry, it is recommended to clean it regularly with a mild detergent and a soft brush. You should also avoid exposing it to harsh chemicals and store it in a separate jewelry box or pouch to prevent scratching or damage. If you have any specific care instructions for your jewelry, it will be provided along with your purchase."
    },
    {
      title: "What payment methods do you accept?",
      content: "We accept various payment methods, including credit cards (Visa, Mastercard, American Express), debit cards, and PayPal. You can select your preferred payment option during the checkout process. All payments are securely processed to ensure the safety of your personal and financial information."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <div className="why__sec">
        <div className="faqback">
          <div className="faqback__left">
            <div className="faqback__left__button">
              <button>
                <Link to="/">
                  <BsArrowLeftCircle id='back' />
                </Link>
                Back To Home
              </button>
            </div>
          </div>
          <div className="faqback__right">
            <Link to="/"><AiFillHome /></Link>
            <p>/</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="why__sec__title services__sec__title">
          <div className="services__sec__title__box">
            <h2>FAQ</h2>
            <p>Frequently Asked Questions</p>
          </div>
        </div>
        <div className="why__sec__box">
          <div className="why__sec__box__right">
            <div className='accordion'>
              {accordionData.map((item, index) => (
                <div key={index} className={`custom__accor ${activeIndex === index ? 'active' : ''}`}>
                  <button onClick={() => handleClick(index)}>
                    <div className="accor__box">
                      <div className="accor__icon">
                        <AiOutlineCheckCircle className='accor_icon' />
                      </div>
                      {item.title}
                    </div>
                    <div className="accor__icon accor__icon2">
                      <BiDownArrow className='accor_icon2' />
                    </div>
                  </button>
                  <div className={`content ${activeIndex === index ? 'active' : ''}`}>
                    {item.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
