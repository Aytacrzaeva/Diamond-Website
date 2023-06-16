import React from 'react'
import {AiFillLike} from "react-icons/ai"
import {FaRegClipboard,FaBus} from "react-icons/fa"
import {AiOutlineDeploymentUnit} from "react-icons/ai"
import "./Conditions.scss"
const Conditions = () => {
  return (
    <div className="conditions">
      <div className="conditions__up">
        <h2>Terms & Conditions</h2>
      </div>
      <div className="conditions__down">
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>The standard Lorem Ipsum passage</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <AiFillLike/>
            </div>
            <div className="conditions__down__item__down__right">
            An natum nulla eruditi mei, te qui idque adipisci, nonumy graeci has ad. Cu diam dolor noluisse nec. Nam ex dicta graeco, audire nominati persequeris eu eos. Pri nibh dolor soleat cu, sanctus inermis instructior eum ei. Scripta ceteros sit ex. Et eum alia laudem delectus.
            </div>
          </div>
        </div>
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Aliquam vulputate, neque consectetur gravida egestas</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaBus/>
            </div>
            <div className="conditions__down__item__down__right">
            Et quis dictas meliore nec, habeo lorem blandit et vis, alia veniam assueverit an duo. Facilis offendit eleifend id has. Deserunt expetenda est an, tacimates iudicabit sed eu. Cum eu periculis similique, ut meis expetenda quo.  Eam ea omnis fierent disputando.
            </div>
          </div>
        </div>
        
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Suspendisse vel lorem massa. Morbi</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <FaRegClipboard/>
            </div>
            <div className="conditions__down__item__down__right">
            Eam eu illud menandri praesent, ei regione oporteat tractatos nam. Ad mea postea voluptua constituam, aeterno aperiri facilis et nec, utroque veritus no mea. Mel quando tantas accusamus et, quo quot augue senserit ex, possim efficiendi has no. Nam at bonorum prodesset, per ne primis platonem, mel in mundi salutatus constituto. Ei vis vidit oportere, no prima eripuit ius, vim at justo legendos.
            </div>
          </div>
        </div>
        <div className="conditions__down__item">
          <div className="conditions__down__item__up">
            <h5>Vivamus ut diam ut risus sodales vestibulum eget varius dolor</h5>
          </div>
          <div className="conditions__down__item__down">
            <div className="conditions__down__item__down__left">
              <AiOutlineDeploymentUnit/>
            </div>
            <div className="conditions__down__item__down__right">
              Has ut stet discere nonumes, te dicam nullam vim. Eam iriure tacimates persecuti ut. No labore reprimique consequuntur pri, iusto nihil ex usu. Ne illud definitionem pri, prima fuisset phaedrum sea cu. His ea partem tempor elaboraret, nam iudico atomorum accusamus ad, quo ut quidam aliquam voluptua. Cu cotidieque dissentiunt vix, at putent tamquam scribentur usu.


            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Conditions