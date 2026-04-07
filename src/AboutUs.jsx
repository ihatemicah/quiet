import './App.css'

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
            <img src="/src/assets/com/Figma.svg" alt="" />
            <img src="/src/assets/com/redbull.svg" alt="" />
            <img src="/src/assets/com/Aritzia.svg" alt="" />
            <img src="/src/assets/com/Salesforce.svg" alt="" />
            <img src="/src/assets/com/Ring.svg" alt="" />
            <img src="/src/assets/com/contra.svg" alt="" />
            <img src="/src/assets/com/amazon.svg" alt="" />
            <img src="/src/assets/com/tyb.svg" alt="" />
        </div>
      </div>
      <div className='about-2'>
        <div className='pfp-image'>
        <img src="/src/assets/images/micah-pfp.jpg" alt="" />
        </div>
        <div className='pfp-image'>
        <img src="/src/assets/images/jira-pfp.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
