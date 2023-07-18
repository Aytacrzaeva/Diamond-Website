import React from 'react'
import "./"
const Faqback = () => {
  return (
    <div className="faqback">
    <div className="faqback__left">
        <div className="faqback__left__button">
            <button>
                <Link to="/">
            <BsArrowLeftCircle id='back'/>
                </Link>
            Back To Home
            </button>
        </div>
       
    </div>
    <div className="faqback__right">
        <Link to="/"><AiFillHome/></Link>
        <p>/</p>
        <p>Forgot Password</p>
        
    </div>
</div>
  )
}

export default Faqback