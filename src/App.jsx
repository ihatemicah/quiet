import './App.css'
import WorkSamples from './WorkSamples'
import ValueState from './ValueState'
import AboutUs from './AboutUs'
import Footer from './Footer'

function App() {
  const workSamplesMedia = [
    {
      type: 'video',
      videoSrc: 'https://quiettuesday.b-cdn.net/Motion/seedling_compressed_adjusted.mp4',
      thumbnail: 'https://quiettuesday.b-cdn.net/Static/seedling_preview.jpg'
    },
    {
      type: 'image',
      src: 'https://quiettuesday.b-cdn.net/Static/s_c_3.png',
      alt: 'work sample 2'
    },
    {
      type: 'video',
      videoSrc: 'https://quiettuesday.b-cdn.net/Motion/Joi%20and%20Blokes%20-%20Work%20Example%20(S).mp4',
      thumbnail: 'https://quiettuesday.b-cdn.net/Static/jb-thumbnail.jpg'
    },
    {
      type: 'video',
      videoSrc: 'https://quiettuesday.b-cdn.net/Motion/Lumina%20-%20Video%20-%2060%20Fps%20-%202.mp4',
      thumbnail: 'https://quiettuesday.b-cdn.net/Static/lumina-app.png'
    },
    {
      type: 'video',
      videoSrc: 'https://quiettuesday.b-cdn.net/Motion/Evde-Motion.mp4',
      thumbnail: 'https://quiettuesday.b-cdn.net/Static/Evde.jpg'
    },
    {
      type: 'video',
      videoSrc: 'https://quiettuesday.b-cdn.net/Motion/Tennis%20Ball30FPS.mp4',
      thumbnail: 'https://quiettuesday.b-cdn.net/Static/brat-tennis.jpg'
    },
    {
      type: 'image',
      src: 'https://quiettuesday.b-cdn.net/Static/Glass%20-%20Black.png',
      alt: 'subframe glass image'
    },
    {
      type: 'image',
      src: 'https://quiettuesday.b-cdn.net/Static/multiple-view.jpg',
      alt: 'pill render'
    },
    {
      type: 'image',
      src: 'https://quiettuesday.b-cdn.net/Static/social-design_1.png',
      alt: 'work sample 3'
    },
    {
      type: 'image',
      src: 'https://quiettuesday.b-cdn.net/Static/joi_bloke_ad_4.jpg',
      alt: 'work sample 3'
    },
    {
      type: 'image',
      src: 'https://quiettuesday.b-cdn.net/Static/s_c_1.png',
      alt: 'work sample 1'
    },
    
  ]

  return (
    
    
    <div className='page-wrapper'>

      <div className='page-container'>
        <div className='header-section'>
          <img src="/src/assets/qt-logo.svg" alt="" /> 
          <div> work@quiettuesday.com</div> 
        </div> 
        <div className='section-border'>
          <div className='business-section'>
            <p> Your in-house creative studio for hire</p>
            <p> for </p>
            <p> Emerging brands and early-stage ventures</p>
          </div>
        </div>
        <div className='section-border'>
          <WorkSamples title="Work samples ↘" mediaItems={workSamplesMedia} />
        </div>
        <div className='section-border'>
          <ValueState/>
        </div>
        <div className='section-border'>
          <AboutUs />
        </div>
        <Footer />
      </div>
     
    </div>
  )
}

export default App
