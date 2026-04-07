import './App.css'
import figmaLogo from './assets/com/Figma.svg'
import redbullLogo from './assets/com/redbull.svg'
import aritziaLogo from './assets/com/Aritzia.svg'
import salesforceLogo from './assets/com/Salesforce.svg'
import ringLogo from './assets/com/Ring.svg'
import contraLogo from './assets/com/contra.svg'
import amazonLogo from './assets/com/Amazon.svg'
import tybLogo from './assets/com/TYB.svg'
import micahPfp from './assets/images/micah-pfp.jpg'
import jiraPfp from './assets/images/jira-pfp.jpg'

function AboutUs() {
  return (
    <div className="about-us">
      <div className='about-1'>
        <div className='about-text'>
            <h3>
                About us
            </h3>
            <p>
            Were a creative pair dedicated to making your
            brand feel clear, intentional, and expressive.
            We work closely with you-almost like in-
            house to shape design, motion, and 3D into
            one coherent visual language.
            </p>
        </div>
        <div className='about-companies'>
            <img src={figmaLogo} alt="" />
            <img src={redbullLogo} alt="" />
            <img src={aritziaLogo} alt="" />
            <img src={salesforceLogo} alt="" />
            <img src={ringLogo} alt="" />
            <img src={contraLogo} alt="" />
            <img src={amazonLogo} alt="" />
            <img src={tybLogo} alt="" />
        </div>
      </div>
      <div className='about-2'>
        <div className='pfp-image'>
        <img src={micahPfp} alt="" />
        </div>
        <div className='pfp-image'>
        <img src={jiraPfp} alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
