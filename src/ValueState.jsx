import './App.css'
import exclamationIcon from './assets/exclamation-icn.svg'

function ValueState() {
  return (
    <div className="value-state">
      <div className='value-container'>
        <div className='value-intro'>
            <div className='value-pitch'>
                <p> Your in-house creative team, without the headcount</p>
            </div>
            <div className='value-pitch-2'>  
                <p> From brand identity and motion to 3D and content strategy, we operate like in-house collaborators.
                One monthly cadence. One point of contact. Every medium.</p>
            </div>
        </div>
        <div className='value-cta-section'>
          <div className='cta-section-1'>
            <div className='cta-title'>
              <img src={exclamationIcon} alt="" />
              <p> Challenges you face</p>
            </div>
          </div>
          <div className='cta-section-2'>
            <div className='cta-description-1'>
              <p> Brand visuals feeling inconsistent</p>
              <p> Outdated identity that no longer fits</p>
              <p> No creative partner to experiment with new channels</p>
            </div>
            <div className='cta-description-2'>
              <p> Struggling to stand out</p>
              <p> Strategy feels reactive, not planned</p>
            
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValueState
